import {Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, Button, Center, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Item = ({ id, name, price, description_short, image, category }) => {
  return (
    <div>
      <div key={id}>
        <Flex>
          <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={image} />
            <Stack>
              <CardBody>
                <Heading size='md'>{name}</Heading>
                <Text py='2'>{description_short}</Text>
                <Text>
                  Category: {category}
                </Text>
                <Text color="#8e2020" fontSize="2xl" pt='40'>
                  {"U$D" + price}
                </Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" bg='#21ad95'>
                  <Link to={`/item/${id}`}>More Details</Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default Item;
