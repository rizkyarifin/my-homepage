import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  UnorderedList,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMail } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mt={10}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a android developer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
      <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={3}
            borderStyle="solid"
            maxWidth="120px"
            display="inline-block"
            borderRadius="full"
            src="/images/rizky.jpg"
            alt="Profile image"
          />
        </Box>
        <Box 
          flexGrow={1}
          textAlign={{ base: 'center', md: 'left'}}
          ml={{ md: 6 }}
          mt= {{ md: 6 }} >
          <Heading 
            as="h2" 
            fontSize={{ base: 25, md: 30 }}>
            Muhammad Rizky Arifin
          </Heading>
          <p>Software Developer, Android</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Self-taught and curiosity-driven Android Developer with 3+ years experience 
          developing a wide variety of android apps, having additional knowledge 
          of Project Management, DevOps, and Cloud Computing. Eager to help solve 
          problems in the real world through the android application.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Bandung, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from the Department of Software Engineering at the State Vocational High School 4 Bandung.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Android Developer Intern at PT Gumbira Wanna Indonesia, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Works as a freelance and worked at PT Lima Kode Teknologi, Indonesia.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Tech Skill
        </Heading>
        
        <UnorderedList>
          <ListItem>Native Android Development (Kotlin/Java)</ListItem>
          <ListItem>GIT</ListItem>
          <ListItem>Front-End Development (Vue/Nuxt.js)</ListItem>
          <ListItem>Headless CMS for Back-End Development (Strapi.js)</ListItem>
          <ListItem>Server and Cloud Computing</ListItem>
        </UnorderedList>

        <Box align="center" my={4}>
          <Link href="https://drive.google.com/file/d/1zilsxmUgB32JwXP8X8x-TZM9FYnfaits/view?usp=sharing" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find Me
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:someone@rizky.arifin00@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                rizky.arifin00@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/rizkyarifin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @rizkyarifin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/muhammad-rizky-arifin-409326161" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Muhammad Rizky Arifin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/rzky_arifin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @rzky_arifin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
