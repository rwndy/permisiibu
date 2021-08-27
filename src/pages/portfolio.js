import { Footer, Navbar, PortfolioComponent, CustomMeta } from '../components'

const Portfolio = () => {
  return (
    <>
    <CustomMeta 
      lang="id"
      title={`Portfolio | Permisiibu`}
      url={`permisiibu.id/portfolio`}
      description={`Portfolio Permisiibu`}
   />
      <Navbar />
      <PortfolioComponent />
      <Footer />
    </>
  )
}

export default Portfolio
