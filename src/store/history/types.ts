export const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM';

export interface HistoryItem {
  country: string,
  gender: string,
  name: string,
};
  
export interface History {
  items: HistoryItem[],
};

export interface AddHistoryItemAction {
  type: typeof ADD_HISTORY_ITEM
  payload: HistoryItem
}