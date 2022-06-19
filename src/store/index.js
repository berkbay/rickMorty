import {combineReducers} from "redux";
import {episodeReducer} from "./reducers/Episode";

const rootReducer = combineReducers({
    products: episodeReducer,
});

export default rootReducer;
