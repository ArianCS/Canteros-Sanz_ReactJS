import { useContext} from 'react';
import { CartContext } from '../context/ContextFunctions';
import box from '../assets/box.png';
import { Stack, Avatar } from '@chakra-ui/react';

const CartWidget = () => {
  const { cartQty } = useContext(CartContext);
  return (
    <>
      <Stack direction='row' pt='1'>
        <Avatar name='Shop Box' src={box}/>
        <p>{cartQty}</p>
      </Stack>
    </>
  );
};

export default CartWidget;