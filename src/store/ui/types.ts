export interface UiStateStructure {
  isLoading?: boolean;
  modalData: {
    isError: boolean;
    isSuccess: boolean;
    title?: string;
    firstMessage?: string;
    secondMessage?: string;
    icon?: string;
  };
}

export interface ModalDataStructure {
  isError?: boolean;
  isSuccess?: boolean;
  title?: string;
  firstMessage: string;
  secondMessage: string;
  icon: string;
}
