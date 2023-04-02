import { Flex } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ product }) => {
  return (
    <>
        <Flex>
          {product.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              category={product.category}
              img={product.img}
            />
          ))}
        </Flex>
    </>
  );
};

export default ItemList;