import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useUser from '../../pages/User/handler/userHandler';
import './index.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const user = useUser();
  const isAdmin = user && user.roles && user.roles[0] === 'ADMIN'; 
  const isAuthenticated = !!user; 

  console.log(isAdmin);
  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div className='relative z-0'>
      <nav className='mx-0 bg-black'>
        <div className='flex text-center justify-evenly space-x-6'>
          {/* Image */}
          <img src={logo} alt="logo" className='mt-2 mb-2 w-16' />

          {/* Links */}
          <div className='hidden md:flex space-x-10 my-6'>
            <Link className='group' to="/">
              <span className='link-underline link-underline-black text-white hover:text-pink-500'>Магазин</span>
            </Link>
            <Link className='group' to="/brands">
              <span className='link-underline link-underline-black text-white hover:text-pink-500'>Бренды</span>
            </Link>
            <Link className='group' to="/about">
              <span className='link-underline link-underline-black text-white hover:text-pink-500'>О Нас</span>
            </Link>
            <Link className='group' to="/categories">
              <span className='link-underline link-underline-black text-white hover:text-pink-500'>Категории</span>
            </Link>
            <Link className='group' to="/cart">
              <span className='link-underline link-underline-black text-white hover:text-pink-500'>Корзина</span>
            </Link>

            {/* Search */}
            
          </div>

        

                
          <div className='flex text-center space-x-6'>
            {/* <div className='my-6 space-x-2'> 
              <FontAwesomeIcon icon={faSearch} size="sm" />
              <input className='' placeholder='Search Items' type='text'></input>
            </div> */}

            <div class="relative h-11 w-full min-w-[200px] mt-1">

                    <input placeholder=""
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-pink-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label
                    class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pink-500">
                    Поиск
                    </label>
                </div>

            

            <div className='my-6'> 
              <div className="relative inline-block text-left">
                  <button onClick={toggleDropdown} type="button" className=" text-sm font-medium text-gray-700 ">
                      <FontAwesomeIcon icon={faUser} className=" h-5 w-5" style={{color: "#ffffff",}} />
                  </button>
                  {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {isAuthenticated ? (
                    <>
                      <a href="/cart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Корзина</a>
                      <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Выйти</a>
                    </>
                  ) : (
                    <>
                      <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Войти</a>
                      <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Зарегистрироваться</a>
                    </>
                  )}
                </div>
              </div>
            )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isAdmin ? (
      <nav className='mx-0 bg-pink-500'>
        <div className='flex text-center justify-evenly space-x-4 mr-14'>

          <div className='hidden md:flex space-x-10 my-6'>
            <Link className='group' to="/create-product">
              <span className='admin-link-underline admin-link-underline-black text-black hover:text-white'>Добавить Товар</span>
            </Link>
            <Link className='group' to="/create-brand">
              <span className='admin-link-underline admin-link-underline-black text-black hover:text-white'>Добавить Бренд</span>
            </Link>
            <Link className='group' to="/create-category">
              <span className='admin-link-underline admin-link-underline-black text-black hover:text-white'>Добавить Категорию</span>
            </Link>
            <Link className='group' to="/orders">
              <span className='admin-link-underline admin-link-underline-black text-black hover:text-white'>Заказы</span>
            </Link>
            <Link className='group' to="/users">
              <span className='admin-link-underline admin-link-underline-black text-black hover:text-white'>Пользователи</span>
            </Link>
            
          </div>

        </div>
      </nav>
      ) : null}
    </div>
  );
}
