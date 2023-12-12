// import React from "react"
// let Child=()=>{
//     return(
//         <>
//         <h1>compoment</h1>
//         </>
//     )

// }
// export default Child

// import React from 'react'

// const Child = (props) => {
    
//   return (
//     <>
//     <h1>{props.app}</h1>
//     <h1>{props.send}</h1>
   

//     </>
//   )
// }

// export default Child
// import React from 'react'

// const Child  = (props) => {
//     let{send:{name,age,profession}}=props
//   return (
//     <>
//     <h1>{name}</h1>
//     <h2>{age}</h2>
//     <h3>{profession}</h3>


//     </>
//   )
// }

// export default Child

//child prop//
// import React from 'react'

// const Child = (props) => {
//   console.log(props)
  
//   return (
//     <>
//     <p>{props.name}</p>
//     <h1>{props.profission}</h1>
    

//     </>
//   )
// }

// export default Child

// Child.defaultProps ={
//   name:"avinash",
//   profission: "vennapu"

// }

 //prop types//

//  import React from 'react'
//  import P from 'prop-types'
 
//  const Child = (props) => {
//   console.log(props);
//    return (
//      <>
//      <h1>{props.product}</h1>
//      <h2>{props.cost}</h2>

//      </>
//    )
//  }
 
//  export default Child

//  Child.propTypes={
//   product:P.string,
//   cost:P.number
//  }

// import React, { useContext } from 'react'
// import {Context} from "./Contextapi"

// const Child = () => {
//   let consumer = useContext(Context)
//   return (
//     <>

//     <h1>{consumer}</h1>

//     </>
//   )
// }

// export default Child

import React from 'react'
import { useContext } from 'react'
import {Context} from "./Contextapi"

const Child = () => {
  let consumer=useContext(Context)
  return (
    <>
    <h1>{consumer.product}</h1>
    <h2>{consumer.cost}</h2>

    </>
  )
}

export default Child