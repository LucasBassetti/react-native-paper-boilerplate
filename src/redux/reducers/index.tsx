import { combineReducers } from 'redux';
import user from './user';

// USE ALPHABETICAL ORDER
const rootReducer = combineReducers({ user });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
