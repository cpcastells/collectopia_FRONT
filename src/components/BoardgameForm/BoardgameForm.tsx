import React from "react";
import Button from "../Button/Button";
import BoardgameFormStyled from "./BoardgameFormStyled";

const BoardgameForm = (): React.ReactElement => {
  return (
    <BoardgameFormStyled className="form">
      <div className="form__control-form">
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" />
      </div>
      <div className="form__control-form">
        <label htmlFor="playtime">Playtime (minutes):</label>
        <input id="playtime" type="number" />
      </div>
      <div className="form__control-form">
        <label htmlFor="min-players">Min. players:</label>
        <input id="min-players" type="number" min={1} />
      </div>
      <div className="form__control-form">
        <label htmlFor="max-players">Max. players:</label>
        <input id="max-players" type="number" placeholder="optional" min={2} />
      </div>
      <div className="form__control-form">
        <label htmlFor="category-select">Category:</label>
        <select id="category-select" className="form__select">
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
        <label htmlFor="select-mechanics">Mechanics</label>
        <select id="select-mechanics" className="form__select">
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
        <input id="image" type="text" />
      </div>
      <div className="form__control-form">
        <label htmlFor="year">Release year:</label>
        <input id="year" type="number" placeholder="optional" />
      </div>
      <div className="form__control-form">
        <label htmlFor="author">Author:</label>
        <input id="author" type="text" placeholder="optional" />
      </div>
      <div className="form__control-form">
        <label htmlFor="price">Price - €:</label>
        <input id="price" type="number" placeholder="optional" min={0} />
      </div>
      <div className="form__control-form">
        <label htmlFor="description">Description:</label>
        <textarea id="description" />
      </div>
      <Button text="Add" className="form__button" />
    </BoardgameFormStyled>
  );
};

export default BoardgameForm;
