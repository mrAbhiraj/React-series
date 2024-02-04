import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} = useParams() ;
  return (
    <div className='bg-blue-400 text-white p-4 text-4xl'>User : {userid}</div>
  )
}

export default User