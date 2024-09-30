const { Container, Heading, SimpleGrid, Divider } = require("@chakra-ui/react")
import Layout from '../components/layouts/article'
import { WorkGridItemNoLink } from '../components/grid-item-nolink'
import Section from '../components/section'

//Thumbanails certificacion

import thumbanailreact from '../public/images/certifications/reactjs.png'
import thumbanailangular from '../public/images/certifications/angular.png'
import thumbanailproduct from '../public/images/certifications/desarrolloweb.png'
import thumbanaildesarrollo from '../public/images/certifications/productmanager.png'
import thumbanailgoogle from '../public/images/certifications/google.png'
import thumbanailgpt from '../public/images/certifications/gpt.png'
import thumbanailyandiki from '../public/images/certifications/yandiki.png'
import thumbanailciber from '../public/images/certifications/foundationsciber.png'
import thumbanaillemon from '../public/images/certifications/lemon.png'


const Certifications = () => {
    return (
        <Layout title="Certifications">
            <Container>
                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Certifications
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailgoogle}>
                            Google UX Design - Grade Achieved: 88.12%
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailgpt}>
                            Prompt Engineering for ChatGPT - Vanderbilt University
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailciber}>
                            Foundations of Cybersecurity - Google
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanaillemon}>
                            Crypto & Web3 at Lemon
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailyandiki}>
                            Cloud Networking - Yandiki
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailproduct}>
                            Web Development at Coderhouse certified by PedidosYa
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailreact}>
                            React JS at Coderhouse certified by Clara
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanaildesarrollo}>
                            Product Management at Coderhouse certified by Pomelo
                        </WorkGridItemNoLink>
                    </Section>
                    <Section>
                        <WorkGridItemNoLink thumbnail={thumbanailangular}>
                            Angular at Coderhouse
                        </WorkGridItemNoLink>
                    </Section>
                </ SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Certifications;

export { getServerSideProps } from '../components/chakra'