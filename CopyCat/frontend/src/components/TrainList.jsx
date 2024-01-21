import React from 'react';
import TrainCard from './TrainCard';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackItem, Text, useDisclosure } from '@chakra-ui/react';



function TrainList() {
    
  return (
    <div>
        
        <Stack bgColor={'blackAlpha.700'} width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            
      
        {/* <StackItem key={index}> */}
        {/* <TrainCard
          
          trainName=  {'🚅  > '+train.trainName}
          arrivalTime={train.arrivalTime}
          route={train.route}
          prices = {train.prices}
        /> */}
        {/* </StackItem> */}
      
    </Stack>
   
    </div>
  );
}

export default TrainList;