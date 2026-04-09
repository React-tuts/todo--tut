import React from "react";
import { PackingListProps } from "./PackingList.types";
import { PackingListItem } from "./PackingListItem";

/**
 * PackingList component - Displays all packing items in a list format
 * @param {PackingListProps} props - Contains packingList array of items
 * @returns Rendered list of packing items
 */
export const PackingList = ({ packingList, deleteItem }: PackingListProps) => {
  return (
    <div className="list">
      <ul>
        {/* Map through all packing items and render each one */}
        {packingList.map((pl) => (
          <PackingListItem
            packingListItem={pl}
            key={pl.id}
            deleteItem={deleteItem}
            packingList={packingList}
          />
        ))}
      </ul>
    </div>
  );
};
