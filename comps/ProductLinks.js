import Link from 'next/link'

function ProductLinks({ links }){
    return ( 
    <div className="grid grid-cols-1 items-center w-full">
        {links.map(link => (
            <div key ={link.id} className="px-4 py-2">
                <Link href={link.product_url}>
                    <a className="font-medium w-full block flex justify-center rounded-md bg-white hover:bg-yellow-200 m-1 px-2 py-4">
                        <h3>{link.link_title}</h3>
                    </a>
                </Link>
            </div>
        ))}
    </div> );
}
 
export default ProductLinks;