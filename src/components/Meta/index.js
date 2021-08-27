import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
        <title>Permisiibu</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Permisiibu adalah seorang Penulis dan juga Front-end Developer di Indonesia " />
        <meta name="keywords"
        content="Penulis, Front-end Developer" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="distribution" content="global" />
        <meta name="classification" content="Penulis konten, Front-end Developer" />
        <meta name="mytopic" content="keseharian, keluh-kesah, anak muda" />
        <meta property="og:title" content="Permisiibu" />
        <meta property="og:description"
        content="Permisiibu adalah seorang Penulis dan juga Front-end Developer di Indonesia" />
        <meta property="og:image" content="/favicon.ico" />
    </Head>
  )
}

export default Meta
