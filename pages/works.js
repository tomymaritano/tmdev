const { Container, Heading, SimpleGrid, Divider } = require("@chakra-ui/react")
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>Works</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem>
                           Dolargaucho, finanzas argentinas. Calculadoras, historicos y conversion.
                        </WorkGridItem>

                    </Section>
                    <Section>
                        <WorkGridItem>
                            A Markdown note-taking app with 100+ plugins, cross-platform and
                            encrypted data sync support
                        </WorkGridItem>

                    </Section>
                </ SimpleGrid>
                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>

            </Container>
        </Layout>
    )
}
export default Works;