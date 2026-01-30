from PIL import Image, ImageDraw

def make_rounded(image_path, output_path, radius):
    img = Image.open(image_path).convert("RGBA")
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), img.size], radius, fill=255)
    img.putalpha(mask)
    img.save(output_path)

# Logo is likely square-ish, use a radius relative to size
# Assuming logo.png is ~512x512, radius 50-100 is good
try:
    make_rounded('src/assets/logo.png', 'public/favicon.png', 100)
    print("Favicon created")
except Exception as e:
    print(f"Error: {e}")
