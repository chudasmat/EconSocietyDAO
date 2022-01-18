import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xFd44f92Ae5A094514b9a543E2Bc72D44fE4E6194");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "EconSocietyDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "ECON",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("Failed to deploy token module", error);
  }
})();