
import React, { useEffect } from 'react'
import { useState } from 'react'
function FetchData() {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then ((res)=>res.json())
        .then ((data)=>setUser(data))
    },[])
}


export default FetchData