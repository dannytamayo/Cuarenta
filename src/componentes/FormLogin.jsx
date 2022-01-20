import React from "react";
import { Box, InputLeftElement } from "@chakra-ui/react";
import { Input, InputGroup } from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";

const FormLogin = () => {
  return (
    <Box bg="white" w="30%" h="40rem" p={"4rem 2rem"}>
      <InputGroup>
          <InputLeftElement children={<FaBeer size={"1.25em"} />} />
          <Input
            placeholder="Basic usage"
            _hover={{ border: "3px solid" }}
            focusBorderColor="3px solid black"
            _placeholder={{ color: "black.100" }}
            size="lg"
            borderColor="3px solid black.200"
          />
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="Basic usage"
          _hover={{ border: "3px solid" }}
          focusBorderColor="3px solid black"
          _placeholder={{ color: "black.100" }}
          size="lg"
          borderColor="3px solid black.200"
        />
      </InputGroup>
    </Box>
  );
};

export default FormLogin;
