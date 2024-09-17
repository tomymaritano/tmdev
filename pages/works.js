const { Container, Heading, SimpleGrid, Divider } = require("@chakra-ui/react")
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'


import thumbanailDolar from '../public/images/dolargaucho.png'
import thumbanailUnicoin from '../public/images/unicoin.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>Works</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem  thumbnail={thumbanailDolar}>
                            DolarGaucho: Argentine Finance. Calculators, Historical Data, and Currency Conversion.
                        </WorkGridItem>

                    </Section>
                    <Section>
                        <WorkGridItem id="unicoin" title="Unicoin" thumbnail={thumbanailUnicoin}>
                            Unicoin, next-generation of Crypto. Assets-backed.
                        </WorkGridItem>

                    </Section>

                </ SimpleGrid>
                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Certifications
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem thumbnail={thumbanailDolar}>
                            DolarGaucho: Argentine Finance. Calculators, Historical Data, and Currency Conversion.
                        </WorkGridItem>

                    </Section>
                    <Section>
                        <WorkGridItem thumbnail={thumbanailUnicoin}>
                            Unicoin, next-generation of Crypto. Assets-backed.
                        </WorkGridItem>

                    </Section>

                </ SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Works;

export { getServerSideProps } from '../components/chakra'