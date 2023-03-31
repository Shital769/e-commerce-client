import React from 'react'

export const CustomSelect = ({name, args}) => {
  return (
    <Form.Group className="mb-3">
        <label htmlFor=''>{label}</label>
        <Form.Select name = {name} required >
<option value="">Select category</option>
{args.length}

        </Form.Select>
    </Form.Group>
  )
}
