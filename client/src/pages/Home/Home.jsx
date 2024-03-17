import lancome from '../../assets/images/products/lancome2.png'
import ColorWOW from '../../assets/images/products/ColorWOW.webp'
import dyson from '../../assets/images/products/dyson.png'
import parfume from '../../assets/images/products/parfumeChannel.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Home.css'

export function Home() {

    const images = [lancome, ColorWOW, dyson, parfume, lancome];

    return (
        <div>
            <div className='mt-20 ml-16'>
                <a className="text-2xl underline-title"> New Products</a>
            </div>
            <div className="my-10 place-content-center grid grid-flow-col gap-10">
                {images.map((image) => 
                    <div>
                        <div className='flip-card'>
                            <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                                <div className='flip-card-front'>
                                    <img src={image}/>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className='text-2xl pt-8'>Alensio</h1>
                                    {/* Stars */}
                                    <div className='py-16'>
                                    <div className='flex justify-center'>
                                    <FontAwesomeIcon icon={faStar} size="xs" style={{color: "#FFD43B",}} />
                                    <FontAwesomeIcon icon={faStar} size="xs" />
                                    <FontAwesomeIcon icon={faStar} size="xs" />
                                    <FontAwesomeIcon icon={faStar} size="xs" />
                                    <FontAwesomeIcon icon={faStar} size="xs" />
                                    <h2 className='text-xs pl-1'>(102)</h2>
                                    </div>
                                    {/* Info */}
                                    <div className='text-center pb-5'>
                                    <h1 className='text-1xl'>Lancome Channel Left</h1>
                                    <p className='text-x'>$23</p>
                                    </div>
                                    <div className='pt-16'>
                                    <Link className='text-sm detail-underline detail-underline-black' to="detail">See Details</Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <h1 className=''>test</h1> */}
                        {/* <p className=''>22.4$</p> */}
                    </div>
                )}
            </div>

            <div className=" my-32 place-content-center grid grid-flow-col gap-10">
                {images.map((image) => 
                    <div>
                        <div className='flip-card'>
                            <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                                <div className='flip-card-front'>
                                    <img src={image}/>
                                </div>
                                <div class="flip-card-back my-10">
                                    <h1>Name</h1>
                                    <p>Somethin Description</p>
                                    <p>Price</p>
                                </div>
                            </div>
                        </div>
                        {/* <h1 className=''>test</h1> */}
                        {/* <p className=''>22.4$</p> */}
                    </div>
                )}
            </div>

            <div className=" my-32 place-content-center grid grid-flow-col gap-10">
                {images.map((image) => 
                    <div>
                        <div className='flip-card'>
                            <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                                <div className='flip-card-front'>
                                    <img src={image}/>
                                </div>
                                <div class="flip-card-back my-10">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                        {/* <h1 className=''>test</h1> */}
                        {/* <p className=''>22.4$</p> */}
                    </div>
                )}
            </div>
        </div>

        
        )
}