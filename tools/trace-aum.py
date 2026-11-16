# Traces brand/aum.png (the AUM mark, drawn in cyan with a black shadow) into exact outlines for the
# 3D AUM at the centre of the lotus. Only the cyan is traced; the shadow is left out.
# Usage: sips -s format bmp brand/aum.png --out /tmp/aum.bmp ; python3 tools/trace-aum.py /tmp/aum.bmp
import struct, sys, json, math
d = open(sys.argv[1], 'rb').read()
off = struct.unpack_from('<I', d, 10)[0]
w, h = struct.unpack_from('<ii', d, 18); bpp = struct.unpack_from('<H', d, 28)[0]
flip = h > 0; h = abs(h); bs = bpp // 8; row = (w * bs + 3) // 4 * 4
def px(x, y):
    yy = h - 1 - y if flip else y
    o = off + yy * row + x * bs
    return d[o + 2], d[o + 1], d[o]
on = [[False] * w for _ in range(h)]
for y in range(h):
    for x in range(w):
        r, g, b = px(x, y)
        on[y][x] = b > 170 and g > 170 and r < 170
def loops():
    nxt = {}
    ins = lambda x, y: 0 <= x < w and 0 <= y < h and on[y][x]
    for y in range(h):
        for x in range(w):
            if not on[y][x]: continue
            if not ins(x, y - 1): nxt.setdefault((x, y), []).append((x + 1, y))
            if not ins(x + 1, y): nxt.setdefault((x + 1, y), []).append((x + 1, y + 1))
            if not ins(x, y + 1): nxt.setdefault((x + 1, y + 1), []).append((x, y + 1))
            if not ins(x - 1, y): nxt.setdefault((x, y + 1), []).append((x, y))
    out = []
    while nxt:
        s = next(iter(nxt)); p = s; loop = [p]
        while True:
            c = nxt[p]; q = c.pop()
            if not c: del nxt[p]
            p = q
            if p == s: break
            loop.append(p)
        out.append(loop)
    return out
def area(l): return sum(l[i][0] * l[(i + 1) % len(l)][1] - l[(i + 1) % len(l)][0] * l[i][1] for i in range(len(l))) / 2
def smooth(l, n=3):
    m = len(l)
    return [(sum(l[(i + j) % m][0] for j in range(-n, n + 1)) / (2 * n + 1), sum(l[(i + j) % m][1] for j in range(-n, n + 1)) / (2 * n + 1)) for i in range(m)]
def simplify(l, eps=0.3):
    def dp(a, b):
        if b - a < 2: return []
        ax, ay = l[a]; bx, by = l[b]; L = math.hypot(bx - ax, by - ay) or 1
        best, bi = 0, -1
        for i in range(a + 1, b):
            dd = abs((l[i][0] - ax) * (by - ay) - (l[i][1] - ay) * (bx - ax)) / L
            if dd > best: best, bi = dd, i
        return dp(a, bi) + [bi] + dp(bi, b) if best > eps else []
    half = len(l) // 2
    idx = [0] + dp(0, half) + [half] + dp(half, len(l) - 1)
    return [l[i] for i in idx]
def inside(p, l):
    x, y = p; c = False
    for i in range(len(l)):
        x1, y1 = l[i]; x2, y2 = l[(i + 1) % len(l)]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1: c = not c
    return c
sys.setrecursionlimit(100000)
L = [l for l in loops() if abs(area(l)) > 40]
L = [(area(l), simplify(smooth(l))) for l in L]
xs = [p[0] for _, l in L for p in l]; ys = [p[1] for _, l in L for p in l]
cx = (min(xs) + max(xs)) / 2; cy = (min(ys) + max(ys)) / 2; H = max(ys) - min(ys)
big = max(abs(a) for a, _ in L); sign = [a for a, _ in L if abs(a) == big][0] > 0
outer = [l for a, l in L if (a > 0) == sign]; holes = [l for a, l in L if (a > 0) != sign]
N = lambda l: [[round((x - cx) / H, 4), round((cy - y) / H, 4)] for x, y in l]
parts = [{'outer': N(o), 'holes': [N(hh) for hh in holes if inside(hh[0], o)]} for o in outer]
json.dump({'parts': parts, 'aspect': round((max(xs) - min(xs)) / H, 4)}, open('src/aum-shape.json', 'w'))
print(len(parts), 'parts', [(len(p['outer']), len(p['holes'])) for p in parts], 'aspect', (max(xs) - min(xs)) / H)
