import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


const Works = () => (
  <Layout title="Works">
    <Container mt={10}>
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          {/* <WorkGridItem
            id="muslimedu"
            title="MuslimEdu"
          >
            Platform for learn islam online and Al - Quran Online.
          </WorkGridItem> */}
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
