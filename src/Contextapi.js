// import React, { createContext } from 'react'



// export let Context=createContext()

// const Contextapi = ({children}) => {
//   return (
//     <Context.Provider value= "avinash">
//       {children}

//     </Context.Provider>
//   )
// }

// export default Contextapi

import React, { createContext, useState } from 'react'
export let Context=createContext()

const Contextapi = ({children}) => {
  let [state,setState]=useState({
    product:"avinash",
    cost:100000
  })
  return (
    <Context.Provider value ={state}>
    {children}
    </Context.Provider>
  )
}

export default Contextapi