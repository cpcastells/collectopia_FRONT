import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardgameStructure, BoardgamesApiResponse } from "./types";

export const initialBoardgamesState: BoardgamesApiResponse = {
  boardgames: [],
};

const boardgameSlice = createSlice({
  name: "boardgame",
  initialState: initialBoardgamesState,
  reducers: {
    loadBoardgames: (
      currentBoardgameState,
      action: PayloadAction<BoardgameStructure[]>
    ) => ({ ...currentBoardgameState, boardgames: action.payload }),

    removeBoardgame: (
      currentBoardgameState,
      action: PayloadAction<string>
    ): BoardgamesApiResponse => ({
      ...currentBoardgameState,
      boardgames: currentBoardgameState.boardgames.filter(
        (boardgame) => boardgame.id !== action.payload
      ),
    }),
    addBoardgame: (
      currentBoardgameState,
      action: PayloadAction<BoardgameStructure>
    ) => ({
      ...currentBoardgameState,
      boardgames: [...currentBoardgameState.boardgames, action.payload],
    }),
  },
});

export const {
  loadBoardgames: loadBoardgamesActionCreator,
  removeBoardgame: removeBoardgameActionCreator,
  addBoardgame: addBoardgameActionCreator,
} = boardgameSlice.actions;
export const boardgamesReducer = boardgameSlice.reducer;
