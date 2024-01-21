import { Box, Button, Flex, Heading, Stack, StackItem, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from '@chakra-ui/react'


const ArtistUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAdd, setUserAdd] = useState();
  const toast = useToast();

  const handleFileChange = (event) => {
    console.log(event.target.files);
  };

  useEffect(()=>{
    setUserAdd(localStorage.getItem('userWalletAddress'));
  },[])

  const handleUpload = () => {
    setIsLoading(true);
    const fileInput = document.getElementById("uploadFile");
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("owner",userAdd);
    formData.append("title","Gabru Di Gaddi");

    axios.post("http://localhost:5000/recognize", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res)=>{
            console.log(res);
            if(res.data.data.error== "Song Already Exists."){
                toast({
                    title: 'Song already exists on the Content ID System.',
                    description: `Owner : ${res.data.data.owner}, CID : ${res.data.data.cid}`,
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else{
                toast({
                    title: 'Congrats! Your song is now on the ContentID System',
                    description: `CID : ${res.data.upload_response.cid}, Block CID : ${res.data.upload_response.block_cid}`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        }).finally(()=>{
            setIsLoading(false);
        })
};


  return (
    <>
      <Flex
        fontFamily={'Urbanist'}
        width={"30vw"}
        height={"80vh"}
        bg={"blackAlpha.600"}
        rounded={"3xl"}
        boxShadow={"dark-lg"}
      >
        <VStack
          width={"100%"}
          height={"100%"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <StackItem justifySelf={"top"}>
            <Heading textShadow="3px 3px #000000">Upload File</Heading>
          </StackItem>
          <StackItem marginTop={64}>
            {/* Hidden file input */}
            <input
              type="file"
              id="uploadFile"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {/* Custom-styled button */}
            <label htmlFor="uploadFile">
              <Button
                color={"black"}
                as="span"
                letterSpacing={"wider"}
                bg={"whiteAlpha.700"}
                cursor={"pointer"}
              >
                💾 Choose File
              </Button>
            </label>
          </StackItem>
          <StackItem marginTop={5}>
            <Button bg={"blackAlpha.400"} onClick={handleUpload} isLoading={isLoading}>
              Upload
            </Button>
          </StackItem>
        </VStack>
      </Flex>
    </>
  );
};

export default ArtistUpload;
