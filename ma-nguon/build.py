#!/usr/bin/env python3
"""Đóng gói ứng dụng ALLY: tạo index.html (bản cài được trên Android & iOS), artifact.html (bản xem nhanh),
manifest, service worker, biểu tượng và tệp dữ liệu JSON."""
import json, os, re, shutil, subprocess, sys
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')
DIST = os.path.join(ROOT, 'dist')

def read(name):
    with open(os.path.join(SRC, name), encoding='utf-8') as f:
        return f.read()

def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)

css = read('app.css')
# Khoảng cách mép bên: viết thẳng biểu thức an toàn (theo yêu cầu khung hiển thị)
css = css.replace('var(--gutter-l)', 'max(16px, env(safe-area-inset-left, 0px))').replace('var(--gutter-r)', 'max(16px, env(safe-area-inset-right, 0px))')
body = read('body.html')
data_js = read('data.js')
app_js = read('app.js')

LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
VIET = 'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB'
FONT_FILES = []
FACES = []
for fam, slug, weights in [('Baloo 2', 'baloo-2', (700, 800)), ('Be Vietnam Pro', 'be-vietnam-pro', (400, 500, 600, 700))]:
    for w in weights:
        for sub, rng in (('vietnamese', VIET), ('latin', LATIN)):
            fn = f'{slug}-{sub}-{w}-normal.woff2'
            FONT_FILES.append(fn)
            FACES.append(f"@font-face {{ font-family: '{fam}'; font-style: normal; font-display: swap; font-weight: {w}; src: url(fonts/{fn}) format('woff2'); unicode-range: {rng}; }}")
LOCAL_FONT_CSS = '\n'.join(FACES)
FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap">'
DESC = 'ALLY – Người bạn đồng hành hỗ trợ nạn nhân, học sinh và người dân phòng, chống xâm hại trẻ em. Ẩn danh, bảo mật thông tin, kết nối Tổng đài 111 và 113.'

if os.path.isdir(DIST):
    shutil.rmtree(DIST)
os.makedirs(DIST)

# ---------- index.html: bản đầy đủ để đưa lên mạng và cài như ứng dụng ----------
index = f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content">
<title>ALLY – Người bạn đồng hành phòng, chống xâm hại trẻ em</title>
<meta name="description" content="{DESC}">
<meta name="theme-color" content="#0B7A69" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0B1816" media="(prefers-color-scheme: dark)">
<meta name="referrer" content="no-referrer">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="ALLY">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="preload" href="fonts/be-vietnam-pro-vietnamese-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<style>
{LOCAL_FONT_CSS}
:root {{ padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }}
{css}
</style>
</head>
<body>
{body}
<script>
{data_js}
</script>
<script>
{app_js}
</script>
</body>
</html>
'''
write(os.path.join(DIST, 'index.html'), index)

# ---------- artifact.html: bản xem nhanh (khung hiển thị tự bọc thẻ html/head/body) ----------
artifact = f'''<title>Chatbot ALLY</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="{DESC}">
{FONTS}
<style>
{css}
</style>
{body}
<script>
{data_js}
</script>
<script>
{app_js}
</script>
'''
write(os.path.join(DIST, 'artifact.html'), artifact)

# ---------- dữ liệu JSON ----------
out = subprocess.run(['node', '-e', '''
const fs=require("fs"); global.window={};
eval(fs.readFileSync(process.argv[1],"utf8"));
process.stdout.write(JSON.stringify(window.ALLY_DEFAULT || window.BANAN_DEFAULT,null,2));
''', os.path.join(SRC, 'data.js')], capture_output=True, text=True, check=True)
data = json.loads(out.stdout)
write(os.path.join(DIST, 'du-lieu', 'kho-du-lieu.json'), json.dumps(data, ensure_ascii=False, indent=2) + '\n')

# ---------- manifest + service worker ----------
manifest = {
    "name": "ALLY – Người bạn đồng hành phòng, chống xâm hại trẻ em",
    "short_name": "ALLY",
    "description": DESC,
    "lang": "vi",
    "dir": "ltr",
    "start_url": "./index.html",
    "scope": "./",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#EEF4F2",
    "theme_color": "#0B7A69",
    "categories": ["education", "health", "lifestyle"],
    "icons": [
        {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
    ]
}
write(os.path.join(DIST, 'manifest.webmanifest'), json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
sw = read('sw.js').replace("  './icons/apple-touch-icon.png'\n", "  './icons/apple-touch-icon.png',\n" + ',\n'.join(f"  './fonts/{fn}'" for fn in FONT_FILES) + '\n')
write(os.path.join(DIST, 'sw.js'), sw)
os.makedirs(os.path.join(DIST, 'fonts'), exist_ok=True)
for fn in FONT_FILES + ['LICENSE-Baloo-2.txt', 'LICENSE-Be-Vietnam-Pro.txt']:
    shutil.copy(os.path.join(SRC, 'fonts', fn), os.path.join(DIST, 'fonts', fn))

# ---------- biểu tượng ----------
TEAL = (11, 122, 105, 255); SUN = (239, 174, 51, 255); WHITE = (255, 255, 255, 255)

def draw_mark(d, cx, cy, s):
    """Vẽ bong bóng trò chuyện có trái tim, tâm (cx, cy), cạnh s."""
    w, hgt = s, s * 0.78
    x0, y0 = cx - w / 2, cy - hgt / 2 - s * 0.06
    r = s * 0.2
    d.rounded_rectangle([x0, y0, x0 + w, y0 + hgt], radius=r, fill=WHITE)
    # đuôi bong bóng
    d.polygon([(x0 + w * 0.2, y0 + hgt - 2), (x0 + w * 0.2, y0 + hgt + s * 0.2), (x0 + w * 0.46, y0 + hgt - 2)], fill=WHITE)
    # trái tim (đường cong tham số)
    import math
    hx, hy, hs = cx, y0 + hgt * 0.5, s * 0.0135
    pts = []
    for k in range(120):
        t = 2 * math.pi * k / 120
        x = 16 * math.sin(t) ** 3
        y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        pts.append((hx + x * hs, hy - y * hs))
    d.polygon(pts, fill=TEAL)
    # mặt trời nhỏ
    sr = s * 0.11
    sx, sy = x0 + w - sr * 0.3, y0 + sr * 0.3
    d.ellipse([sx - sr - s * 0.03, sy - sr - s * 0.03, sx + sr + s * 0.03, sy + sr + s * 0.03], fill=TEAL)
    d.ellipse([sx - sr, sy - sr, sx + sr, sy + sr], fill=SUN)

def icon(size, rounded=True, scale=0.58):
    big = size * 4
    img = Image.new('RGBA', (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        d.rounded_rectangle([0, 0, big - 1, big - 1], radius=int(big * 0.22), fill=TEAL)
    else:
        d.rectangle([0, 0, big, big], fill=TEAL)
    draw_mark(d, big / 2, big / 2 + big * 0.03, big * scale)
    return img.resize((size, size), Image.LANCZOS)

os.makedirs(os.path.join(DIST, 'icons'), exist_ok=True)
icon(192).save(os.path.join(DIST, 'icons', 'icon-192.png'))
icon(512).save(os.path.join(DIST, 'icons', 'icon-512.png'))
icon(512, rounded=False, scale=0.46).save(os.path.join(DIST, 'icons', 'icon-maskable-512.png'))
icon(180, rounded=False, scale=0.56).convert('RGB').save(os.path.join(DIST, 'icons', 'apple-touch-icon.png'))

# ---------- tài liệu & Apps Script ----------
os.makedirs(os.path.join(DIST, 'google-apps-script'), exist_ok=True)
shutil.copy(os.path.join(SRC, 'apps-script', 'Code.gs'), os.path.join(DIST, 'google-apps-script', 'Code.gs'))
shutil.copy(os.path.join(SRC, 'HUONG-DAN.md'), os.path.join(DIST, 'HUONG-DAN.md'))

print('index.html', os.path.getsize(os.path.join(DIST, 'index.html')), 'bytes')
print('artifact.html', os.path.getsize(os.path.join(DIST, 'artifact.html')), 'bytes')
print('kb entries', len(data['kb']), 'quiz', len(data['quiz']))
