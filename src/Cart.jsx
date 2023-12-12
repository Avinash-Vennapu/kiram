import React from 'react'

const Cart = (props) => {
    console.log(props);
    let {cart:{name,age}}=props;
  return (
    <>
    <h1>product name:{name}</h1>
    <h2>{age}</h2>
    

    </>
  )
}

export default Cart