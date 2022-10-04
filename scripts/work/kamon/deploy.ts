import { ethers } from "hardhat";

async function main() {
  // print deployer
  const [deployer] = await ethers.getSigners();
  console.log("deployer:", deployer.address);
  console.log(
    "balance:",
    ethers.utils.formatEther(await deployer.getBalance()),
    "ETH"
  );

  // deploy assetStore
  const assetStoreFactory = await ethers.getContractFactory("AssetStore");
  const assetStore = await assetStoreFactory.deploy();
  await assetStore.deployed();
  console.log("assetStore:", assetStore.address);

  // deploy decoder
  const SVGFactory = await ethers.getContractFactory("SVGPathDecoder2");
  const decoder = await SVGFactory.deploy();
  await decoder.deployed();
  console.log("decoder:", decoder.address);

  // deploy KamonToken
  const factory = await ethers.getContractFactory("KamonToken");
  const kamonToken = await factory.deploy(
    assetStore.address, // IAssetStoreRegistry: implemented by AssetStore
    assetStore.address, // IAssetStore: implemented by AssetStore
    deployer.address, // developer: 1 in 20 tokens of non-affiliated mints go to the developer
    deployer.address // openseaProxy: easy to trade
  );
  await kamonToken.deployed();
  console.log("KamonToken:", kamonToken.address);

  // set address to assetStore
  await assetStore.setPathDecoder(decoder.address);
  await assetStore.setWhitelistStatus(kamonToken.address, true);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*
deployed addresses on goerli testnet
assetStore : 0x4159FbA0C0B51341790E9191f35E39a98B454d52
decoder    : 0x4b1AaD75C1a14ce3121a61431FAa60b261D81e8e
kamon      : 0x7AdA5e9751ce2Aa9Ab7FbAb18eFFD3D6dE3d70dA
*/
