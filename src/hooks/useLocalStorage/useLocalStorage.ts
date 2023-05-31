const useLocalStorage = () => {
  const setLocalStorageItem = (
    localStorageKey: string,
    localStorasgeItem: string
  ): void => {
    localStorage.setItem(localStorageKey, localStorasgeItem);
  };

  const getLocalStorageItem = (localStorageKey: string): string | null => {
    const token = localStorage.getItem(localStorageKey);
    return token;
  };

  return { setLocalStorageItem, getLocalStorageItem };
};

export default useLocalStorage;
