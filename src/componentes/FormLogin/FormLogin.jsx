import React from "react";
import { Box, InputLeftElement } from "@chakra-ui/react";
import { Button, Stack } from "@chakra-ui/react";
import { Input, InputGroup } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import Casino from "../../images/casino.png";
import "./styleFormLogin.css";
import "./borderAnimationForm.css";

const FormLogin = () => {
  return (
    <Box
      bg="white"
      className="c-subscribe-box"
      w="30%"
      h="40rem"
      p={"4rem 2rem"}
    >
      <div class="rainbow">
        <span></span>
        <span></span>
      </div>
      <div class="c-subscribe-box__wrapper">
        <div className="centerImage">
          <Image src={Casino} boxSize={200} m={"1.5rem"} />
        </div>
        <InputGroup m={"2rem 0"}>
          <InputLeftElement children={<FaUser size={"1.25em"} />} mt={1} />
          <Input
            placeholder="Usuario"
            _hover={{ border: "3px solid" }}
            focusBorderColor="3px solid black"
            _placeholder={{ color: "black.100" }}
            size="lg"
            borderColor="3px solid black.200"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement children={<FaKey size={"1.25em"} />} mt={1} />
          <Input
            placeholder="Contraseña"
            _hover={{ border: "3px solid" }}
            focusBorderColor="3px solid black"
            _placeholder={{ color: "black.100" }}
            size="lg"
            borderColor="3px solid black.200"
          />
        </InputGroup>
        <div className="marginBottomButtons">
          <Stack spacing={6}>
            <Button colorScheme="purple" w={"40"} size="lg">
              Inicia Sesion
            </Button>
            <Button colorScheme="red" w={"40"} size="lg">
              Registrate
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

export default FormLogin;
