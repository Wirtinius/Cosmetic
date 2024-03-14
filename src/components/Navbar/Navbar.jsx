import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
  return (
    <nav className='relative border-y-2 mx-0'>
      <div className='flex text-center justify-evenly space-x-6'>
        {/* Image */}
        <img src={logo} alt="logo" className='w-28' />

        {/* Links */}
        <div className='hidden md:flex space-x-5 my-6'>
          <Link className='group' to="/">
            <span className='opacity-50 group-hover:opacity-100 link link-underline link-underline-black text-black'>Shop</span>
          </Link>
          <Link className='group' to="/">
            <span className='opacity-50 group-hover:opacity-100 link link-underline link-underline-black text-black'>Brands</span>
          </Link>
          <Link className='group' to="/">
            <span className='opacity-50 group-hover:opacity-100 link link-underline link-underline-black text-black'>Sale</span>
          </Link>
          <Link className='group' to="/">
            <span className='opacity-50 group-hover:opacity-100 link link-underline link-underline-black text-black'>Discover</span>
          </Link>
          <Link className='group' to="/">
            <span className='opacity-50 group-hover:opacity-100 link link-underline link-underline-black text-black'>Beauty Services</span>
          </Link>
          <Link className='group' to="/">
            <span className='opacity-50 group-hover:opacity-100 link link-underline link-underline-black text-black'>Semi-Annual Beauty Event</span>
          </Link>

          {/* Search */}
          
        </div>
        <div className='my-6 pl-10 space-x-2'> 
          <FontAwesomeIcon icon={faSearch} size="sm" />
          <input className='' placeholder='Search Items' type='text'></input>
        </div>
      </div>
    </nav>
  );
}
