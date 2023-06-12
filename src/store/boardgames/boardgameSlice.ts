import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardgameStructure, BoardgamesDataStructure } from "./types";

export const initialBoardgamesState: BoardgamesDataStructure = {
  boardgames: [],
  stack: 5,
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
    ): BoardgamesDataStructure => ({
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
    loadAdditionalStack: (currentBoardgameState): BoardgamesDataStructure => ({
      ...currentBoardgameState,
      stack: currentBoardgameState.stack + 5,
    }),
  },
});

export const {
  loadBoardgames: loadBoardgamesActionCreator,
  removeBoardgame: removeBoardgameActionCreator,
  addBoardgame: addBoardgameActionCreator,
  loadAdditionalStack: loadAdditionalStackActionCreator,
} = boardgameSlice.actions;
export const boardgamesReducer = boardgameSlice.reducer;
