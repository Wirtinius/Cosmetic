import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import getProduct from './handler/getProductHandler'
import { useParams } from 'react-router-dom'
import useAddToCart from '../Cart/handler/addToCartHandler'
import {toast} from 'sonner'

export function Detail() {
    const id = useParams().id
    const product = getProduct(id)
    const addToCart = useAddToCart;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cartResult = await addToCart(id);
        if (cartResult.error) {
            toast.warning('Вы должны войти в систему, чтобы добавить товар в корзину.');
        }  
        else {
            toast.success('Товар успешно добавлен в корзину.');
        }
    }

    return (
        <div>
            <div className="mt-10 place-content-center grid grid-cols-2 gap-10 mr-5">
                    <div className='card bg-slate-50 hover:bg-slate-100'>
                        <img  className='' src={`http://localhost:3000${product.image}`}/>
                    </div>
                    <div>
                        {/* Head Name */}
                        <div className='mb-2'>
                            <h1 className='text-sm underline-title-detail mb-5'>{product.brand}</h1>
                            <h1 className='text-3xl font-medium font-sans mb-2'>{product.name}</h1>
                            <p className='text-xs text-slate-500'>New | Item {product._id}</p>
                        </div>
                        {/* Stars */}
                        <div className='flex mb-5'>
                            <FontAwesomeIcon icon={faStar} size="xs" style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <h2 className='text-xs pl-1'>(102)</h2>
                        </div>
                        {/* Description */}
                        <div className=''>
                            <p className='font-sans mb-2'>{product.description}</p>

                        </div>
                        {/* Price And Button*/}
                        <div className='grid grid-cols-2 pd-bottom space-x-56' >
                            <div>
                                <p className='text-2xl font-medium font-sans mb-2'>{product.price}</p>
                                <hr className='max-w-16 h-1 dark:bg-gray-700 '></hr>
                            </div>
                            <div className='text-right'>
                            <button type='submit' onClick={handleSubmit} class="text-white bg-[#050708] hover:bg-[#050708]/70 focus:ring-4 focus:outline focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                            В корзину</button>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        )
}