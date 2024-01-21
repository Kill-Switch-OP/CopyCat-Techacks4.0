import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  GenericAvatarIcon,
  HStack,
  Heading,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TrainList from "../TrainList";
import artistimg from '../../assets/artistPage.gif'
import userimg from '../../assets/endUser.gif'
import { useNavigate } from "react-router-dom";

const Trains = () => {
  const navigate = useNavigate();
  return (
    <Flex width={"100vw"} height={"100vh"} bg={"blackAlpha.300"}>
      <Center>
        <HStack
          width={"100vw"}
          height={"100vh"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <StackItem alignContent={"center"} justifyContent={"center"}>
            <Box
              bg={"blackAlpha.400"}
              width={"30vw"}
              height={"80vh"}
              rounded={"2xl"}
              boxShadow={"dark-lg"}
              margin={50}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Center>
                <Text
                  fontFamily={"Urbanist"}
                  fontSize={"50px"}
                  color={"white"}
                  textShadow="3px 3px #000000"
                >
                  Artist
                </Text>
              </Center>
              <Center>
                <GenericAvatarIcon
                  width={"50%"}
                  color={"gray.900"}
                  _hover={{
                    color: "gray.800"
                  }}
                />
              </Center>
              <Center>
                <Button margin={9} colorScheme="orange" onClick={()=>{
                  navigate('/contentid');
                }}>
                  Upload Music to ContentID
                </Button>
              </Center>
              {/* <Center>
                <Button margin={4} colorScheme="red">
                  View Tracks
                </Button>
              </Center> */}
            </Box>
          </StackItem>
          <StackItem alignContent={"center"} justifyContent={"center"}>
            <Box
              bg={"blackAlpha.400"}
              width={"30vw"}
              height={"80vh"}
              rounded={"2xl"}
              boxShadow={"dark-lg"}
              margin={50}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Center>
                <Text
                  fontFamily={"Urbanist"}
                  fontSize={"50px"}
                  color={"white"}
                  textShadow="3px 3px #000000"
                >
                  User
                </Text>
              </Center>
              <Center>
              <GenericAvatarIcon
                  width={"50%"}
                  color={"gray.900"}
                  _hover={{
                    color: "gray.800"
                  }}
                />
              </Center>
              <Center>
                <Button margin={4} colorScheme="facebook">
                  Upload Video
                </Button>
              </Center>
              <Center>
                <Button margin={4} colorScheme="red">
                  My Videos
                </Button>
              </Center>
            </Box>
          </StackItem>
        </HStack>
      </Center>
    </Flex>
  );
};

export default Trains;
