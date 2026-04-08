export type PackingListProps = {
    packingList: PackingListItem[]
}


export type PackingListItem = {
    id : number,
    description: string,
    quantity: number,
    packed: boolean
}

export type PackingListItemProps = {
    packingListItem: PackingListItem
}