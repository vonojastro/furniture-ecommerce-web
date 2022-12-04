import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import Button from '../Button';

const Footer = () => {
    return (
        <div className="w-full mx-auto bg-white py-10">
            <div className="mx-[50px] mx-auto h-full grid grid-cols-3 justify-items-center">
                <div className='flex flex-col leading-8'>

                    <h3>Shop Collection</h3>

                    <Link to='shop'>
                        <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>All Products</h3>
                    </Link>
                    <Link to='shop'>
                        <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>Light</h3>
                    </Link>
                    <Link to='shop'>
                        <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>Dark</h3>
                    </Link>

                </div>
                <div className='flex flex-col leading-8'>

                    <h3>Help</h3>

                    <Link to='shop'>
                        <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>Contact Us</h3>
                    </Link>
                    <Link to='shop'>
                        <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>Terms and Conditions</h3>
                    </Link>
                    <Link to='shop'>
                        <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>Privacy & Policy</h3>
                    </Link>

                </div>
                <div className='flex flex-col leading-8'>

                    <h3>Newsletter</h3>


                    <h3 style={{ color: 'gray', fontSize: '0.8rem' }}>Sign up for 10% off your next order</h3>

                    <Link to='shop'>
                        <input type='text' style={{ color: 'gray', fontSize: '0.8rem' }} className='w-full border px-5 py-2 tracking-[0.2em]' placeholder='Enter your email address' />
                    </Link>
                    <Button content={'Subscribe'} />
                </div>

            </div>
            <div className='flex gap-8 justify-center w-full py-10 mx-auto full'>

                <a href="https://www.facebook.com/">
                    <FaFacebookF className='text-xl text-gray-400 hover:text-grey-800 ease-in-out duration-300' />
                </a>
                <a href="https://www.instagram.com/">
                    <FaInstagram className='text-xl text-gray-400 hover:text-grey-800 ease-in-out duration-300' />
                </a>
                <a href="https://www.youtube.com/">
                    <FaYoutube className='text-xl text-gray-400 hover:text-grey-800 ease-in-out duration-300' />
                </a>
                <a href="https://www.pinterest.ph/">
                    <FaPinterestP className='text-xl text-gray-400 hover:text-grey-800 ease-in-out duration-300' />
                </a>
            </div>

        </div>
    )
}

export default Footer