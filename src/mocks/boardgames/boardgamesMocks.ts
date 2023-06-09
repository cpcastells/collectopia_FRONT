import { BoardgameStructure } from "../../store/boardgames/types";

export const boardGamesMock: BoardgameStructure[] = [
  {
    players: {
      min: 3,
      max: 5,
    },
    title: "Rising Sun",
    image:
      "https://media.discordapp.net/attachments/1114204200885301331/1114204323862286496/Rising_sun.webp?width=662&height=662",
    category: "Wargame",
    mechanics: "Negotiation",
    duration: 120,
    briefDescription:
      "Rising Sun is a game about honor, negotiation, and warfare in a feudal Japan where the ancient gods (kami) have returned.",
    price: 100,
    author: "Eric M. Lang",
    releaseYear: 2018,
    user: "646f7e585189305e28a57d55",
    id: "6478dd2fe3e61710d8baa04c",
  },
  {
    players: {
      min: 2,
      max: 4,
    },
    title: "Brass: Lancashire",
    image:
      "https://cdn.discordapp.com/attachments/1114204200885301331/1114204323430277160/Brass_Lancashire.webp",
    category: "Strategy",
    mechanics: "Route/Network Building",
    duration: 160,
    briefDescription:
      "Brass: Lancashire is a game of economic strategy, set during the industrial revolution in Lancashire.",
    price: 60,
    author: "Martin Wallace",
    releaseYear: 2007,
    user: "646f7e585189305e28a57d55",
    id: "6478dd2fe3e61710d8baa04d",
  },
];

export const newBoardgameMock: BoardgameStructure = {
  players: {
    min: 2,
    max: 4,
  },
  title: "Catan",
  image:
    "https://cdn.discordapp.com/attachments/1114204200885301331/1114204323430277160/Brass_Lancashire.webp",
  category: "Strategy",
  mechanics: "Route/Network Building",
  duration: 160,
  briefDescription:
    "Brass: Lancashire is a game of economic strategy, set during the industrial revolution in Lancashire.",
  price: 60,
  author: "Martin Wallace",
  releaseYear: 2007,
  user: "646f7e585189305e28a57d55",
  id: "6478dd2fe3e61710d8baa04d",
};
