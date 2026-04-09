export type PackingListProps = {
    packingList: PackingListItem[],
    //setPackingList: React.Dispatch<React.SetStateAction<PackingListItem[]>>
    deleteItem: (item: PackingListItem) => void
}


export type PackingListItem = {
    id : number,
    description: string,
    quantity: number,
    packed: boolean
}

export type PackingListItemProps = {
    packingListItem: PackingListItem,
    packingList: PackingListItem[],
    //setPackingList: React.Dispatch<React.SetStateAction<PackingListItem[]>>
    deleteItem: (item: PackingListItem) => void
}