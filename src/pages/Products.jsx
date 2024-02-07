import React from 'react'
import { useProductContext } from '../context/ProductProvider'
import SearchInput from '../components/SearchInput'
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'

const Products = () => {

  const {products,loading} = useProductContext()

  return (
    <div className='container'>
      <SearchInput/>

      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="card-div">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
    </div>
  )
}

export default Products