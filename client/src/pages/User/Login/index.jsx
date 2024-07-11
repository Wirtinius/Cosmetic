import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useLogin from './handler/loginHandler';
import {toast} from 'sonner'

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginResult = await login(username, password);
        if (loginResult.error) {
            toast.error(loginResult.error.message || 'Произошла ошибка при входе в систему.');
        }   
    }
    
    return (
        <div>
            <form className="my-10 px-96 space-y-5">
                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Wirtinius"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Юзернейм
                    </label>
                </div>

                <div class="relative h-11 w-full min-w-[200px]">
                    <input placeholder="Password"
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-700 peer-focus:after:scale-x-100 peer-focus:after:border-pink-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Пароль
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