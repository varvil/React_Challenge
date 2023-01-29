import React, { useEffect } from "react";
import "./items.css";

interface Item {
  name: string;
  description: string;
}

const Items = () => {
  const items = (JSON.parse(localStorage.getItem("items")!) as Item[]) || [];
  console.log(items);

  return (
    <div className="items__wrapper">
      <div className="items__container">
        <div className="item__table">
          <table>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            {items.map((item, index: number) => (
              <tr key={index}>
                <td className="name__td">{item.name}</td>
                <td className="description__td">{item.description}</td>
                <td className="buttontd">
                  <button>Delete</button>
                </td>
                <td className="buttontd">
                  <button>Details</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Items;
