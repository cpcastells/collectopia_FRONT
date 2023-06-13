import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardgameStructure, BoardgamesDataStructure } from "./types";

export const initialBoardgamesState: BoardgamesDataStructure = {
  boardgames: [],
  stack: 5,
  totalBoardgames: 0,
  boardgame: {
    players: {
      min: 0,
      max: 0,
    },
    title: "",
    image: "",
    category: "",
    mechanics: "",
    duration: 0,
    briefDescription: "",
    price: 0,
    author: "",
    releaseYear: 0,
    user: "",
    id: "",
  },
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
    loadBoardgameById: (
      currentBoardgameState,
      action: PayloadAction<BoardgameStructure>
    ): BoardgamesDataStructure => ({
      ...currentBoardgameState,
      boardgame: action.payload,
    }),
    updateTotalBoardgames: (
      currentBoardgameState,
      action: PayloadAction<number>
    ): BoardgamesDataStructure => ({
      ...currentBoardgameState,
      totalBoardgames: action.payload,
    }),
  },
});

export const {
  loadBoardgames: loadBoardgamesActionCreator,
  removeBoardgame: removeBoardgameActionCreator,
  addBoardgame: addBoardgameActionCreator,
  loadAdditionalStack: loadAdditionalStackActionCreator,
  loadBoardgameById: loadBoardgameByIdActionCreator,
  updateTotalBoardgames: updateTotalBoardgamesActionCreator,
} = boardgameSlice.actions;
export const boardgamesReducer = boardgameSlice.reducer;
