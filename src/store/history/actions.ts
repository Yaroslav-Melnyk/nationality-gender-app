import { HistoryItem, ADD_HISTORY_ITEM, AddHistoryItemAction } from './types';

export function addHistoryItem(newItem: HistoryItem): AddHistoryItemAction {
  return {
    type: ADD_HISTORY_ITEM,
    payload: newItem,
  }
};