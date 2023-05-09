import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductAction,
  getProductAction,
} from "../../pages/products/ProductAction";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [ids, setIds] = useState([]);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    if (value === "all") {
      checked ? setIds(products.map((item) => item._id)) : setIds([]);
      return;
    }

    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((item) => item !== value));
  };

  const handleOnDelete = () => {
    if (!window.confirm("Are you sure you want to delete the product(s)")) {
      dispatch(deleteProductAction(ids));

      setIds([]);
    }
  };

  return (
    <div className="">
      <div className="mb-2">
        <select>
          <option value="">All</option>
          <option value="">Active</option>
          <option value="">Inactive</option>
        </select>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              # <input type="checkbox" value="all" onChange={handleOnSelect} />
            </th>
            <th>Thumbnail</th>
            <th>Staus</th>
            <th>Name</th>
            <th>Price</th>
            <th>Sales Price</th>
            <th>Qty</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>
                {i + 1}{" "}
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={handleOnSelect}
                  checked={ids.includes(item._id)}
                />
              </td>
              <td>
                <img
                  src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)}
                  width="80px"
                  alt="photos"
                />
              </td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.salesPrice}</td>
              <td>{item.qty}</td>

              <td>
                <Link to={`/products/${item._id}`}>
                  <Button variant="waring">
                    <i className="fa-solid fa-pen-to-square"></i> Edit Product
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {ids.length > 0 && (
        <div className="d-grid mb-4">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete {ids.length} selected items.
          </Button>
        </div>
      )}
    </div>
  );
};
