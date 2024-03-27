import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useCreateProduct from './handler/createProductHandler';
import useCategories from '../Category/Categories/handler/getCategoriesHandler';
import useBrands from '../Brand/Brands/handler/getBrandsHandler';
import {toast} from 'sonner'

export function ProductForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState();
    const [countInStock, setCountInStock] = useState();
    const [brand, setBrand] = useState();
    const [image, setImage] = useState('');
    const createProduct = useCreateProduct;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productResult = await createProduct(name, description, price, category, countInStock, brand, image);
        if (productResult.error) {
            toast.error(productResult.error.message || 'An error occurred while creating the product.');
        }    
    }
    
    
    const categories = useCategories()
    const brands = useBrands()

    return (
        <div>
            <form className="my-10 px-96 space-y-5">
                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Chanel Beas W 514 No.5 Women"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setName(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Name
                    </label>
                </div>

                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Парфюмерия Chanel No.5 Women является одним из самых узнаваемых ароматов в мире."
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setDescription(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Description
                    </label>
                </div>

                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="$230"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setPrice(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Price
                    </label>
                </div>

                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="1"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setCountInStock(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Count In Stock
                    </label>
                </div>

                {/* <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Parfume"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setCategory(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Category
                    </label>
                </div> */}

                <label for="underline_select" class="sr-only">Category</label>
                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-500  focus:outline-none focus:ring-0 focus:border-pink-500 peer">
                    <option selected onChange={(e)=>{setCategory(e.target.value)}}>Choose a Category</option>
                    {categories.map((category) => (
                        <option value={category.value}>{category.value}</option>
                    ))}
                </select>

                {/* <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Chanel"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setBrand(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Brand
                    </label>
                </div> */}

                <label for="underline_select" class="sr-only">Brand</label>
                <select onChange={(e)=>{setBrand(e.target.value)}} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-500  focus:outline-none focus:ring-0 focus:border-pink-500 peer">
                    <option selected>Choose a Brand</option>
                    {brands.map((brand) => (
                        <option value={brand.value}>{brand.value}</option>
                    ))}
                </select>

                {/* Input image */}
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])}/>
                    </label>
                </div> 

                <div className='text-right'>
                    <button type='submit' onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faArrowRight} size="2xl" />    
                    </button>
                </div>
            </form>
        </div>
    );
}