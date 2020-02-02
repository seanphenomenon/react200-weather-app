import { combineReducers } from 'redux';
import citySearchReducer from './components/CitySearch/citySearchReducer';
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer';

const rootReducer = combineReducers({
CitySearch: citySearchReducer,
SearchHistory: searchHistoryReducer
});

export default rootReducer;
