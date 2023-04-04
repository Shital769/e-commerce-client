import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

export const CustomSelect = ({ label, args, func, name, selectedCategory }) => {
  useEffect(() => {}, [selectedCategory]);
  console.log(selectedCategory);
  return (
    <Form.Group className="mb-3">
      <label htmlFor="">{label}</label>
      <Form.Select
        name={name}
        required
        onChange={func}
        value={selectedCategory || ""}
      >
        <option value="">Select category</option>
        {args.length > 0 &&
          args.map(({ _id, name }) => (
            <option key={_id} value={_id}>
              {name}
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
};
