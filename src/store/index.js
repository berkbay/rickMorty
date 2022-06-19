import {combineReducers} from "redux";
import {episodeReducer} from "./reducers/EpisodeReducer";
import {characterReducer} from "./reducers/CharacterReducer";

const rootReducer = combineReducers({
    episodes: episodeReducer,
    characters: characterReducer
});

export default rootReducer;
