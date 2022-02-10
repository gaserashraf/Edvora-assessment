import React from 'react'
import Products from '../productsComponent/View'
import FilterContainer from '../filterComponent/View'
const Home = () => {
  return (
    <div className='home'>
        <div className='row justify-content-between'>
            <div className='col-3'>
                <FilterContainer />
            </div>
            <div className='col-9'>
                <Products />
            </div>
        </div>
    </div>
  )
}

export default Home