import React from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const Welcome = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{base: '0', lg: '12'}}
    py={{
      base: '1',
      lg: '13',
    }}
  >
    <Stack
      direction={{
        base: 'column-reverse',
        lg: 'row',
      }}
      spacing={{
        base: '0',
        lg: '20',
      }}
    >
      <Box
        width={{
          lg: 'sm',
        }}
        transform={{
          base: 'translateY(-50%)',
          lg: 'none',
        }}
        bg={{
          base: useColorModeValue('red.50', 'gray.700'),
          lg: 'transparent',
        }}
        mx={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        px={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            lg: '10',
          }}
        >
          <Stack
            spacing={{
              base: '2',
              lg: '4',
            }}
          >
            <Heading size="xl" color={useColorModeValue('red.600', 'red.200')}>
              Soul Music Store
            </Heading>
            <Heading size="xl" fontWeight="normal" color='#000000'>
            The store of your dreams!
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link to={"/Waiting"} color={useColorModeValue('red.600', 'red.200')} fontWeight="bold" fontSize="lg">
              Let's go
            </Link>
            <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden" pt='5'>
        <Image
          src="https://cdn.mos.cms.futurecdn.net/V9uX9tucCzkBuGrFfpHGRB.jpg"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{
            base: 'none',
            sm: 'initial',
          }}
          src="https://i.pinimg.com/originals/79/fc/f7/79fcf742f001c44f30562bc2bf17d964.jpg"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
  );
};

export default Welcome