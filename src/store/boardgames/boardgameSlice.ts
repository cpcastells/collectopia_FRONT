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
  },
});

export const { loadBoardgames: loadBoardgamesActionCreator } =
  boardgameSlice.actions;
export const boardgamesReducer = boardgameSlice.reducer;
