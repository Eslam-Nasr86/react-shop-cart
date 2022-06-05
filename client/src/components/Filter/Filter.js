import React from 'react'
import '../../css/Filter/Filter.css'

export default function Filter() {
  return (
    <div className="filter-wrapper">

    <h2 className='filter-title'>Filter</h2>
    <div className='num-of-products'>Number of products 4</div>
    <div className='filter-by-size'>
    <span>Filter</span>
        <select className='filter-select'>
            <option value="All">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>

    </div>

    <div className='filter-by-size'>
    <span>Order</span>
        <select className='filter-select'>
            <option value="All">Latest</option>
            <option value="XS">Lower</option>
            <option value="S">Highest</option>
           
        </select>

    </div>

    </div>
  )
}
