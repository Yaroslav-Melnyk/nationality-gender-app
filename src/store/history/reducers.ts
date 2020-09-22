import { History, ADD_HISTORY_ITEM, AddHistoryItemAction } from './types';

const initialState: History = {
    items: [],
}

export function historyReducer(
    state = initialState,
    action: AddHistoryItemAction
  ): History {
    switch (action.type) {
      case ADD_HISTORY_ITEM:
        return {
            items: [...state.items, action.payload]
        }
      default:
        return state
    }
}