import abi from "../../contracts/abi.js";
import { ethers } from "ethers";

async function contractExecuteFcn(walletData, network, contractAddress, partName) {
	console.log(`\n=======================================`);
	console.log(`- Calling contract function (Getting info)...🟠`);

	// ETHERS PROVIDER AND SIGNER
	const provider = walletData[1];
	const signer = provider.getSigner();

	// EXECUTE THE SMART CONTRACT
	let outText;
	try {
		// EXECUTE CONTRACT FUNCTION
		const gasLimit = 0;
		const myContract = new ethers.Contract(contractAddress, abi, signer);
		const callTx = await myContract.getAmount(partName, { gasLimit: gasLimit });
		const callResult = callTx.toString();

		outText = `Call complete ✅ | ${callResult} unit(s) of ${partName} are available`;
		console.log(`- Contract called ✅`);
	} catch (executeError) {
		console.log(`- ${executeError.message.toString()}`);
	}

	return outText;
}

export default contractExecuteFcn;
