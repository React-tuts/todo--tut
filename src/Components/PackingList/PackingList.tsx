import React, { useState } from "react";
import { PackingListItemType, PackingListProps } from "./PackingList.types";
import { PackingListItem } from "./PackingListItem";
import { getSortedList, SortType } from "./utils/PackingSortUtil";

/**
 * PackingList component - Displays all packing items in a list format
 * @param {PackingListProps} props - Contains packingList array of items
 * @returns Rendered list of packing items
 */
export const PackingList = ({
  packingList,
  deleteItem,
  handleCheckbox,
}: PackingListProps) => {
  const [sortBy, setSortBy] = useState<SortType>("input");
  let sortedList: PackingListItemType[] = getSortedList(packingList, sortBy);

  return (
    <div className="list">
      <ul>
        {/* Map through all packing items and render each one */}
        {sortedList.map((pl) => (
          <PackingListItem
            packingListItem={pl}
            key={pl.id}
            deleteItem={deleteItem}
            packingList={packingList}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </ul>
      {/* sort by drop down */}
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as SortType);
          }}
        >
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
      </div>
    </div>
  );
};
