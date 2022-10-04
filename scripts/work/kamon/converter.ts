import { readdirSync, readFileSync, writeFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";

// set up XMLParser
const options = {
  ignoreAttributes: false,
  format: true,
};
const parser = new XMLParser(options);

// read directory and get svgs as items
const root = "./scripts/work/kamon/svgs/sakura";
readdirSync(root)
  .filter((_, index) => {
    return index < 100; // only first 100 files
  })
  .map((file) => {
    const xml = readFileSync(`${root}/${file}`, "utf8");
    const obj = parser.parse(xml);
    const svg = obj.svg;
    const width = parseInt(svg["@_width"]);
    const height = parseInt(svg["@_height"]);
    if (
      svg.path &&
      (!svg.rect || !Array.isArray(svg.rect)) &&
      !svg.g &&
      !svg.polygon &&
      !svg.circle
    ) {
      const paths = Array.isArray(svg.path) ? svg.path : [svg.path];
      const bodies = paths
        .filter((path: any) => {
          return !path["@_fill"] && path["@_style"] !== "fill:none";
        })
        .map((path: any) => {
          return path["@_d"];
        });
      const item = {
        name: file.replace(/\.svg/, "").replace(/_/g, " "),
        width,
        height,
        bodies,
      };
      return item;
    } else {
      console.error(file, svg);
      process.exit(0);
    }
  })
  .forEach((file) => {
    writeFileSync(
      `./scripts/work/kamon/assets/${file.name.replace(/\s/g, "")}.json`,
      JSON.stringify(file, null, 2)
    );
  });
