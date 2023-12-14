import React from 'react'
import { useParams } from 'react-router'
import useHttp from '../hooks/useHttp'
import { fetchProductById } from '../Services/api'
import { Link } from 'react-router-dom'

const ProductDetails = () => {

  const { productId } = useParams()
  const [productById] = useHttp(fetchProductById, productId)
  console.log(productById)
  if (!productById) { return <h2>Loading...</h2> }
  return (
    <>
      <Link to='/products'>Go Back</Link>
      <div>
        <div>
          <img src={productById.thumbnail} alt={productById.title} />
        </div>
        <p>{productById.title}</p>
        <p>{productById.description}</p>
        <p>{productById.category}</p>
        <p>{productById.rating}</p>
        <p>{productById.price}</p>
        <ul>
          {productById.images.map((item, index) => <li key={index}><img src={item} alt='alt' /></li>)}
        </ul>
      </div>
    </>

  )
}

export default ProductDetails
// {
//   "id": 1,
//     "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//           "discountPercentage": 12.96,
//             "rating": 4.69,
//               "stock": 94,
//                 "brand": "Apple",
//                   "category": "smartphones",
//                     "thumbnail": "...",
//                       "images": ["...", "...", "..."]
// }

