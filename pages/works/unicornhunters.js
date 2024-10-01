import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Unicorn Hunters">
    <Container>
      <Title>
        Unicorn Hunters <Badge>2024</Badge>
      </Title>
      <P>
        Unicorn Hunters is a groundbreaking business series that brings together top-tier investors and visionary entrepreneurs. Our platform aims to democratize access to investment opportunities, allowing individuals to invest in the next potential &quot;unicorn&quot; companies. By providing a transparent and accessible platform, Unicorn Hunters bridges the gap between innovative startups and a global community of investors.
      </P>

      <P>
        With a mission to foster entrepreneurship and innovation, Unicorn Hunters offers a unique blend of entertainment and investment opportunities. Watch entrepreneurs pitch their ideas, get insights from industry experts, and participate in the journey to discover the next billion-dollar company.
      </P>
      <UnorderedList my={4}>
        <ListItem>Democratizing access to investment opportunities</ListItem>
        <ListItem>Connecting visionary entrepreneurs with global investors</ListItem>
        <ListItem>Combining entertainment with real-world investing</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web, Streaming Services</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Node.js, Express, MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Show Details</Meta>
          <Link href="https://unicornhunters.com">
            Unicorn Hunters Show <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://unicornhunters.com"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/unicornhunters.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>
{/* 
      <WorkImage src="/images/works/unicornhunters_eyecatch.png" alt="Unicorn Hunters" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/unicornhunters_01.png" alt="Unicorn Hunters" />
        <WorkImage src="/images/works/unicornhunters_02.png" alt="Unicorn Hunters" />
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
