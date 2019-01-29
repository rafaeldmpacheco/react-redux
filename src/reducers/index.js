import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song 1", duration: "4:05" },
    { title: "Song 2", duration: "2:30" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
