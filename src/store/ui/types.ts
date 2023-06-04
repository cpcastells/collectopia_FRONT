export interface uiStateStructure {
  isLoading: boolean;
  modalInfo: {
    isError: boolean;
    isSuccess: boolean;
    title: string;
    firstMessage: string;
    secondMessage?: string;
    icon?: string;
  };
}
