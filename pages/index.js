import NextLink from 'next/link'
import {
    Container,
    Heading,
    Link,
    Box,
    Image,
    Button,
    useColorModeValue
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'


const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I&apos;m an indie app developer based in Argetina!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Tomy Maritano
                    </Heading>
                    <p>Digital Craftsman ( Developer / Designer / Fintech enthusiast )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/tomy.jpeg"
                            alt="Profile image"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Tomás Maritano is a freelance UX Engineer based in Rosario, with a passion for crafting innovative digital solutions that streamline and enhance user interactions.
                    Specializing in blockchain technology and product design, Tomás has a proven track record of transforming complex concepts into user-friendly applications.
                    He is the creator of {' '}
                    <Link as={NextLink} href="http://wwwdolargaucho.com.ar" passHref scroll={false}>
                        DolarGaucho
                    </Link>, an app that delivers vital financial insights tailored to the Argentine market.
                    Beyond coding and project development, Tomás shares his professional insights and experiences on his blog hosted on Astro, where he engages with a community of tech enthusiasts and fellow developers.{' '}

                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My portfolio
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1994</BioYear>
                    Born in Rosario, Argentina.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Graduated with a degree in Web Design & App Development from Escuela Da Vinci.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Freelancing as Developer.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Creator of the app Dolar Gaucho.
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Joined Grandvalira project as a Full Stack Developer.
                </BioSection>
                <BioSection>
                    <BioYear>2024 to present</BioYear>
                    Worked at Unicoin as UX Lead.
                </BioSection>

                <BioSection>
                    <BioYear>2024 to present</BioYear>
                    Started blogging on Astro to share insights on technology and design.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies
                </Heading>
                <Paragraph>
                    Art, Music, Gaming, Playing Bass, Droning, Machine Learning, {' '} Fintech
                </Paragraph>
            </Section>

        </Container>

    )
}

export default Page