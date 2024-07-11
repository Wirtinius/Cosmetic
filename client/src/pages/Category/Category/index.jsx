import {useParams} from 'react-router-dom';
import useCategoryProduct from './handler/getProductsByCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function Category () {

    const id = useParams().id
    const products = useCategoryProduct(id)
    const counts = Math.ceil(products.length / 5);

    console.log(products)
    return (
        <div>
            <div className='mt-20 ml-16'>
                <a className="text-2xl underline-title">Products By Category</a>
            </div>
            {[...Array(counts)].map((_, index) => (
                <div key={index} className="my-10 place-content-center grid grid-flow-col gap-10">
                    {products.slice(index * 5, (index + 1) * 5).map((product) => (
                        <div key={product._id}>
                            <div className='flip-card'>
                                <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img src={`http://localhost:3000${product.image}`} alt={product.name} />
                                    </div>
                                    <div className="flip-card-back">
                                        <h1 className='text-2xl pt-8'>Alensio</h1>
                                        {/* Stars */}
                                        <div className='py-16'>
                                            <div className='flex justify-center'>
                                                <FontAwesomeIcon icon={faStar} size="xs" style={{ color: "#FFD43B", }} />
                                                <FontAwesomeIcon icon={faStar} size="xs" />
                                                <FontAwesomeIcon icon={faStar} size="xs" />
                                                <FontAwesomeIcon icon={faStar} size="xs" />
                                                <FontAwesomeIcon icon={faStar} size="xs" />
                                                <h2 className='text-xs pl-1'>(102)</h2>
                                            </div>
                                            {/* Info */}
                                            <div className='text-center pb-5'>
                                                <h1 className='text-1xl'>{product.name}</h1>
                                                <p className='text-x'>{product.price}</p>
                                            </div>
                                            <div className=''>
                                                <Link className='text-sm detail-underline detail-underline-black' to={`../detail/${product._id}`}>See Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

}


