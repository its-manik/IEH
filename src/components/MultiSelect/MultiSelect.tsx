import React, { useState } from 'react'
import Select from 'react-select'

const MultiSelect = () => {

  const [item, setItem] = useState(null)

  const options = [
    {value:"Item one", label: "Item one"},
    {value:"Item two", label: "Item two"},
    {value:"Item three", label: "Item three"},
    {value:"Item four", label: "Item four"},
    {value:"Item five", label: "Item five"},
    {value:"Item six", label: "Item six"},
  ]

  return (
    <div>
      <Select options={options} placeholder="Select your Item" isMulti isSearchable />
    </div>
  )
}

export default MultiSelect