import {Card, CardBody, Divider, Center, ButtonGroup, CardFooter, Heading, Image, Stack, Text, Button, Flex, Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/ContextFunctions";
import {useState, useEffect, useContext} from 'react'

const Item = ({ id, name, price, img, category }) => {
  const [product, setProduct] = useState([]);
  const [quanti, setQuanti] = useState(1);
  const { addProd } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "guitars", '${id}');

    getDoc(oneItem).then((snapshot) => {
        const doc = snapshot.data();
        setProduct(doc);
    });
  }, []);

  const addCart = (quantity, id) => {
    addProd(quantity, id);
  };

  return (
      <div key={id}>
        <Flex>
          <Card m='7'>
            <CardBody>
              <Image src={img}/>
              <Stack mt='6' spacing='3'>
                <Center><Heading size='md'>{name}</Heading></Center>
                <Center>{category}</Center>
                <Center><Text color='#21ad95' fontSize='2xl'>U$D {price}</Text></Center>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <ButtonGroup flexDirection='column'> 
                  <Link to={`/item/${id}`}>
                    <Button variant='solid' bgColor='#21ad95' maxW='93%' ml='2'>
                      More Details
                    </Button>
                  </Link>
                  <Button color='#21ad95' bg='#f5faf9' variant='outline' mt='4' onClick={() => addCart(quanti, id)}>
                    Add to cart: {quanti}
                  </Button>
                </ButtonGroup> 
              </CardFooter>
            </Center>
          </Card>
        </Flex>
      </div>
  );
};

export default Item;
