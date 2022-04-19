import React from 'react'

function FormTemplate({type, name, handleChange, value}) {
  return (
    <div className="mb-3">
          <label htmlFor={name} className="form-label">
           {name}
          </label>
          <input
            type={type}
            className="form-control"
            id={name}
            name={name}
            value={value}
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
  )
}

export default FormTemplate