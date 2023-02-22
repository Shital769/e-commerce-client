import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const AddNewCateforyForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit} className="text-center border p-4" rounded shadow-lg > 
        <Row>
          <Col>
            <Form.Control
              name="name"
              placeholder="Category Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="warning">
              Add New Category
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddNewCateforyForm;
