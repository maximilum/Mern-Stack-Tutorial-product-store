import React from "react";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Box,
} from "@chakra-ui/react";
import { API_BASE } from "../api/config";

const CreateProduct = () => {
  async function handleCreateProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData);
    try {
      const res = await fetch(`${API_BASE}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });
      // const payload = await res.json();
      // const data = payload.data;
      // console.log(payload);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <Box as="form" onSubmit={(e) => handleCreateProduct(e)} w="100%">
      <Fieldset.Root size="lg" mx="auto" mt="60px" maxW="md">
        <Stack>
          <Fieldset.Legend fontSize="24px">Add Product</Fieldset.Legend>
          <Fieldset.HelperText>
            Please provide the details of the product.
          </Fieldset.HelperText>
        </Stack>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input name="name" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Price</Field.Label>
            <Input name="price" type="number" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Image URL</Field.Label>
            <Input name="image" />
          </Field.Root>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </Fieldset.Root>
    </Box>
  );
};
export default CreateProduct;
