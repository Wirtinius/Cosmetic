import lancome from '../../assets/images/products/lancome2.png'
import ColorWOW from '../../assets/images/products/ColorWOW.webp'
import dyson from '../../assets/images/products/dyson.png'
import './Home.css'

export function Home() {

    const images = [lancome, ColorWOW, dyson];

    return (
        <div className=" my-32 place-content-center grid grid-flow-col gap-10">
            {images.map((image) => 
                <div>
                    <div className='flip-card'>
                        <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                            <div className='flip-card-front'>
                                <img src={image}/>
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    <h1 className=''>test</h1>
                    <p className=''>22.4$</p>
                </div>
            )}

            <div>
                <div className='bg-slate-100'>
                    <img className='w-60 h-80' src={dyson}/>
                </div>
            </div>

        </div>

        
        )
}