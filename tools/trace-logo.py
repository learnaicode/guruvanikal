# Traces brand/guruvanikal-logo.png into exact outlines for the 3D logo:
#   disc  = the crimson shape (outer edge, with holes where the figures are)
#   light = the white figures (the Guru and the child), the negative space the light comes through
# Usage: sips -s format bmp brand/guruvanikal-logo.png --out /tmp/logo.bmp ; python3 tools/trace-logo.py /tmp/logo.bmp
import struct, sys, json, math
d = open(sys.argv[1], 'rb').read()
off = struct.unpack_from('<I', d, 10)[0]
w, h = struct.unpack_from('<ii', d, 18); bpp = struct.unpack_from('<H', d, 28)[0]
flip = h > 0; h = abs(h); bs = bpp // 8; row = (w * bs + 3) // 4 * 4
def px(x, y):
    yy = h - 1 - y if flip else y
    o = off + yy * row + x * bs
    b, g, r = d[o], d[o + 1], d[o + 2]; a = d[o + 3] if bs == 4 else 255
    return r, g, b, a
kind = [[0] * w for _ in range(h)]   # 0 outside, 1 crimson, 2 white figure
for y in range(h):
    for x in range(w):
        r, g, b, a = px(x, y)
        if a < 128: continue
        kind[y][x] = 2 if g > 128 else 1
sample = px(360, 150)
# the circle: fitted to the crimson's extent (the top and sides are untouched by the figures)
xs = [x for y in range(h) for x in range(w) if kind[y][x]]; ys = [y for y in range(h) for x in range(w) if kind[y][x]]
cx = (min(xs) + max(xs) + 1) / 2; top = min(ys); R = (max(xs) + 1 - min(xs)) / 2; cy = top + R
def loops(k):
    nxt = {}
    inside = lambda x, y: 0 <= x < w and 0 <= y < h and kind[y][x] == k
    for y in range(h):
        for x in range(w):
            if kind[y][x] != k: continue
            if not inside(x, y - 1): nxt.setdefault((x, y), []).append((x + 1, y))
            if not inside(x + 1, y): nxt.setdefault((x + 1, y), []).append((x + 1, y + 1))
            if not inside(x, y + 1): nxt.setdefault((x + 1, y + 1), []).append((x, y + 1))
            if not inside(x - 1, y): nxt.setdefault((x, y + 1), []).append((x, y))
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
def simplify(l, eps=0.35):
    def dp(a, b):
        if b - a < 2: return []
        ax, ay = l[a]; bx, by = l[b]; L = math.hypot(bx - ax, by - ay) or 1
        best, bi = 0, -1
        for i in range(a + 1, b):
            dd = abs((l[i][0] - ax) * (by - ay) - (l[i][1] - ay) * (bx - ax)) / L
            if dd > best: best, bi = dd, i
        return dp(a, bi) + [bi] + dp(bi, b) if best > eps else []
    half = len(l) // 2
    idx = [0] + dp(0, half) + [half] + dp(half, len(l) - 1) + [len(l) - 1]
    return [l[i] for i in idx]
sys.setrecursionlimit(100000)
def norm(l): return [[round((x - cx) / R, 4), round(-(y - cy) / R, 4)] for x, y in simplify(smooth(l))]   # unit circle, y up
res = {'color': '#%02x%02x%02x' % sample[:3], 'disc': [], 'light': []}
for k, name in ((1, 'disc'), (2, 'light')):
    for l in loops(k):
        a = area(l)
        if abs(a) < 60: continue
        res[name].append({'hole': a < 0, 'area': round(abs(a) / (math.pi * R * R), 4), 'pts': norm(l)})
    res[name].sort(key=lambda s: -s['area'])
json.dump(res, open('src/logo-shape.json', 'w'))
print('circle', cx, cy, R, 'colour', res['color'])
for n in ('disc', 'light'): print(n, [(s['hole'], s['area'], len(s['pts'])) for s in res[n]])
