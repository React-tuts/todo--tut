import { PackingListItem } from "../Components/PackingList/PackingList.types";

/**
 * Sample packing list data
 * Each item contains:
 * - id: unique identifier
 * - description: item name
 * - quantity: number of this item needed
 * - packed: boolean indicating if item is packed
 */
export const PackingListData : PackingListItem[] = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Tie", quantity: 11, packed: true},
]