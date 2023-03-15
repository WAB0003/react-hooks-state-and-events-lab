import React, {useState} from "react";
import Item from "./Item";

//items is an array of items
function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState("All")
  //!function that handles the filter Change
  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  //!Create another variable that takes the filtered array of items and maps over them.
  const filteredItems = selectedCategory === "All" ? items : items.filter((item)=>item.category===selectedCategory)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* changed items to filteredItems */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
