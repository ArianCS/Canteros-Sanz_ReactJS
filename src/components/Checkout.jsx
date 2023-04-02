import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/ContextFunctions";
import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const Checkout = () => {
const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const db = getFirestore();
  const { cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  };

  const orderCollection = collection(db, "order");

  const order = {
    name,
    email,
    cart,
    orderId,
  };

  return (
      <div>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mt='3'>
          <FormLabel mt='3'>Nombre Completo</FormLabel>
          <Input
            focusBorderColor="lime"
            placeholder="Nombre"
            mt='3'
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel mt='3'>Email</FormLabel>
          <Input
            focusBorderColor="lime"
            placeholder="Email"
            mt='3'
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel mt='3'>Direccion de Envío</FormLabel>
          <Input
            type="adress"
            focusBorderColor="lime"
            mt='3'
          />
          <Button mt='5' id="confirm" type="submit" left="60%" colorScheme="whatsapp">
            Confirmar Compra
          </Button>
        </FormControl>
      </form>
      <Text mt='3'>Nro. de orden: {orderId}</Text>
    </div>
  );
};

export default Checkout
