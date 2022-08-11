import React, { useState } from "react";
import Table from "./Table";
import { file } from "./File";
export default function App() {
  const [state, setstate] = useState("");
  const search = (file) => {
    return file.filter(
      (item) =>
        item.first_name.toLowerCase().includes(state) ||
        item.last_name.toLowerCase().includes(state) ||
        item.email.toLowerCase().includes(state)
    );
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            setstate(e.target.value);
          }}
        />
      </div>

      <Table data={search(file)} />
    </div>
  );
}
