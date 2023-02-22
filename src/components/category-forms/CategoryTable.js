import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleleCategory(_id));
    }
  };

  const handleOnEdit = (item) => {
    setSelectedCategory(item);
    dispatch(setShowModal(true));
  };

  return (
    <div className="mt-5">
      <div>{categories.length} categories found!</div>

      {/* have to add custom modal and edit categoryv form */}

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
          {/* do table body section
           */}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryTable;
