export type PackingListProps = {
    packingList: PackingList[]
}


export type PackingList = {
    id : number,
    description: string,
    quantity: number,
    packed: boolean
}

export type PackingListItemProps = {
    packingListItem: PackingList
}