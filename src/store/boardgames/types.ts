export interface BoardgameBaseStructure {
  players: {
    min: number;
    max?: number;
  };
  title: string;
  image: string;
  category: string;
  mechanics: string;
  duration: number;
  briefDescription: string;
  price?: number;
  author?: string;
  releaseYear?: number;
  user?: string;
}
export interface BoardgameStructure extends BoardgameBaseStructure {
  id: string;
}
export interface BoardgamesApiResponse {
  boardgames: BoardgameStructure[];
}
