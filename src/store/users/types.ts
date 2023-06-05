export interface UserApiDataStructure {
  name: string;
  id: string;
  token: string;
}

export interface UserStateStructure extends UserApiDataStructure {
  isLogged: boolean;
}
