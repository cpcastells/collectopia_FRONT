import {
  BoardgameApiResponse,
  BoardgameStructure,
} from "../../store/boardgames/types";

export const boardGamesMock: BoardgameStructure[] = [
  {
    players: {
      min: 3,
      max: 5,
    },
    title: "Rising Sun",
    image:
      "https://media.discordapp.net/attachments/1114204200885301331/1114204323862286496/Rising_sun.webp?width=662&height=662",
    category: "War game",
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
  {
    players: {
      min: 2,
      max: 4,
    },
    title: "Ticket to Ride",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/914QfDszAyL._AC_SL1500_.jpg",
    category: "Strategy game",
    mechanics: "Route Building",
    duration: 60,
    briefDescription:
      "Ticket to Ride is a railway-themed board game where players collect and play matching train cards to claim railway routes connecting cities across North America.",
    price: 45,
    author: "Alan R. Moon",
    releaseYear: 2004,
    user: "6478dd2fe3e61710d8baa04c",
    id: "649fdab7f3e61920a9bca01d",
  },
  {
    players: {
      min: 2,
      max: 6,
    },
    title: "Catan",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81vqB1-GfPL._AC_SL1500_.jpg",
    category: "Strategy game",
    mechanics: "Trading",
    duration: 120,
    briefDescription:
      "In Catan, players build settlements, cities, and roads to connect them as they settle the island. The game board, which represents the island, is composed of hexagonal tiles of different land types, which are laid out randomly at the beginning of each game.",
    price: 50,
    author: "Klaus Teuber",
    releaseYear: 1995,
    user: "646f7e585189305e28a57d55",
    id: "64af9cd7f1e61950a9bca02e",
  },
  {
    players: {
      min: 1,
      max: 4,
    },
    title: "Gloomhaven",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81yoe6M2EZL._AC_SL1500_.jpg",
    category: "Adventure game",
    mechanics: "Cooperative Play",
    duration: 120,
    briefDescription:
      "Gloomhaven is a game of tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.",
    price: 140,
    author: "Isaac Childres",
    releaseYear: 2017,
    user: "6478dd2fe3e61710d8baa04c",
    id: "64bdfda6f3e61970a9bca03f",
  },
  {
    players: {
      min: 1,
      max: 5,
    },
    title: "Scythe",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91Qp2h1CEeL._AC_SL1500_.jpg",
    category: "Strategy game",
    mechanics: "Area Control",
    duration: 115,
    briefDescription:
      "Scythe is an engine-building, asymmetric, competitive board game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor.",
    price: 85,
    author: "Jamey Stegmaier",
    releaseYear: 2016,
    user: "646f7e585189305e28a57d55",
    id: "64cdfa8bf3e61980a9bca050",
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

export const partialBoardgameMock: BoardgameStructure = {
  players: {
    min: 3,
    max: 0,
  },
  title: "Rising Sun",
  author: "",
  price: 0,
  releaseYear: 0,
  image:
    "https://media.discordapp.net/attachments/1114204200885301331/1114204323862286496/Rising_sun.webp?width=662&height=662",
  category: "War game",
  mechanics: "Negotiation",
  duration: 120,
  briefDescription:
    "Rising Sun is a game about honor, negotiation, and warfare in a feudal Japan where the ancient gods (kami) have returned.",
  user: "646f7e585189305e28a57d55",
  id: "6478dd2fe3e61710d8baa04c",
};

export const apiResponseMock: BoardgameApiResponse = {
  boardgames: boardGamesMock,
  totalBoardgames: boardGamesMock.length,
};
