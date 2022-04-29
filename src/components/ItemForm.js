import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [name, setInputName] = useState("") 
  const [category, setInputCategory] = useState("Produce")

  function typingName (event) {
    setInputName(event.target.value)
  }
  function selectingCategory(event) {
    setInputCategory(event.target.value)
  }

  function submittingEvent (e) {
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category,
    })
  }

  return (
    <form className="NewItem" onSubmit={submittingEvent}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={typingName}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={selectingCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
