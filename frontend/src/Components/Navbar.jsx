import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  HStack,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router";

import { FaShoppingCart } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

{
  /* <MdDarkMode /> */
}

const Navbar = () => {
  return (
    <Box
      bg="#6b005c"
      w="100%"
      px="20px"
      py="8px"
      color="white"
      lineHeight="0px"
      borderBottomRadius="xl"
      position="sticky"
      top="0px"
      zIndex="100"
      letterSpacing={"tighter"}
    >
      <Flex justifyContent="space-between">
        <Box>
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            color="White"
            _hover={{ color: "#ffc8f8" }}
            transition="colors"
            h="100%"
          >
            <HStack lineHeight="10px">
              <Icon fontSize="24px">
                <FaShoppingCart />
              </Icon>
              <Text fontSize="24px">Product Store </Text>
            </HStack>
          </ChakraLink>
        </Box>
        <Box>
          <HStack gap="20px">
            <Flex
              bg="#e6dde5"
              p="6px"
              borderRadius="50%"
              _hover={{ bg: "#ffc8f8" }}
              transition="backgrounds"
            >
              <Center fontSize="20px" color="#6b005c" textAlign="center">
                <MdLightMode />
              </Center>
            </Flex>
            <ChakraLink as={ReactRouterLink} to="/createProduct">
              <Flex bg="#e6dde5" p="6px" borderRadius="50%" shadow="inner">
                <Center fontSize="20px" color="#6b005c">
                  <IoMdAdd />
                </Center>
              </Flex>
            </ChakraLink>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
