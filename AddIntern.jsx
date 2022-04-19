import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormTemplate from "./FormTemplate";
const initState = {
    name:"",
    roll: "",
}
function AddIntern() {
    let medicine = null
 const [state, setState] = useState(initState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {name, roll} = state

    if(!name || !roll){
     return
    }
    const currentIntern = {name, roll}
    medicine = await axios.post('/addmed', currentIntern)
  }



  return (
    <div className="container md">
    <h1 className="text-center">Add Interns</h1>
      <form method="POST" onSubmit={handleSubmit}>
      <FormTemplate type="text" name="name" handleChange={handleChange} value={ state.name}/>
      <FormTemplate type="text" name="roll" handleChange={handleChange} value={state.roll} />
        <button type="submit" className="btn btn-primary">
          Add Intern
        </button>

      </form>
    </div>
  );
}

export default AddIntern;
