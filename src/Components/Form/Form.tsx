import React from "react";

/**
 * Form component - Allows users to add new items to the packing list
 * Currently displays a prompt for users to add items
 * TODO: Add input fields and submit handler
 */
export const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        <option value="">Select</option>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {" "}
            {num}{" "}
          </option>
        ))}
      </select>
    </form>
  );
};
