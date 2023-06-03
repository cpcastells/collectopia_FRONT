export interface BoardgameStructure {
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
  user: string;
  id: string;
}

export interface BoardgamesApiResponse {
  boardgames: BoardgameStructure[];
}
