import React, { useState } from "react";
import "./inputarea.css";
import Items from "../items/Items";

const InputArea = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");

  const AddItem = () => {
    let items = JSON.parse(localStorage.getItem("items")!) || [];

    const item = {
      name: name,
      comment: comment,
      description: description,
    };

    items.push(item);

    localStorage.setItem("items", JSON.stringify(items));

    return <Items/>
  };

  return (
    <form>
      <div className="input__wrapper">
        <div className="input__container">
          <div className="input__group">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input__group">
            <input
              type="text"
              className="form__field"
              placeholder="Comment"
              name="comment"
              id="comment"
              required
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="input__description">
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="button__area">
          <input type="reset" value="Clear" className="clear__button"></input>

          <button onClick={AddItem} className="add__button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputArea;
