import React, { useReducer, useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const Signup = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const signupHandle = async () => {
    try {
      let res = await axios.post("https://bugappbackend1.onrender.com/signup", {
        email: state.email,
        password: state.password,
      });
      if (res.status == 200) {
        alert("Signup Succressfull");
        navigate("/login");
      } else {
        alert("Something Went wrong");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack></HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  setState({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                type={"password"}
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={signupHandle}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
