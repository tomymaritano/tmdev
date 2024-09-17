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
  <Layout title="Unicoin">
    <Container>
      <Title>
        Unicoin <Badge>2024</Badge>
      </Title>
      <P>
        Unicoin is a groundbreaking cryptocurrency designed to bring stability and growth to the digital currency ecosystem. Unlike traditional volatile cryptocurrencies, Unicoin is backed by real assets, providing a safer and more secure investment opportunity. Our goal is to democratize access to wealth-building opportunities, offering users a more reliable and sustainable way to participate in the world of digital finance.
      </P>
      <P>
        Whether you're an experienced investor or new to the crypto space, Unicoin offers a transparent and easy-to-use platform. Join us in our mission to revolutionize the way we think about and interact with digital currencies.
      </P>
      <UnorderedList my={4}>
        <ListItem>Stable cryptocurrency backed by real assets</ListItem>
        <ListItem>Designed for long-term growth and stability</ListItem>
        <ListItem>User-friendly platform for all levels of investors</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Solidity, Blockchain</span>
        </ListItem>
        <ListItem>
          <Meta>Whitepaper</Meta>
          <Link href="https://unicoin.com/whitepaper">
            Unicoin Whitepaper <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://unicoin.com"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/unicoin.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/unicoin_eyecatch.png" alt="Unicoin" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/unicoin_01.png" alt="Unicoin" />
        <WorkImage src="/images/works/unicoin_02.png" alt="Unicoin" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
