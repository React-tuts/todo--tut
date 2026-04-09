import React from "react"
import { PackingListItem } from "../PackingList/PackingList.types"

export type FormProps = {
    packingList:PackingListItem[],
    //setPackingList: React.Dispatch<React.SetStateAction<PackingListItem[]>>
    addItem: (item:PackingListItem) => void
}