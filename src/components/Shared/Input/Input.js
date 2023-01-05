import React from 'react'

const Input = (props) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    label,
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <label style={{ display: "flex", flexDirection: "column"}}>
      <div className="auth__label" style={hasError && {color: "red"}}>
        {label}:
      </div>
      <input
        value={value}
        onChange={(text) => onChange(name)(text)}
        style={hasError && {borderColor: "red"}}
        {...inputProps}
      />
      {hasError && <span style={{ marginTop: "5px", color: "red", fontSize: "13px", textAlign: "center"}} >{errors[name]}</span>}
    </label>
  )
}

export default Input;