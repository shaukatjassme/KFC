import React from 'react'
import { Card } from '../pages/Card'
import { items } from '../data/ProductData'

export const Products = ({increment}) => {
  return (
    <div className='container mt-5'>
    <div className='row row-cols-1 row-cols-md-4 g-4'>
    {
        items.map(item => <Card key={items.id} item={item} increment={increment} />)
    }
    
    </div>
    </div>
  )
}
