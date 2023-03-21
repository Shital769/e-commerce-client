import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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

  

  return (
    <AdminLayout>
      <div className="mb-3">
        <div className="py-3 fs-2">New Product</div>

        <Link to="products">
          {" "}
          <Button variant="secondary"> &lt; Back</Button>
        </Link>
        <hr />

        <Form>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              checked={FormData.status === "active"}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
      </div>
    </AdminLayout>
  );
};
