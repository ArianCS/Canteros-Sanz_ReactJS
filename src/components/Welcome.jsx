import React from 'react'
import { Box, Container, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Box w='100%' bg='#000000'>
      <Image
        borderRadius='full'
        boxSize='593'
        ml='28.5%'
        src='https://static.vecteezy.com/system/resources/previews/006/307/611/non_2x/music-store-logo-template-eps-vector.jpg'
        alt='Logo del Local'
      />
    </Box>
  )
}

export default Welcome