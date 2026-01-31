import React from "react";
import { Box, Text, Flex, Center, Image, AspectRatio } from "@chakra-ui/react";

const ProductCard = (product) => {
  const { name, price, image } = product.product;
  console.log(product.product);
  return (
    <Box
      position="relative"
      w="300px"
      my="24px"
      borderRadius={"10px"}
      overflow="hidden"
      bg="gray.200"
      transition="all 0.2s ease-in-out"
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
      _hover={{
        transform: "translateY(-5px)",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Box w={{ base: "100%" }}>
        <Image src={image} borderTopRadius={"10px"} objectFit="cover"></Image>
      </Box>
      <Box py="20px" px="10px">
        <Text as="h2" fontSize={"20px"} color="#5c0086" letterSpacing="tighter">
          {name}
        </Text>
        <Text color="#674875" fontSize={"14px"}>
          $ {price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
