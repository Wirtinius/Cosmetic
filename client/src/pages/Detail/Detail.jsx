import parfume from '../../assets/images/products/parfumeChannel.webp'
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function Detail() {


    return (
        <div>
            <div className="my-10 place-content-center grid grid-cols-2 gap-10">
                    <div className='card bg-slate-50 hover:bg-slate-100 mx-14'>
                        <img  className='' src={parfume}/>
                    </div>
                    <div>
                        {/* Head Name */}
                        <div className='mb-2'>
                            <h1 className='text-sm underline-title-detail mb-5'>CHANEL</h1>
                            <h1 className='text-3xl font-medium font-sans mb-2'>N 5 Chanel Paris EAU DE PARFUM</h1>
                            <p className='text-xs text-slate-500'>New | Item 23984248</p>
                        </div>
                        {/* Stars */}
                        <div className='flex mb-10'>
                            <FontAwesomeIcon icon={faStar} size="xs" style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <h2 className='text-xs pl-1'>(102)</h2>
                        </div>
                        {/* Price */}
                        <div className=''>
                            <p className='text-2xl font-medium font-sans mb-2'>$22.00</p>
                            <hr className='max-w-20'></hr>
                        </div>
                        <div className='mt-96 '>
                        <button type="button" class="text-white bg-[#050708]/70 hover:bg-[#050708] focus:ring-4 focus:outline focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">

Add To Bag</button>
                        </div>
                    </div>
            </div>
        </div>
        )
}