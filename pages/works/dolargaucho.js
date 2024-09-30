import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="DolarGaucho">
    <Container>
      <Title>
        DolarGaucho <Badge>2024</Badge>
      </Title>
      <P>
        DolarGaucho is a comprehensive platform designed to provide real-time information on Argentine finance, specifically focusing on the various exchange rates of the dollar. Our platform offers users a range of tools including currency conversion calculators, historical data charts, and up-to-date exchange rates, all in an easy-to-use interface. 
      </P>
      <P>
        Whether you&apos;re an investor, a business owner, or someone looking to stay informed about the Argentine economy, DolarGaucho provides accurate and accessible financial information. Our mission is to empower users with the data they need to make informed financial decisions in an ever-changing economic landscape.
      </P>
      <UnorderedList my={4}>
        <ListItem>Real-time exchange rates and financial data</ListItem>
        <ListItem>Currency conversion and historical data charts</ListItem>
        <ListItem>User-friendly interface for quick access to information</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>API</Meta>
          <Link href="https://dolarapi.com/v1/cotizaciones">
            Dolar API <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://dolargaucho.com.ar"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/dolargaucho.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      {/* <WorkImage src="/images/works/dolargaucho_eyecatch.png" alt="DolarGaucho" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/dolargaucho_01.png" alt="DolarGaucho" />
        <WorkImage src="/images/works/dolargaucho_02.png" alt="DolarGaucho" />
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
