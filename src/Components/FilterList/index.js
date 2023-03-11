import React, { useState } from "react";

function FilterList({ items }) {
  const [query, setQuery] = useState("");
  const filterItems = items?.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {filterItems?.length ? (
          filterItems.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <p>No Matching items.</p>
        )}
      </ul>
    </div>
  );
}

export default FilterList;
