import React, { useEffect } from "react";
import "./items.css";

interface Item {
  name: string;
  description: string;
  comment: string;
}

//function that takes an index as a parameter, removes the corresponding item from the array of items stored in local storage, and overwrites the key with the updated array.
const deleteItem = (index:number) => {
  let items = JSON.parse(localStorage.getItem("items")!) as Item[];
  const updatedItems = items.filter((item, i) => i !== index);
  localStorage.setItem("items", JSON.stringify(updatedItems));
  window.location.reload();
}

const Items = () => {
  const items = (JSON.parse(localStorage.getItem("items")!) as Item[]) || [];
  console.log(items);

  return (
    <div className="items__wrapper">
      <div className="items__container">
        {items.map((item, index:number) => (
          <div key={index} className="item__content">

            <div className="name__content">
            <h3>Name</h3>
            <p>{item.name}</p>
            </div>

            <div className="description__content">
            <h3>Description</h3>
            <p>{item.description}</p>
            </div>

            <div className="button__content">
            <button className="delete__item" onClick={() => deleteItem(index)}>Delete</button>
            <button className="details__item">Details</button>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Items;
