export type PackingListProps = {
    packingList: PackingListItemType[],
    //setPackingList: React.Dispatch<React.SetStateAction<PackingListItem[]>>
    deleteItem: (item: PackingListItemType) => void,
    handleCheckbox: (item:PackingListItemType) => void
}


export type PackingListItemType = {
    id : number,
    description: string,
    quantity: number,
    packed: boolean
}

export type PackingListItemProps = {
    packingListItem: PackingListItemType,
    packingList: PackingListItemType[],
    //setPackingList: React.Dispatch<React.SetStateAction<PackingListItem[]>>
    deleteItem: (item: PackingListItemType) => void,
    handleCheckbox: (item:PackingListItemType) => void
}