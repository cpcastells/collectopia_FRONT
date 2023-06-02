import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { BoardgameStructure } from "../../../store/boardgames/types";

const boardgamesFactory = Factory.define<BoardgameStructure>(() => ({
  players: {
    min: faker.number.int({ min: 1, max: 4 }),
    max: faker.number.int({ min: 4, max: 8 }),
  },
  title: faker.word.noun(8),
  image: faker.image.url(),
  category: faker.word.noun(8),
  mechanics: faker.word.noun(8),
  duration: faker.number.int({ min: 20, max: 130 }),
  briefDescription: faker.word.words(10),
  price: faker.number.int({ min: 20, max: 100 }),
  author: faker.person.fullName(),
  releaseYear: faker.number.int({ min: 2010, max: 2022 }),
  id: faker.string.alphanumeric(10),
  user: faker.string.alphanumeric(10),
}));

export default boardgamesFactory;
