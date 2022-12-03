import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Currency from './CurrencyDropdown';
import './styles.css'

const Navbar = () => {
  return (
    <div className='w-full mx-auto'>
      <div className='mx-[50px]  mx-auto '>
        <div className='grid gap-4 grid-cols-3 justify-center h-[60px]'>

          {/* Navlinks */}

          <ul className='flex w-full gap-5 items-center cursor-pointer'>

            <Link to='shop'>
              <li>Shop</li>
            </Link>
            <Link to='about'>
              <li>About</li>
            </Link>
            <Link to='collection'>
              <li>Collection</li>
            </Link>

          </ul>

          {/* logo */}
          <div className='flex items-center justify-center'>VON OJASTRO</div>

          <div className='flex w-full gap-5 items-center cursor-pointer justify-end text-sm'>
            <Currency className='nav-link' />
            <CiUser style={{ fontSize: '1.5rem' }} className='nav-link' />
            <CiShoppingCart style={{ fontSize: '1.5rem' }} className='nav-link' />
            <CiHeart style={{ fontSize: '1.5rem' }} className='nav-link' />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar