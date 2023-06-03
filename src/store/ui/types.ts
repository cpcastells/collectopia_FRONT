export interface uiStateStructure {
  isLoading: boolean;
  modalInfo: {
    isError: boolean;
    isSucces: boolean;
    title: string;
    firstMessage: string;
    secondMessage?: string;
    icon?: React.ReactElement;
  };
}
