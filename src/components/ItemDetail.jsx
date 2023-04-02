import {useState, useEffect, useContext} from 'react'
import { CartContext } from "../context/ContextFunctions";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Card, ButtonGroup, CardBody, CardFooter, Heading, Image, Stack, Text, Center, 
  Button, Link} from "@chakra-ui/react";

const ItemDetail = ({ data }) => {
  const { id } = useParams();
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

  const dataFilter = data.filter((dato) => dato.id == id);

  const addCart = (quantity, id) => {
    addProd(quantity, id);
  };

  return (
    <div> 
      {dataFilter.map((product) => (
        <div key={product.id}>
          <Center>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='12' maxW='60%'>
              <Image src={product.img} maxW={{ base: '100%', sm: '400px' }}/>
              <Stack>
                <CardBody>
                  <Heading size='md'>{product.name}</Heading>
                  <Text py='2'>{product.details}</Text>
                </CardBody>
                <CardFooter>
                <ButtonGroup spacing='52'>
                  <Button variant='solid' bg='#21ad95' color='black' onClick={() => addCart(quanti, id)}>
                    Add to cart: {quanti}
                  </Button>
                  <Link href='/catalogue'>
                    <Button color='#21ad95' bg='#f5faf9' variant='outline'>
                        Go to catalogue
                    </Button>
                  </Link>
                </ButtonGroup>
                </CardFooter>
              </Stack>
            </Card>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;

