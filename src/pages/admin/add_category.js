import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ContactSupportOutlined } from "@material-ui/icons";

const ADD_CATEGORY = gql`
  mutation($record: CreateOneCategoryInput!) {
    categoryCreateOne(record: $record) {
      record {
        _id
        name
        parent
      }
    }
  }
`;

const AddCategory = () => {
  const [cat_name, setCatName] = useState("");
  const [cat_parent, setCatParent] = useState("");

  const [addCategory, { loading, data, error }] = useMutation(ADD_CATEGORY);

  return (
    <div>
      <h1>Add Category</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCategory({
            variables: {
              record: {
                name: cat_name,
                parent: cat_parent,
                autocompleteTerm: cat_name + " " + cat_parent,
                categoryIndex: [
                  ...cat_name.split(" "),
                  ...cat_parent.split(" "),
                ],
              },
            },
          });
        }}
      >
        <input
          placeholder="Category Name"
          type="text"
          value={cat_name}
          onChange={(v) => setCatName(v.target.value)}
        />
        <br />
        <input
          placeholder="Category Parent"
          type="text"
          value={cat_parent}
          onChange={(v) => setCatParent(v.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      {loading && "Loading..."}
      {data && "Done"}
      {error && error.message}
    </div>
  );
};

export default AddCategory;
