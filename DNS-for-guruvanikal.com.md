# Connecting guruvanikal.com to the Bolt site

The domain is registered at **GoDaddy**, and its DNS is managed there too (name servers
ns23/ns24.domaincontrol.com). Live site today: https://learnaicode-guruvani-txe2.bolt.host

## Step 1: prove you own the domain (add now)

GoDaddy → My Products → guruvanikal.com → **DNS** → **Add New Record**

| Type | Name (Host) | Value | TTL |
|---|---|---|---|
| TXT | `_bolt-verify` | `bolt-verify-fb5f356db46fd9c6b6739cfb26044dd2a3d546118fce0cb232726185f337951d` | 1 hour (default) |

Done 2026-11-15: verified.

## Step 2: point the domain at the site

In the same GoDaddy DNS page, **edit** the existing records (do not add duplicates):

| Type | Name | Value | Note |
|---|---|---|---|
| A | `@` | `75.2.60.5` | replaces the current A record `5.78.188.22`; GoDaddy has no ALIAS for the root, so Bolt's fallback A record is used |
| CNAME | `www` | `site-dns.bolt.host` | replaces the current `www` record |

If there is any other A record for `@`, delete it so only `75.2.60.5` remains.
Leave the `_bolt-verify` TXT record in place. Then Claude presses **Check DNS status** in Bolt.
Changes usually work within minutes; some take up to 24 hours.

## Done (2026-11-15)

Bolt shows guruvanikal.com (primary) and www.guruvanikal.com (redirects to it) as secure and running.
Public DNS returns 75.2.60.5; the site answered 200 over HTTPS, and www redirects with 301.
