import * as types from '../actions/actionTypes';
import initialState from './initialState';
function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}
export default function ajaxStatusReducers(state = initialState.numAjaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type) || (action.type == types.AJAX_CALL_ERROR)) {
    return state - 1;
  }
  return state;
}