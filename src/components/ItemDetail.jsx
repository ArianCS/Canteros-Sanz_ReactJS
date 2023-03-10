import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({ data }) => {

    const { id } = useParams();

    const dataFilter = data.filter((dato) => dato.id == id);

  return (
    <>
      {dataFilter.map((dato) => (
        <div key={dato.id}>
            <Center>
                <Card maxW="sm">
                <CardBody>
                    <Image src={dato.image} />
                    <Stack mt="6" spacing="3">
                    <Heading size="md">{dato.name}</Heading>
                    <Text>{dato.description}</Text>
                    <Text color="#8e2020" fontSize="2xl" textAlign='center'>
                        {"U$D" + dato.price}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Center className="card-footer">
                        <ItemCount
                        stock={dato.stock}
                        id={dato.id}
                        price={dato.price}
                        name={dato.name}
                        />
                    </Center>
                </CardFooter>
                </Card>
            </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
