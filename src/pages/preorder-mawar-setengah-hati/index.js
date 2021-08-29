import React from 'react'
import { CustomMeta, Footer, Navbar, PreorderPage } from '../../components'

const Preorder = () => {
  return (
    <>
      <CustomMeta 
        lang="id"
        title={`Preorder | Permisiibu`}
        url={`permisiibu.id/preorder-mawar-setengah-hati`}
        description={`Pre-order penjualan buku mawar setengah hati dari Rizki Aulia Ramdhani, Riwandi, dan juga Modila Akbari Putameda`}
      />
      <Navbar />
      <PreorderPage />
      <Footer />
    </>
  )
}

export default Preorder
