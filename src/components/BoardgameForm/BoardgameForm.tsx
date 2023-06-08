import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import BoardgameFormStyled from "./BoardgameFormStyled";
import { BoardgameBaseStructure } from "../../store/boardgames/types";

const BoardgameForm = (): React.ReactElement => {
  const initialBoardgame: BoardgameBaseStructure = {
    title: "",
    duration: 0,
    players: {
      min: 0,
      max: 0,
    },
    category: "",
    mechanics: "",
    image: "",
    releaseYear: 0,
    author: "",
    price: 0,
    briefDescription: "",
  };

  const [newBoardgame, setNewBoardgame] =
    useState<BoardgameBaseStructure>(initialBoardgame);

  const handleOnChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = event.target;

    if (id === "min" || id === "max") {
      setNewBoardgame((prevState) => ({
        ...prevState,
        players: {
          ...prevState.players,
          [id]: Number(value),
        },
      }));
    } else {
      setNewBoardgame((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  return (
    <BoardgameFormStyled className="form">
      <div className="form__control-form">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          onChange={handleOnChange}
          value={newBoardgame.title}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="duration">Playtime (minutes):</label>
        <input
          id="duration"
          type="number"
          onChange={handleOnChange}
          value={newBoardgame.duration || ""}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="min">Min. players:</label>
        <input
          id="min"
          type="number"
          min={1}
          onChange={handleOnChange}
          value={newBoardgame.players.min || ""}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="max">Max. players:</label>
        <input
          id="max"
          type="number"
          placeholder="optional"
          min={2}
          onChange={handleOnChange}
          value={newBoardgame.players.max || ""}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          className="form__select"
          onChange={handleOnChange}
        >
          <option value="">--Select--</option>
          <option value="Eurogame">Eurogame</option>
          <option value="Filler">Filler</option>
          <option value="Legacy">Legacy</option>
          <option value="Party Game">Party Game</option>
          <option value="War Game">War Game</option>
          <option value="Card Game">Card Game</option>
          <option value="Cooperative">Cooperative</option>
          <option value="Role Playing">Role Playing</option>
          <option value="Abstract">Abstract</option>
        </select>
      </div>
      <div className="form__control-form">
        <label htmlFor="mechanics">Mechanics</label>
        <select
          id="mechanics"
          className="form__select"
          onChange={handleOnChange}
        >
          <option value="">--Select--</option>
          <option value="Hand Management">Hand Management</option>
          <option value="Worker Placement">Worker Placement</option>
          <option value="Charades">Charades</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Route Building">Route Building</option>
          <option value="Card Drafting">Card Drifting</option>
          <option value="Dice Rolling">Dice Rolling</option>
          <option value="Hidden Identities">Hidden Identities</option>
          <option value="Dungeon-crawler">Dungeon-crawler</option>
          <option value="Tile Placement">Tile Placement</option>
        </select>
      </div>
      <div className="form__control-form">
        <label htmlFor="image">Image (url):</label>
        <input
          id="image"
          type="text"
          onChange={handleOnChange}
          value={newBoardgame.image}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="releaseYear">Release year:</label>
        <input
          id="releaseYear"
          type="number"
          placeholder="optional"
          onChange={handleOnChange}
          value={newBoardgame.releaseYear || ""}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          placeholder="optional"
          onChange={handleOnChange}
          value={newBoardgame.author}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="price">Price - €:</label>
        <input
          id="price"
          type="number"
          placeholder="optional"
          min={0}
          onChange={handleOnChange}
          value={newBoardgame.price || ""}
        />
      </div>
      <div className="form__control-form">
        <label htmlFor="briefDescription">Description:</label>
        <textarea id="briefDescription" onChange={handleOnChange} />
      </div>
      <Button text="Add" className="form__button" />
    </BoardgameFormStyled>
  );
};

export default BoardgameForm;
