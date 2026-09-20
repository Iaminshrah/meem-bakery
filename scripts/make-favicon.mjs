import fs from "fs";
import path from "path";
import { chromium } from "playwright";

function pngToIco(png, width) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0);
  entry.writeUInt8(width >= 256 ? 0 : width, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, png]);
}

async function main() {
  const src = fs.readFileSync(
    path.join("assets", "favicon-512x512 (1).png"),
  );
  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: 512, height: 512 } });
  await page.setContent(`<!doctype html>
<canvas id="c" width="512" height="512"></canvas>
<script>
  const img = new Image();
  img.onload = () => {
    const c = document.getElementById("c");
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, 512, 512);
    const d = ctx.getImageData(0, 0, 512, 512);
    for (let i = 0; i < d.data.length; i += 4) {
      const sum = d.data[i] + d.data[i + 1] + d.data[i + 2];
      if (sum > 24) {
        d.data[i] = 201;
        d.data[i + 1] = 162;
        d.data[i + 2] = 39;
        d.data[i + 3] = 255;
      } else {
        d.data[i] = 11;
        d.data[i + 1] = 11;
        d.data[i + 2] = 11;
        d.data[i + 3] = 255;
      }
    }
    ctx.putImageData(d, 0, 0);
    window.gold = c.toDataURL("image/png");
  };
  img.src = "data:image/png;base64,${src.toString("base64")}";
</script>`);
  await page.waitForFunction(() => window.gold, { timeout: 15000 });
  const gold512 = Buffer.from(
    (await page.evaluate(() => window.gold)).split(",")[1],
    "base64",
  );

  async function cropAndResize(size) {
    const dataUrl = await page.evaluate(async (size) => {
      const img = new Image();
      img.src = window.gold;
      await img.decode();
      const src = document.createElement("canvas");
      src.width = img.width;
      src.height = img.height;
      const sctx = src.getContext("2d");
      sctx.drawImage(img, 0, 0);
      const data = sctx.getImageData(0, 0, src.width, src.height);
      let minX = src.width;
      let minY = src.height;
      let maxX = 0;
      let maxY = 0;
      for (let y = 0; y < src.height; y++) {
        for (let x = 0; x < src.width; x++) {
          const i = (y * src.width + x) * 4;
          if (data.data[i] + data.data[i + 1] + data.data[i + 2] > 80) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }
      const pad = Math.round(Math.max(maxX - minX, maxY - minY) * 0.28);
      minX = Math.max(0, minX - pad);
      minY = Math.max(0, minY - pad);
      maxX = Math.min(src.width - 1, maxX + pad);
      maxY = Math.min(src.height - 1, maxY + pad);
      const bw = maxX - minX + 1;
      const bh = maxY - minY + 1;
      const side = Math.max(bw, bh);
      const sx = Math.round(minX + bw / 2 - side / 2);
      const sy = Math.round(minY + bh / 2 - side / 2);
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const ctx = c.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(src, sx, sy, side, side, 0, 0, size, size);
      return c.toDataURL("image/png");
    }, size);
    return Buffer.from(dataUrl.split(",")[1], "base64");
  }

  const png32 = await cropAndResize(32);
  const png180 = await cropAndResize(180);

  fs.writeFileSync(path.join("public", "favicon.png"), gold512);
  fs.writeFileSync(path.join("app", "apple-icon.png"), png180);
  fs.writeFileSync(path.join("app", "icon.png"), png32);
  fs.writeFileSync(path.join("app", "favicon.ico"), pngToIco(png32, 32));

  await browser.close();
  console.log("favicon.ico", fs.statSync("app/favicon.ico").size);
  console.log("icon.png", fs.statSync("app/icon.png").size);
  console.log("apple-icon.png", fs.statSync("app/apple-icon.png").size);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
