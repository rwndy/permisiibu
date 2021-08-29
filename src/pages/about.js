import { AboutMe, Navbar, Footer, CustomMeta} from '../components'

const About = () => {
  return (
   <>
   <CustomMeta 
      lang="id"
      title={`About | Permisiibu`}
      url={`permisiibu.id/about`}
      description={`Tentang Permisiibu`}
   />
    <Navbar />
    <AboutMe />
    <Footer />
   </>
  )
}

export default About