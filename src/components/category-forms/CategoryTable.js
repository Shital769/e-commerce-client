import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCat,
  fetchCats,
  updateCat,
} from "../../pages/category/CategoryAction";
import { setShowModal } from "../../system/systemSlice";
import Pagination from "react-bootstrap/Pagination";
// import CustomModal from "../custom-modal/CustomModal";
// import CategoryEditForm from "./CategoryEditForm";

const itemsPerTable = 5;

const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  const [showCategories, setShowCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (!showCategories.length) {
      dispatch(fetchCats());

    }
    setShowCategories(categories);
  }, [dispatch, categories]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCat(_id));
    }
  };

  const handleOnEdit = (item) => {
    setSelectedCategory(item);
    dispatch(setShowModal(true));
  };

  const handleOnChange = (e) => {
    const { value } = e.target;

    const tempArg = categories.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    setShowCategories(tempArg);
  };

  const handleOnSwitch = (e) => {
    const { checked, value } = e.target;
    const valArg = value.split("|");

    if (window.confirm("Are your sure you want to change the status?")) {
      const obj = {
        _id: valArg[0],
        name: valArg[1],
        status: checked ? "active" : "inactive",
      };

      dispatch(updateCat(obj));
    }
  };

  const onCategoryNameChange = (e) => {
    const { value } = e.target;
    setSelectedCategory({
      ...selectedCategory,
      name: value,
    });
  };

  const handleOnSave = () => {
    const { _id, name, status } = selectedCategory;

    if (window.confirm("Are you sure you want to change the status?")) {
      dispatch(updateCat({ _id, name, status }));
      setSelectedCategory({});
    }
  };

  const handleOnPagination = (num) => {
    setActive(num);
  };

  let items = [];
  const numberOfPage = Math.ceil(showCategories.length / itemsPerTable);
  for (let number = 1; number <= numberOfPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleOnPagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const startPageItem = (active - 1) * itemsPerTable;
  const endPageItem = startPageItem + itemsPerTable;
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between mb-2">
        <div>{showCategories.length} categories found!</div>
        <div className="d-flex align-items-center">
          <label>Search: </label>
          <Form.Control
            onChange={handleOnChange}
            placeholder="Search by name"
          />
        </div>
      </div>

      {/* <CustomModal show={false} title="Update Category">
        <CategoryEditForm selectedCategory={selectedCategory} />
      </CustomModal> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showCategories?.length > 0 &&
            showCategories.map(
              (item, i) =>
                i >= startPageItem &&
                i < endPageItem && (
                  <tr key={item?._id}>
                    <td>{i + 1}</td>
                    <td>
                      <Form.Check
                        onChange={handleOnSwitch}
                        type="switch"
                        checked={item.status === "active"}
                        value={item._id + "|" + item.name}
                      />
                    </td>
                    <td>
                      {selectedCategory._id === item._id ? (
                        <Form.Control
                          value={selectedCategory.name}
                          onChange={onCategoryNameChange}
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td>{item.slug}</td>
                    {selectedCategory._id === item._id ? (
                      <td>
                        <Button onClick={handleOnSave} variant="success">
                          Save
                        </Button>
                        <Button onClick={() => handleOnEdit({})} variant="info">
                          Cancel
                        </Button>
                      </td>
                    ) : (
                      <td>
                        {" "}
                        <Button
                          onClick={() => handleOnEdit(item)}
                          variant="warning"
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => handleOnDelete(item._id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    )}
                  </tr>
                )
            )}
        </tbody>
      </Table>
      <div>
        <Pagination size="sm">{items}</Pagination>
        <br />
      </div>
    </div>
  );
};

export default CategoryTable;
