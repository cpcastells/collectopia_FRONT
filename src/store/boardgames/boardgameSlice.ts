import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardgameStructure } from "./types";

export const initialBoardgamesState: BoardgameStructure[] = [];

const boardgameSlice = createSlice({
  name: "boardgame",
  initialState: initialBoardgamesState,
  reducers: {
    loadBoardgames: (
      _currentBoardgameState,
      action: PayloadAction<BoardgameStructure[]>
    ) => [...action.payload],
    removeBoardgame: (currentBoardgameState, action: PayloadAction<string>) => {
      return currentBoardgameState.filter(
        (boardgame) => boardgame.id !== action.payload
      );
    },
  },
});

export const {
  loadBoardgames: loadBoardgamesActionCreator,
  removeBoardgame: removeBoardgameActionCreator,
} = boardgameSlice.actions;
export const boardgamesReducer = boardgameSlice.reducer;
