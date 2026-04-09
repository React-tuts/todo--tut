import React from "react";
import { PackingListItemProps } from "./PackingList.types";

/**
 * PackingListItem component - Represents a single item in the packing list
 * Displays item quantity and description, with visual strikethrough when packed
 * @param {PackingListItemProps} props - Contains packingListItem object
 * @returns Rendered list item with delete button
 */
export const PackingListItem = ({
  packingListItem,
  deleteItem,
  packingList,
}: PackingListItemProps) => {
  return (
    <li>
      {/* Apply strikethrough style if item is packed */}
      <span
        style={packingListItem.packed ? { textDecoration: "line-through" } : {}}
      >
        {packingListItem.quantity}
        {packingListItem.description}
      </span>
      {/* Delete button to remove item from list */}
      <button onClick={() => deleteItem(packingListItem)}>❌</button>
    </li>
  );
};
