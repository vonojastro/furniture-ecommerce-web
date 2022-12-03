import React from 'react'
import Cards from '../Cards'
import HeroBanner from '../HeroBanner'

const PageContainer = () => {
  return (
      <div className='max-w-7xl max-h-screen mx-auto py-10'>
      <Cards />
      <HeroBanner />
    </div>
  )
}

export default PageContainer