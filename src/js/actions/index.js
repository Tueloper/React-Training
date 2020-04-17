import { ADD_ARTICLE, ADD_TABLE, REMOVE_TABLE_INDEX } from '../constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

export function addTable(payload) {
  return { type: ADD_TABLE, payload}
}

export function removeTableIndex(payload) {
  return { type: REMOVE_TABLE_INDEX, payload}
}