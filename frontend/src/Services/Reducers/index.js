import {combineReducers} from 'redux'
import { FETCH} from './reducers'
import { user } from './userAunthecation';
export const rootReducer= combineReducers({
  Todos:FETCH,
  Users:user
});