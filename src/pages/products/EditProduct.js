import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CustomInputField } from "../../components/custom-input-field/CustomInputField";
import { AdminLayout } from "../layout/AdminLayout";
import { getSelectedProductAction, updateProductAction } from "./ProductAction";

export const EditProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [newImages, setNewImages] = useState([]);
  const { _id } = useParams();

  const [imgToDelete, setImgToDelete] = useState([]);

  const { selectedProduct } = useSelector((state) => state.product);

  useEffect(() => {
    !selectedProduct._id && dispatch(getSelectedProductAction(_id));

    setFormData(selectedProduct);
  }, [dispatch, _id, selectedProduct]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    console.log(checked, name, value);

    if (name === "mainImage" && imgToDelete.includes(value)) {
      return alert(
        "You can not delete the main image, change the main image first"
      );
    }

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnDelete = (e) => {
    const { checked, value } = e.target;

    if (formData.mainImage === value) {
      return alert(
        "You can not delete the main image, change the main image first"
      );
    }

    if (checked) {
      setImgToDelete([...imgToDelete, value]);
    } else {
      setImgToDelete(imgToDelete.filter((item) => item !== value));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { createdAt, updatedAt, __v, slug, ...rest } = formData;

    const formDta = new FormDta();

    for (let key in rest) {
      formDta.append(key, formData[key]);
    }

    newImages.length &&
      [...newImages].map((item) => formDta.append("newImages", item));
    if (imgToDelete.length) {
      formDta.append("imgToDelete", imgToDelete);
    }
    dispatch(updateProductAction(formDta));
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
      placeholder: "Samsung Tv",
      required: true,
      value: formData.name,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      disabled: true,
      required: true,
      value: formData.slug,
    },
    {
      name: "sku",
      label: "Sku",
      placeholder: "SAM-TV-8",
      required: true,
      value: formData.sku,
    },
    {
      name: "qty",
      label: "Qty",
      type: "number",
      placeholder: "50",
      required: true,
      value: formData.qty,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "500",
      required: true,
      value: formData.price,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "400",
      value: formData.salesPrice,
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "date",
      value: formData.salesStartDate
        ? formData.salesStartDate.substr(0, 10)
        : null,
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "date",
      value: formData.salesEndDate ? formData.salesEndDate.substr(0, 10) : null,
    },
    {
      name: "images",
      label: "Images",
      type: "file",
      multiple: true,
      accept: "image/*",
    },
  ];

  return (
    <AdminLayout>
      <div className="mb-3">
        <div className="py-3 fs-2">New Product</div>

        <Link to="/products">
          {" "}
          <Button variant="secondary"> &lt; Back</Button>
        </Link>
        <hr />

        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              checked={formData.status === "active"}
              onChange={handleOnChange}
            />
          </Form.Group>

          {inputes.map((item, i) => (
            <CustomInputField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handleOnImageUpload : handleOnChange
              }
            />
          ))}

          <div className="py-4 d-flex justify-content-between flex-wrap">
            {formData?.images?.map((item, i) => (
              <div className="d-flex flex-column">
                <div>
                  <input
                    type="radio"
                    name="mainImage"
                    value={item}
                    onChange={handleOnChange}
                    checked={item === formData.mainImage}
                  />
                  <label htmlFor=""> Main Image</label>
                </div>

                <img
                  src=""
                  alt="product"
                  key={i}
                  className="border p-2"
                  width="120px"
                />

                <Form.Check
                  label="Delete"
                  onChange={handleOnDelete}
                  value={item}
                  checked={imgToDelete.includes(item)}
                />
              </div>
            ))}
          </div>

          <div className="d-grid">
            <Button type="submit" variant="success">
              Update Product
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};
