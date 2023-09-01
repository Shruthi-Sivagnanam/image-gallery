import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Search() {
  const [tag, setTag] = useState("");
  const search = () => {
    sessionStorage.setItem("tag", tag);
    console.log(tag);
  };
  return (
    <div className="row justify-content-center m-5 shadow-lg p-3 mt-1 bg-dark rounded">
      <div className="col-md-2">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <Button variant="light" onClick={search}>
          Search
        </Button>
      </div>
    </div>
  );
}
