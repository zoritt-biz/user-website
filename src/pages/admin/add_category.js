import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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

const ADD_TO_BUSINESSES_LIST = gql`
  mutation($autocompleteTerm: String) {
    businessListCreateOne(record: { autocompleteTerm: $autocompleteTerm }) {
      record {
        autocompleteTerm
      }
    }
  }
`;

const AddCategory = () => {
  const [cat_name, setCatName] = useState("");
  const [cat_parent, setCatParent] = useState("");

  const [
    addCategory,
    {
      loading: addingToCategory,
      data: addedToCategory,
      error: addingToCategoryError,
    },
  ] = useMutation(ADD_CATEGORY);

  const [
    addBusinessList,
    {
      loading: addingToBusinessesList,
      data: addedToBusinessesList,
      error: addingToBusinessesListError,
    },
  ] = useMutation(ADD_TO_BUSINESSES_LIST);

  return (
    <div className="container-md text-center py-5">
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
                  ...cat_name.toLowerCase().split(" "),
                  ...cat_parent.toLowerCase().split(" "),
                ],
              },
            },
          });

          addBusinessList({
            variables: {
              autocompleteTerm: cat_name.toLowerCase(),
            },
          });
        }}
      >
        <div className="row py-5">
          <div className="col-12 col-md-6 my-2">
            <input
              placeholder="Category Name"
              className="w-100"
              type="text"
              value={cat_name}
              onChange={(v) => setCatName(v.target.value)}
            />
          </div>
          <div className="col-12 col-md-6 my-2">
            <input
              placeholder="Category Parent"
              className="w-100"
              type="text"
              value={cat_parent}
              onChange={(v) => setCatParent(v.target.value)}
            />
          </div>
        </div>
        <div className="mb-5">
          <input type="submit" />
          <div>
            {addingToCategory && "Loading..."}
            {addedToCategory && "Done"}
            {addingToCategoryError && addingToCategoryError.message}
          </div>
        </div>
        <div className="">
          <button
            onClick={() => {
              addBusinessList({
                variables: {
                  autocompleteTerm: cat_parent.toLowerCase(),
                },
              });
            }}
            type="button"
          >
            Add parent to search index list
          </button>
          <div>
            {addingToBusinessesList && "Loading..."}
            {addedToBusinessesList && "Done"}
            {addingToBusinessesListError && addingToBusinessesListError.message}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
