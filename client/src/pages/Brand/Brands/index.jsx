import { Link } from 'react-router-dom';
import './index.css'
import useBrands from './handler/getBrandsHandler'

export function Brands() {
    const brands = useBrands()
    const counts = Math.ceil(brands.length / 5);
    console.log(brands)
    return (
        <div>
            <div className='mt-20 ml-16'>
                <a className="text-2xl underline-title">Бренды</a>
            </div>
            {[...Array(counts)].map((_, index) => (
                <div key={index} className="my-10 place-content-center grid grid-flow-col gap-10">
                    {brands.slice(index * 5, (index + 1) * 5).map((brand) => (
                         <Link to={`../brand/${brand._id}`}>
                            <div key={brand._id}>
                                <div className='brand-card'>
                                    <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                                        <div className='flip-card-front flex justify-center items-center'>
                                            <img className='h-40' src={`http://localhost:3000${brand.image}`} /> {/* alt={brand.value}*/}
                                        </div>
                                        {/* <h2 className=''>Нажмите, чтобы посмотреть товары бренда</h2> */}
                                    </div>
                                </div>
                                <div className='flex'>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}
