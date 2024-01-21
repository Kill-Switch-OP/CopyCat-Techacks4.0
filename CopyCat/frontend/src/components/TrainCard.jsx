import { Container, Button,  Stack, StackItem, Text, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Client, AccountId, PrivateKey,ContractCallQuery, ContractFunctionParameters, ContractExecuteTransaction } from '@hashgraph/sdk';



async function callSmartContractFunction() {
  try {
    const operatorId = AccountId.fromString(process.env.REACT_APP_OPERATOR_ID);
    const operatorKey = PrivateKey.fromString(process.env.REACT_APP_OPERATOR_PVKEY);
    const client = Client.forTestnet().setOperator(operatorId, operatorKey);

    // Replace with your contract ID
    const contractId = '0.0.5792220';

    // Replace with the function you want to call
    const functionName = 'balance';

    // Replace with the appropriate parameters for your function
    // const functionParams = new ContractFunctionParameters()
    //   .addUint64(123)
    //   .addString('Hello, world!');

    // Create a query to call the function (read-only)
    const contractCallQuery = new ContractCallQuery()
      .setContractId(contractId)
      .setGas(100000)
      .setFunction(functionName);

    // Execute the query to get the result
    const contractCallResult = await contractCallQuery.execute(client);

    // Parse and use the result
    const result = contractCallResult.getString(); // You can change the type based on the return value of your function
    console.log('Smart contract function result:', result);
    return(result);
  } catch (error) {
    console.error('Error calling smart contract function:', error);
  }
}


function TrainCard({ trainName, arrivalTime, route, prices, }) {

  const [apiResponse, setApiResponse] = useState();

  async function handleClick(trainName, i) {
    Swal.fire({
      title: 'Payment Confirmation?',
      text: `Do you want to buy a seat in ${trainName.substring(6)} Sleeper class for ₹${prices[i]}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Proceed!`
    }).then(async (result) => { // Add "async" here
      if (result.isConfirmed) {
        try {
          const result = await callSmartContractFunction();
          setApiResponse(result);
          setTimeout(() => {
            Swal.fire({
              title: 'Payment Successful',
              text: `Thank you for booking!`,
              icon: 'success',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: `Proceed!`,
              footer: '<a href="https://hashscan.io/testnet/contract/0.0.5792220?p=1&k=1698559476.844431003" class="btn btn-primary">View Website</a>',

            })

          }, 2000)
        } catch (error) {
          console.error('Error:', error);
        }
      }
    });
  }
  
  


    
  return (
    <Container fontFamily={'Urbanist'} shadow={'dark-lg'} rounded={'xl'} bgColor={'whiteAlpha.600'} margin={10} marginY={7} alignContent={'center'} justifyContent={'center'} width={['2xs','xs','sm','md','5xl']} flexDirection={'column'}>
      <Text fontSize={'2xl'} sx = {{'textShadow': ' 1px 5px 40px rgba(4, 0, 0, 0.75),-3px 10px 12px rgba(0, 0, 0, 0.75);'}} color={'black'} fontWeight={'semibold'} _hover={{color: 'white', transition: 'color 0.3s'}} marginBottom={3}>{trainName}</Text>
      <Text color={'gray.900'}>  {"⏰  " + arrivalTime}</Text>
      <Text>{route}</Text>
      <HStack>
        <Button onClick={()=>{
          handleClick(trainName,0);
        }} width={40} marginX={[1,2,3]} marginY={2} bgColor={'paleturquoise'} color={'black'}><Stack spacing={'xs'}><StackItem>SL</StackItem>  <StackItem color={'grey'} fontSize={10}>{'₹'+prices[0]}</StackItem></Stack></Button>
        <Button onClick={()=>{
          handleClick(trainName,1);
        }}  width={40} marginX={[1,2,3]} marginY={2} bgColor={'orange'} color={'black'}><Stack spacing={'xs'}><StackItem>3AC</StackItem><StackItem color={'grey'} fontSize={10}>{ '₹'+ prices[1]}</StackItem></Stack></Button>
        <Button onClick={()=>{
          handleClick(trainName,2);
        }} width={40} marginX={[1,2,3]} marginY={2} bgColor={'lime'} color={'black'}><Stack spacing={'xs'}><StackItem>2AC</StackItem><StackItem color={'grey'} fontSize={10}>{'₹'+ prices[2]}</StackItem></Stack></Button>
        <Button onClick={()=>{
          handleClick(trainName,3);
        }} width={40} marginX={[1,2,3]} marginY={2} bgColor={'azure'} color={'black'}><Stack spacing={'xs'}><StackItem>1AC</StackItem><StackItem color={'grey'} fontSize={10}>{'₹'+ prices[3]}</StackItem></Stack></Button>
    </HStack>
    <Text>{apiResponse}</Text>

    </Container>
  );
}

export default TrainCard;