// // import React, {Component} from "react"
// // class App extends Component {
// //     render() {
// //         return <h1>class component</h1>
// //     }
// // }
// // export default App


// // import React,{useState} from "react"
// // let App = () =>{
// //     let [state,setState] = useState("manisha")
// //     let changename = () =>{
// //         setState("jeevani")
// //     }
// //     return (
// //         <>
// //      <h1>{state}</h1>
// //      <button onClick={changename}>changenamee</button>
// //         </>
// //     )
    
// // }
// // export default App

// // import React, {useState} from "react"
// // let App =() =>{
// //   let [state,setState]= useState("manisha")
// //   let change =() =>{
// //     setState("avinash")
// //   }
// //   return(
// //     <>
// //     <h1>{state}</h1>
// //     <button onClick ={ change}>change</button>
// //     </>
// //   )

// // }
// // export default App


// // import React from "react"
// // import Child from "./Child"
// // let App=()=>{
// //     return(
// //         <>
// //         <Child/>
    
// //         </>
// //     )

// // }
// // export default App

// import React, { useState } from "react"
// let App=()=>{
//    let [count,setCount]= useState(0)
//    let increment=()=>{
//     setCount(count+1)
//     }
//     let decrement=() =>{
//         setCount(count-1)
//    }
//    let reset=() =>{
//     setCount(0)
// }


//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={increment}>+</button>
//         <button onClick ={decrement}>-</button>
//         <button onClick ={reset}>reset</button>

//         </>

//     )

// }
// export default App

// import React, { useState } from 'react'
// import Child from './Child'

// const App = () => {
//    let [name,setName] =useState("krishna")
//   let app=()=>{
//     setName("hari")

//    }
 
//   return (
//     <>
//     <Child  send={name} app={setName}/>
//     <button onClick={app}>click</button>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//     <Parent/>
//     </>
//   )
// }

// export default App


//prop children//


// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//     <Parent/>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//     <Parent/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Product from './Product'

// const App = () => {
//   return (
//     <>
//     <Product/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Contextapi from './Contextapi'
// import Child from './Child'
// import Product from './Product'

// const App = () => {
//   return (
//     <>
//    <Contextapi>
//     <Child/>
//     <Product/>
//    </Contextapi>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Contextapi from './Contextapi'
// import Child from "./Child"

// const App = () => {
//   return (
//     <>
//     <Contextapi>
//       <Child/>
//     </Contextapi>
//     </>
//   )
// }

// export default App

//import React from 'react'//

// const App = () => {
//   return (
//     <>
//     <h1 className='avi'>avinash</h1>
//     <h1 id='nas'>vennapu</h1>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Nav from "./module/Nav"

// const App = () => {
//   return (
//     <>
//     <Nav/>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//  let [name,setName] = useState("avinash")
//  if (name === "avinash"){
//   return <h1>hello</h1>
//  }else{
//   return <h2>kullo</h2>
//  }
 
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let [name,setName]=useState("vennapu")
//   return (
//     <>
//     {name === "avinash"? <h1>hello</h1>: <h1>iuuu</h1> }

//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [name,setName]=useState(false)
//   return (
//     <>
//     <h1>{name && "avinash"}</h1>

//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let [age,setAge]=useState(18)
//   let [country,setCountry]=useState("india")
//   return (
//     <>
//     {age >=18 && country==="india" ? <h1>ur r eligible for vote</h1>: <h1>not eligible</h1>}
     
    

//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [follow,setFollow]=useState(true)
//   let addfollow= ()=>{
//     setFollow(!follow)
//   }
//   return (
//     <>
//     {/* <h1>{follow ? "following" : "notfollowing" }</h1> */}
//     <button onClick={addfollow}>{follow ? "unfollow" : "follow"}</button>

//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [theme,setTheme]=useState(true)
//   let teme=()=>{
//     setTheme(!theme)
//   }
//   let Changecolor=()=>{
//     if(theme){
//     document.body.className="dark"
//     }else{
//       document.body.className="light"

//     }
//   }

  
//   return (
//     <>
//     <Changecolor/>
//     <h1>{theme ? "dark":"light"}</h1>
//     <button onClick={teme}>theme</button>

//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let[name,setName]=useState(true)
//   return (
//     <>
    
 
    

//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import on from "./switch on.jpg"
import off from "./switch off.jpg"

const App = () => {
  let [state,setState]=useState(true)
  let change=()=>{
    setState(!state)
  }
  return (
    <>
    <img src={state?on:off} alt="" />
    <button onClick={change}>{state?"off":"on"}</button>
    


    </>
  )
}

export default App