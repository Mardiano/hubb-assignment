import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Products from  '../comps/Products'
import ProductLinks from '../comps/ProductLinks'


export async function getStaticProps(){
  const resProducts = await fetch('https://hubb-server.herokuapp.com/test-product');
  const dataProducts = await resProducts.json();

  const resLinks = await fetch('https://hubb-server.herokuapp.com/test-link');
  const dataLinks = await resLinks.json();

  return {
      props: { 
        products: dataProducts,
        links : dataLinks,  
      },
  }
}

function Home({ products, links }){
  return (
      <div>
        <Head>
          <title>Hubb Assignment</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>

        <main className="bg-yellow-400 grid grid-cols-1 content-center ">
            <div className="flex justify-center w-full">
                <img className="h-24 w-24 rounded-full object-contain items-center" src='/tes.jpg' />
            </div>
            <Link href='https://www.instagram.com/hubb.link/'>
              
              <a className='text-center block'>@hubb.link</a>
            </Link>
            <Products products = {products} />
            <ProductLinks links= {links} />
        </main>
      </div>
    )
}

export default Home;