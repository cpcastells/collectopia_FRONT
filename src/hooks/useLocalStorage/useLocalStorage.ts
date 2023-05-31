import { useCallback } from "react";

const useLocalStorage = () => {
  const setLocalStorageItem = (
    localStorageKey: string,
    localStorasgeItem: string
  ): void => {
    localStorage.setItem(localStorageKey, localStorasgeItem);
  };

  const getLocalStorageItem = useCallback(
    (localStorageKey: string): string | null => {
      const token = localStorage.getItem(localStorageKey);
      return token;
    },
    []
  );

  return { setLocalStorageItem, getLocalStorageItem };
};

export default useLocalStorage;
