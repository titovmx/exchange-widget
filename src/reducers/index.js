import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { exchangeReducer } from './exchange';

export const rootReducer = combineReducers({
  account: accountReducer,
  exchange: exchangeReducer,
});
