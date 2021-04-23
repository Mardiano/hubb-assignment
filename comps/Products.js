import Link from 'next/link'

function Products({ products }){
    return ( 
    <div className="bg-yellow-400 md:h-full items-center grid grid-cols-2 text-blue-900 px-2 py-4">
        {products.map(product => (
            <div key ={product.id} className="px-2 py-2 bg-white m-2 hover:bg-yellow-200 rounded justify-center">
                <div className="h-full w-30 rounded-lg overflow-hidden">
                    <img className="h-48 sm:h-58 object-contain rounded w-full object-cover" src={product.product_img} />
                    <div className='m-4'>
                        <span className="font-medium text-md">{product.product_title}</span>
                        <span className="font-semibold block text-xl">{product.product_price}</span>                              
                        <div className="flex justify-end w-full">
                            <Link href={product.product_url}>
                                <a className="font-medium block w-30 flex justify-center rounded-md bg-yellow-400 m-2 px-2">Lihat Produk</a>
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
            
        ))}
    </div> );
}
 
export default Products;
