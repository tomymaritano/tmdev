const { Container, Heading, SimpleGrid } = require("@chakra-ui/react")
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

//Thumbanails Proyectos

import thumbanailDolar from '../public/images/dolargaucho.png'
import thumbanailUnicoin from '../public/images/unicoin.png'
import thumbanailUHn from '../public/images/unicornhunters.png'

//Certificaiones

// import thumbanailUX1 from '../public/images/certifications/ux1.png'
// import thumbanailUX2 from '../public/images/certifications/ux2.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>Works</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="dolargaucho" title="Dolar Gaucho" thumbnail={thumbanailDolar}>
                            DolarGaucho: Argentine Finance. Calculators, Historical Data, and Currency Conversion.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="unicoin" title="Unicoin" thumbnail={thumbanailUnicoin}>
                            Unicoin, next-generation of Crypto. Assets-backed.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="unicornhunters" title="Unicorn Hunters" thumbnail={thumbanailUHn}>
                            Unicorn Hunters Show, Democratizing Wealth.
                        </WorkGridItem>
                    </Section>
                </ SimpleGrid>

                {/* <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Certifications
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem thumbnail={thumbanailUX1}>
                            Foundations of User Experience (UX) Design
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem thumbnail={thumbanailUX2}>
                            Start the UX Design Process: Empathize, Define, and Ideate
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem thumbnail={thumbanailUX1}>
                            Build Wireframes and Low-Fidelity Prototypes
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem thumbnail={thumbanailUX2}>
                            Conduct UX Research and Test Early Concepts
                        </WorkGridItem>
                    </Section> */}
                {/* </ SimpleGrid> */}
            </Container>
        </Layout>
    )
}
export default Works;

export { getServerSideProps } from '../components/chakra'