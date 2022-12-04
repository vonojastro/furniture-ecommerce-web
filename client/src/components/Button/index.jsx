import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Button = ({content}) => {
  return (
    <>
          <Link to="shop" className='my-5'>
            <button className="btn">
              {content}
            </button>
          </Link>
    </>
  )
}

export default Button