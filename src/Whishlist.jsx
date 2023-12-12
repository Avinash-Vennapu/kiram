import React from 'react'
import Cart from './Cart'

const Whishlist = (whishprop) => {
    console.log(whishprop);
  return (
    <>
    <Cart cart={whishprop.wishlist}/>
     </>
  )
}

export default Whishlist