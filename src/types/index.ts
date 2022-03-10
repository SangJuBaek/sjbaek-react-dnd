export interface SourceItem {
	id: string
	text: string
	type: string
}

export interface TargetItem {
	id: string
	text: string
	type: string
  sourceId: string
}

export interface dragItemState {
  value: number
  dragItems: SourceItem[]
  draggedItems: TargetItem[]
  focusItemId: string
}

export interface TargetBoxProp {
  itemObj: SourceItem
  onDrop: (item: any, _item: SourceItem) => void
}
