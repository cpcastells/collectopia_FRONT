export interface ModalDataStructure {
  isError: boolean;
  isSuccess: boolean;
  title?: string;
  firstMessage?: string;
  secondMessage?: string;
  icon?: string;
}

export interface UiStateStructure {
  isLoading: boolean;
  modalData: ModalDataStructure;
}
