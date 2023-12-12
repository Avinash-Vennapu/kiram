// import React, {useState} from 'react'
// import Child from './Child'

// const Parent = () => {
//     let[product,setProduct]= useState({
//         name:"avinash",
//         age:23,
//         profession:"engineer"
//     })

    
//   return (
//     <>
//     <Child send={product}/>
//     </>
//   )
// }

// export default Parent

//prop children//

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//     <Child>
//       {/* <h1>avinash</h1>
//       <h2>vennapu</h2> */}

//     </Child>
//     </>
//   )
// }

// export default Parent


import React from 'react'
import Child from './Child'


const Parent = () => {
  return (
    <>
    <Child product = "watch" cost ="2000"/>
    </>
  )
}

export default Parent