import React from 'react'
import '../../css/Filter/Filter.css'

export default function Filter({handleFilterBySize, size, handleFilterBySort, sort, products}) {
  return (
    <div className="filter-wrapper">

    <h2 className='filter-title'>Filter</h2>
    <div className='num-of-products'>Number of products {products.length}</div>
    <div className='filter-by-size'>
    <span>Filter</span>
        <select className='filter-select' onChange={handleFilterBySize} value={size}>
            <option value="ALL">All</option>
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
        <select className='filter-select' onChange={handleFilterBySort} value={sort}>
            <option value="Latest">Latest</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
           
        </select>

    </div>

    </div>
  )
}
