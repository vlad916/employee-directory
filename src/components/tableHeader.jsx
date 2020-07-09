import React, { Component } from "react";

class TableHeader extends Component {
  
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          <th onClick={() => this.raiseSort("image")}>
            Image
            <button
              className="btn btn-light dropdown-toggle btn-sm m-2 text-danger"
              type="button"
            ></button>
          </th>
          <th onClick={() => this.raiseSort("name")}>
            Name
            <button
              className="btn btn-light dropdown-toggle btn-sm m-2 text-danger"
              type="button"
            ></button>
          </th>
          <th onClick={() => this.raiseSort("phone")}>
            Phone
            <button
              className="btn btn-light dropdown-toggle btn-sm m-2 text-danger"
              type="button"
            ></button>
          </th>
          <th onClick={() => this.raiseSort("email")}>
            Email
            <button
              className="btn btn-light dropdown-toggle btn-sm m-2 text-danger"
              type="button"
            ></button>
          </th>
          <th onClick={() => this.raiseSort("dob")}>
            DOB
            <button
              className="btn btn-light dropdown-toggle btn-sm m-2 text-danger"
              type="button"
            ></button>
          </th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
