import { ButtonGroup, Container, IconButton, Stack, Text, Center } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'

export const Footer = () => (
  <Container as="footer" role="contentinfo" maxW='100%'
    py={{ base: '12', md: '19',}}>
    <Stack spacing={{ base: '5', md: '3',}}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle" >
        <Center>
          &copy; {new Date().getFullYear()} All of Products made on Gibson. All rights reserved.
        </Center>
      </Text>
    </Stack>
  </Container>
)

export default Footer