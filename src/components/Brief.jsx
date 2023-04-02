import { useContext } from "react";
import { CartContext } from "../context/ContextFunctions";
import { Button, Flex, Stack, Center, Heading, Card, CardBody, CardFooter, Text,Image,
} from "@chakra-ui/react";

const Brief = () => {
  const { cart, total, removeArt } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => {
        return (
          <Flex ml='1%' key={item.id} direction={{ base: 'column', sm: 'row'}}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              margin='10'
              maxW={{sm:'300px'}}
              overflow='hidden'
              variant='outline'>
              <Image
                objectFit=' scale-down'
                maxW={{ base: '100%', sm: '99px' }}
                maxH={{sm: '200px'}}
                margin='2'
                src={item.img}
                alt='Product_Shop'/>
              <Stack>
                <CardBody>
                  <Center>
                    <Heading size='md'>{item.name} Original</Heading>
                  </Center>
                  <Center>
                    <Text py='2'>
                      Cantidad: {item.quantity}
                    </Text>
                  </Center>
                </CardBody>
                <CardFooter>
                  <Button maxH='30px' maxW='30px' variant='solid' colorScheme='blue' onClick={() => removeArt(item.id)}>
                    X
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Flex>
        )
      })};
    </>
  );
};

export default Brief;