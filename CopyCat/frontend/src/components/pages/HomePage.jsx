import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyGroup from "../MyGroup.jsx";
import walletConnectFcn from "../hedera/walletConnect.js";
import { Center, Flex, Image, useToast } from '@chakra-ui/react'

import "../../styles/App.css";
import catlogo from '../../assets/miLogo2.png';
import { Slide,} from '@chakra-ui/react'


const HomePage = () => {
    const toast = useToast();
	const navigate = useNavigate();
    const [walletData, setWalletData] = useState();
	const [account, setAccount] = useState();
	const [network, setNetwork] = useState();
	const [contract, setContract] = useState();
	const [sPartName, set_sPartName] = useState();
	const [sPartAmount, set_sPartAmount] = useState();
	const [gPartName, set_gPartName] = useState();

	const [connectText, setConnectText] = useState("");
	const [deployText, setDeployText] = useState("");
	const [setterGroupText, setSetterGroupText] = useState("Store a part name and corresponding amount on-chain");
	const [getterGroupText, setGetterGroupText] = useState("Check amount available for a given part");
	const [amountText, setAmountText] = useState("");

	const [connectLink, setConnectLink] = useState("");
	const [deployLink, setDeployLink] = useState("");
	const [setterGroupLink, set_setterGroupLink] = useState("");

	async function connectWallet() {
		if (account !== undefined) {
			setConnectText(`🔌 Account ${account} already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();

			let newAccount = wData[0];
			let newNetwork = wData[2];
			if (newAccount !== undefined) {
                toast({
                    title: 'Wallet Connected!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
				setConnectText(`🔌 Account ${newAccount} connected ⚡ ✅`);
				setConnectLink(`https://hashscan.io/${newNetwork}/account/${newAccount}`);
				setWalletData(wData);
				setAccount(newAccount);
				localStorage.setItem("userWalletAddress",newAccount);
				setNetwork(newNetwork);
				setDeployText();

				setTimeout(()=>{
					navigate("/homepage");
				},2000);
			}
		}
	}



	//=====================

	return (
		<div className="App bg-blur">
            <Slide direction="top" in={4}> 
			<Flex width={'100vw'} marginTop={-100} justifyContent={'center'}>
				<Center>
				<Image src={catlogo} boxSize={"sm"} objectFit={'contain'}></Image>
				</Center>
			</Flex>
            </Slide>
            
            <Slide direction="bottom" in={3} >
				<Flex justifyContent={'center'} marginBottom={10}>
			<div className="stickAtBottom">
                
			    <MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"}  link={connectLink} hideConnectButton = {account}/>
 
            </div>
			</Flex>
            </Slide>
            
		</div>
	);
}

export default HomePage