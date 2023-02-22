import React from 'react'
import CartWidget from './CartWidget'
import { Button} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <h1>Soul Music</h1>
        <ul>
            <Button colorScheme='red'>Instrumentos</Button>
            <Button colorScheme='red'>Consolas</Button>
            <Button colorScheme='red'>Efectos</Button>
            <Button colorScheme='red'>Accesorios</Button>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar
