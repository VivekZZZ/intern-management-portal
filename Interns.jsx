import React,{useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AddIntern from './AddIntern'

function interns() {
    let interns = null
    useEffect( () => {
      async function fetchData(){
        const data = await axios.post('/interns')
        interns = await data.json()
      }
      fetchData()
    }, [])
    
  return (
    <div className='text-center'>
    <AddIntern />
        <h1 id="interns">
           Available interns
        </h1>
        {interns && Array.from(interns).map(intern => {
   return (
      `<li key=${intern._id} id=${intern._id}>
        <Link to=${'/med/:'+intern._id}>${intern.name}</td> 
        <span>${intern.roll}</span> 
      </li>`
   )
})}

    </div>
  )
}

export default interns