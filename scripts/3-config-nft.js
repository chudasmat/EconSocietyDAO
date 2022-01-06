import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3F7bcF28590551cadFE812f995a544E3D8b55F79",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "EconSocietyDAO Membership",
        description: "This NFT will give you access to EconSocietyDAO!",
        image: readFileSync("scripts/assets/NFT.mp4"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()