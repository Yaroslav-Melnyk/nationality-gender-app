import { HistoryItem, ADD_HISTORY_ITEM, AddHistoryItemAction } from './types';

export function sendMessage(newItem: HistoryItem): AddHistoryItemAction {
  return {
    type: ADD_HISTORY_ITEM,
    payload: newItem,
  }
};