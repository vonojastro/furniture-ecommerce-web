import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="w-full mx-auto bg-white py-10">
            <div className="mx-[50px] mx-auto h-[100px] grid grid-cols-3 justify-items-center">
                <div>
                    <Link to='shop'>
                        <h3>Shop</h3>
                    </Link>
                </div>
                <div>
                    <Link to='shop'>
                        <h3>Help</h3>
                    </Link>
                </div>
                <div>
                    <Link to='shop'>
                        <h3>Newsletter</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer