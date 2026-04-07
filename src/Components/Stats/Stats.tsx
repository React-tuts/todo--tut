import React from "react";

/**
 * Stats component - Displays statistics about packing progress
 * Shows total number of items and number of items already packed
 * TODO: Calculate and display dynamic stats based on packing list
 */
export const Stats = () => {
  return (
    <footer className="stats">
      <em> You have x items on your list, and you already packed X</em>
    </footer>
  );
};
