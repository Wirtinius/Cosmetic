import { Link } from 'react-router-dom';
import './index.css'
import useCategories from './handler/getCategoriesHandler'

export function Categories() {
    const categories = useCategories()
    const counts = Math.ceil(categories.length / 5);
    console.log(categories)
    return (
        <div>
            <div className='mt-20 ml-16'>
                <a className="text-2xl underline-title">Categories</a>
            </div>
            {[...Array(counts)].map((_, index) => (
                <div key={index} className="my-10 place-content-center grid grid-flow-col gap-10">
                    {categories.slice(index * 5, (index + 1) * 5).map((category) => (
                        <div key={category._id}>
                            <div className='brand-card'>
                                <div className='bg-slate-50 hover:bg-slate-100 flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img src={`http://localhost:3000${category.image}`}  alt={category.value}/>
                                        <h2>{category.value}</h2>
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
