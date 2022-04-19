import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function InternDetail() {
    const params = useParams()
    let detail = null
    useEffect(() => {
      async function fetchData(){
        const response = await axios.post(`/detail`,params)
        detail = await response.json()
      }
      fetchData()
  
    }, [params])
 
  return (
    <div className='text-center'>
    <h2>Intern Detail</h2>
    <h5>{detail.name}</h5>
    <p>{detail.roll}</p>
    </div>
  )
}

export default InternDetail