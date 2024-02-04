import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
const data = useLoaderData()
//   const [data, setData] = useState("")
//     useEffect(() => {
//      fetch("https://api.github.com/users/mrAbhiraj")
//      .then(res=> res.json())
//      .then(data => {
//         console.log(data) ;
//         setData(data) ;

//      })
//     }, [data])
    
  return (
    <div className='bg-gray-700 text-white p-5 text-4xl'>Github  Followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/mrAbhiraj')
    return res.json() ;
}