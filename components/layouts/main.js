import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Mogo3D from '../Mogo3D'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomy's homepage" />
        <meta name="author" content="Tomy Mariatno" />
        <meta name="author" content="tomymaritano" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tomy Maritano" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tmaritanodev" />
        <meta name="twitter:creator" content="@tmaritanodev" />
        <meta property="og:site_name" content="Tomy Maritano" />
        <meta name="og:title" content="Tomy Maritano" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="#" />
        <title>Homepage - Tomy Maritano</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Mogo3D />
        {children}  
    <Footer />
      </Container>
    </Box>
  )
}

export default Main