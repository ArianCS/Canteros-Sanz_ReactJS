import { useContext } from "react"
import { CartContext } from "../context/ContextFunctions";
import { Container, Button, Center, Flex } from "@chakra-ui/react";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import Brief from "./Brief";

const Cart = () => {
  const { cart} = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <>
        <Center mt='10'  mb='300'>
          <div>
            <Link to={"/catalogue"}>
              <Button colorScheme="red" mt='10'>Back to catalogue</Button>
            </Link>
          </div>
        </Center>
      </>
    );
  }
  return (
    <>
      <Flex justifyContent='center'>
        <Container>
          <Brief />
        </Container>
        <Container mt='10'>
          <Checkout />
        </Container>
      </Flex>
    </>
  );
};

export default Cart;