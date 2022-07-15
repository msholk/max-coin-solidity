// npx hardhat run scripts/deploy.js --network rinkeby

const hre = require("hardhat");

async function main() {

    const [owner] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory("MaxCoin");
    const contract = await contractFactory.deploy();
    await contract.deployed();

    console.log("MaxCoin(MPC) Contract deployed to:", contract.address);
    console.log("MaxCoin(MPC) Contract owner address:", owner.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
