import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../pages/category/CategoryAction";

const CategoryEditForm = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const [formDta, setFormDta] = useState({});

  useEffect(() => {
    setFormDta(selectedCategory);
  }, [selectedCategory]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDta({
      ...formDta,

      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.prevenDefault();

    const { _id, name, status } = formDta;

    dispatch(updateCategory({ _id, name, status }));
  };

  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="text-center border p-4 rounded shadow-lg"
      >
        <Row>
          <Col>
            <Form.Select name="status" onChange={handleOnChange} required>
              <option value="">--status--</option>
              <option value="inactive" selected={formDta.status === "inactive"}>
                Inactive
              </option>
              <option value="inactive" selected={formDta.status === "active"}>
                Active
              </option>
            </Form.Select>
          </Col>
          <Col>
            {" "}
            <Form.Control
              placeholder="Category name"
              name="name"
              onChange={handleOnChange}
              required
              value={formDta.name}
            />{" "}
          </Col>
          <Col>
            {" "}
            <Button type="submit" variant="warning">
              Update
            </Button>{" "}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CategoryEditForm;
