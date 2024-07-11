import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useCreateCategory from './handler/createCategoryHandler';
import {toast} from 'sonner'

export function CategoryForm() {
    const [value, setValue] = useState('');
    const [image, setImage] = useState('');
    const createCategory = useCreateCategory;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryResult = await createCategory(value, image);
        if (categoryResult.error) {
            toast.error(categoryResult.error.message || 'Возникла ошибка при создании категории.');
        }   
    }
    
    return (
        <div>
            <form className="my-10 px-96 space-y-5">
                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Парфюмы"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setValue(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Название Категории
                    </label>
                </div>

                {/* Input image */}
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-black dark:text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-400 dark:text-gray-400"><span class="font-semibold">Нажмите для загрузки</span> или перенесите</p>
                            <p class="text-xs text-gray-400 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
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