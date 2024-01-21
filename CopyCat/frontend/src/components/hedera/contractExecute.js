import abi from "../../contracts/abi.js";
import { ethers } from "ethers";

async function contractExecuteFcn(walletData, contractAddress, args) {
	console.log(`\n=======================================`);
	console.log(`- Executing contract function (Storing info)...🟠`);

	// ETHERS PROVIDER AND SIGNER
	const provider = walletData[1];
	const signer = provider.getSigner();

	// EXECUTE THE SMART CONTRACT
	let txHash;
	let outText;
	const partName = args[0];
	const partAmount = args[1];
	try {
		// EXECUTE CONTRACT FUNCTION
		const gasLimit = 4000000;
		const myContract = new ethers.Contract(contractAddress, abi, signer);
		const executeTx = await myContract.setNameNAmount(partName, partAmount, { gasLimit: gasLimit });
		const executeRx = await executeTx.wait();
		txHash = executeRx.transactionHash;
		outText = "📥Transaction complete ✅";
		console.log(`- Contract executed. Here's the transaction hash: \n${txHash} ✅`);
	} catch (executeError) {
		console.log(`- ${executeError.message.toString()}`);
	}

	return [txHash, outText];
}

export default contractExecuteFcn;
