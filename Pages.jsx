import React from 'react'
import {Routes, Route} from 'react-router-dom'
import InternDetail from './InternDetails'
import Interns from './Interns'
import Home from './Home'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/interns' element={<Interns />} />
        <Route path='/detail:_id' element={<InternDetail />} />
    </Routes>
  )
}

export default Pages