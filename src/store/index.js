import {combineReducers} from "redux";
import {episodeReducer} from "./reducers/EpisodeReducer";

const rootReducer = combineReducers({
    episodes: episodeReducer,
});

export default rootReducer;
