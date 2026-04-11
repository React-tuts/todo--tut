import React from "react"
import { PackingListItemType } from "../PackingList/PackingList.types"

export type FormProps = {
    packingList:PackingListItemType[],
    //setPackingList: React.Dispatch<React.SetStateAction<PackingListItem[]>>
    addItem: (item:PackingListItemType) => void
}