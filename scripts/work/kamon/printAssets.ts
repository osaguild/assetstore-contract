import { kamonAssets } from "./assets/sample";

const main = async () => {
  // print compressed kamon assets
  const kamon = kamonAssets[0];
  console.log("kamon", JSON.stringify(kamon));
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
