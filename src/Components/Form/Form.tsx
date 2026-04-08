import React, { useState } from "react";
import { PackingListItem } from "../PackingList/PackingList.types";
import { FormProps } from "./Form.types";

/**
 * Form component - Allows users to add new items to the packing list
 * Currently displays a prompt for users to add items
 * TODO: Add input fields and submit handler
 */
export const Form = ({ packingList, setPackingList }: FormProps) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number | string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!description.trim() || !quantity || Number(quantity) < 1) return;
    console.log(description);
    console.log(quantity);
    const newItem: PackingListItem = {
      id: Date.now(),
      description: description,
      quantity: Number(quantity),
      packed: false,
    };
    setPackingList([...packingList, newItem]);
    setDescription("");
    setQuantity("");
    console.log(newItem);
  };

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select onChange={handleSelection} defaultValue={quantity}>
        <option value="">Select</option>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {" "}
            {num}{" "}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="type..."
        value={description}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
};
