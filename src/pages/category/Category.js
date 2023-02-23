import { AddNewCatFrm } from "../../components/category-forms/AddNewCateforyForm";

import CategoryTable from "../../components/category-forms/CategoryTable";

import { AdminLayout } from "../layout/AdminLayout";

const Category = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <h3>Category Management</h3>
        <hr />
      </div>
      <div>
        {/* form */}
        <AddNewCatFrm />

        {/* table */}
        <CategoryTable />
      </div>
    </AdminLayout>
  );
};

export default Category;
