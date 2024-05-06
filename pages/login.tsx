import { Center } from '@chakra-ui/react'
import { Auth } from '@saas-ui/auth'
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { NextPage } from 'next'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { SEO } from "components/seo/seo";

const providers = {
  google: {
    name: 'Google',
    icon: FaGoogle,
  },
  github: {
    name: 'Github',
    icon: FaGithub,
    variant: 'solid',
  },
}

const Login: NextPage = () => {
  return (
    <>
      <SEO
        title="Volare Solutions - IT Services"
        description="Providing comprehensive digital solutions including portfolio websites, e-commerce platforms, and software contract work."
      />
      <Section height="calc(100vh - 200px)" innerWidth="container.sm">
        <BackgroundGradient zIndex="-1" />

        <Center height="100%" pt="20">
          <PageTransition width="100%">
            <Auth
              view="login"
              providers={providers}
              signupLink={<Link href="/signup">Sign up</Link>}
            />
          </PageTransition>
        </Center>
      </Section>
    </>
  )
}

export default Login
