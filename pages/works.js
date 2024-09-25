const { Container, Heading, SimpleGrid } = require("@chakra-ui/react")
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

//Thumbanails Proyectos

import thumbanailDolar from '../public/images/dolargaucho.png'
import thumbanailUnicoin from '../public/images/unicoin.png'
import thumbanailUHn from '../public/images/unicornhunters.png'


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

            </Container>
        </Layout>
    )
}
export default Works;

export { getServerSideProps } from '../components/chakra'