import { PackingListItemType } from "../PackingList.types"

export type SortType = "input" | "description" | "packed"

export const getSortedList = (list:PackingListItemType[], sortType: SortType) : PackingListItemType[]   => {
    let sortedList: PackingListItemType[] = [];
    
    switch (sortType) {
        case "description":
            sortedList = list
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
            return sortedList;
        case "packed":
            sortedList = list
                .slice()
                .sort((a, b) => Number(a.packed) - Number(b.packed));
            return sortedList;
        default:
            return list;
            
    }
}