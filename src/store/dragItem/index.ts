import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dragItemState, SourceItem, TargetItem } from 'types'
import { createTempId } from 'utils'

const initialState: dragItemState = {
  value: 0,
  dragItems: [
    {
      type: 'type1',
      id: 't1',
      text: "test1"
    },
    {
      type: 'type2',
      id: 't2',
      text: "test2"
    },
    {
      type: 'type1',
      id: 't3',
      text: "test3"
    },
    {
      type: 'type2',
      id: 't4',
      text: "test4"
    },
    {
      type: 'type1',
      id: 't5',
      text: "test5"
    },
    {
      type: 'type2',
      id: 't6',
      text: "test6"
    },
    {
      type: 'type1',
      id: 't7',
      text: "test7"
    },
  ],
  draggedItems: [],
  focusItemId: ''
}

export const dragItemSlice = createSlice({
  name: 'dragItem',
  initialState,
  reducers: {
    addDraggedItem (state, action: PayloadAction<SourceItem>) {
      const targetItem: TargetItem = {
        id: createTempId(),
        type: action.payload.type,
        sourceId: action.payload.id,
        text: action.payload.text
      }
      state.draggedItems = [...state.draggedItems, targetItem]
    },
    setFocusItemId (state, action: PayloadAction<string>) {
      state.focusItemId = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addDraggedItem, setFocusItemId } = dragItemSlice.actions

export default dragItemSlice.reducer
