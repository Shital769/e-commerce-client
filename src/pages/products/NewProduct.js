import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { CustomInputField } from "../../components/custom-input-field/CustomInputField";
import { CustomSelect } from "../../components/custom-select/CustomSelect";
import { postProductAction } from "./ProductAction";
import { fetchCats } from "../category/CategoryAction";

const initialState = {
  status: "inactive",
};

export const NewProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [newImages, setNewImages] = useState([]);

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    !categories.length && dispatch(fetchCats());
  }, [categories.length, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formDta = new FormData();

    for (let key in formData) {
      formDta.append(key, formData[key]);
    }

    newImages.length &&
      [...newImages].map((item) => formDta.append("images", item));

    dispatch(postProductAction(formDta));
  };

  const handleOnImageUpload = (e) => {
    const { files } = e.target;

    setNewImages(files);
  };

  const inputes = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung TV",
      required: true,
    },
    {
      name: "sku",
      label: "Sku",
      type: "text",
      placeholder: "SAM-TV-8",
      required: true,
    },
    {
      name: "qty",
      label: "Qty",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "500",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "400",
      required: true,
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      label: "Description",
      as: "textarea",
      rows: 6,
      placeholder: "Write detail information about the product here",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "file",
      multiple: true,
      required: true,
      accept: "image/*",
    },
  ];

  return (
    <AdminLayout>
      <div className="mb-3">
        <div className="py-3 fs-2">New Product</div>
        <Link to="/products">
          <Button variant="secondary"> &lt; Back</Button>
        </Link>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check name="status" type="switch" label="Status" />
          </Form.Group>

          <CustomSelect
            args={categories}
            func={handleOnChange}
            name="parentCat"
          />

          {inputes.map((item, i) => (
            <CustomInputField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handleOnImageUpload : handleOnChange
              }
            />
          ))}

          <div className="d-grid">
            <Button type="submit" variant="success">
              Add Product
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};
