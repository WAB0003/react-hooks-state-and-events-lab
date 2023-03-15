import React,{useState} from "react";
//{ id: 1, name: "Yogurt", category: "Dairy" },
function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleClick() {
    //this can be x. All that happens is we are reversing the value of x. Whatever value gets returned is what will equal inCart.
    setInCart((x)=>!x)
}
//! Everything below is what actually returns from the ITEM function:
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
