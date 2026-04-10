import React from "react";
import { StatsProps } from "./Stats.types";

/**
 * Stats component - Displays statistics about packing progress
 * Shows total number of items and number of items already packed
 * TODO: Calculate and display dynamic stats based on packing list
 */
export const Stats = ({ items }: StatsProps) => {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>lets crack on with packing</em>
      </footer>
    );
  const itemCount = items.length;
  const packedCount = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedCount / itemCount) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          {" "}
          You have {itemCount} items on your list, and you already packed{" "}
          {packedCount} ( {percentage}% )
        </em>
      ) : (
        <em>You are all set!</em>
      )}
    </footer>
  );
};
