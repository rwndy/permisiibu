import { Footer, Navbar, ContactComponent, CustomMeta } from '../components'

const Contact = () => {
  return (
    <>
    <CustomMeta 
      lang="id"
      title={`Contact | Permisiibu`}
      url={`permisiibu.id/contact`}
      description={`Kontak Permisiibu`}
   />
      <Navbar />
      <ContactComponent />
      <Footer />
    </>
  )
}

export default Contact
