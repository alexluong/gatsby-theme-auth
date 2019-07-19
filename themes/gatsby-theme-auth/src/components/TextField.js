import React from "react"

export function TextField(props) {
  return (
    <label>
      {props.label}
      <input {...props} />
    </label>
  )
}

export default TextField
