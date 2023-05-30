export interface userApiDataStructure {
  name: string;
  id: string;
  token: string;
}

export interface userStateStructure extends userApiDataStructure {
  isLogged: boolean;
}
