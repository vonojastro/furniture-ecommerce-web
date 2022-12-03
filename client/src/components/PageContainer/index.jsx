import React from 'react'
import Banner from '../Banner'
import Cards from '../Cards'
import Carousel from '../Carousel'



const PageContainer = () => {

  return (
      <div className='max-w-7xl h-full mx-auto py-10'>
      <Cards />
      <Banner />
      <Carousel />
    </div>
  )
}

export default PageContainer