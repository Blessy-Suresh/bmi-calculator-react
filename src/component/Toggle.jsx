import React from 'react'
import { useState } from 'react'
 function Toggle() {
  const [show,setShow]=useState(true)
  return (
    <div>
      <button onClick={()=>setShow(!show)}>{show?"Hide":"show"}</button>
          {show && <h1>Welcome to KCE</h1>}
    </div>
  )
}
export default Toggle
