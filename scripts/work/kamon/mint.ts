import { ethers } from "hardhat";
import { loadAssets } from "../createAsset";
import chuukageUraZakura from "./assets/ChuukageUraZakura.json";

async function main() {
  // KamonToken address
  const kamon = "0x7AdA5e9751ce2Aa9Ab7FbAb18eFFD3D6dE3d70dA";

  // print deployer
  const [deployer] = await ethers.getSigners();
  console.log("deployer:", deployer.address);
  console.log(
    "balance:",
    ethers.utils.formatEther(await deployer.getBalance()),
    "ETH"
  );

  // set assets
  const assets = loadAssets({
    group: "Hakko Daiodo (CC-BY-SA)",
    category: "Kamon",
    assets: [chuukageUraZakura],
  });

  // mint
  const asset = assets[0];
  asset.soulbound = deployer.address;
  const factory = await ethers.getContractFactory("KamonToken");
  const kamonToken = factory.attach(kamon);
  const tx = await kamonToken.mintWithAsset(asset, 0);
  const result = await tx.wait();
  console.log(result.gasUsed);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
