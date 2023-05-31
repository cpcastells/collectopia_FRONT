const useLocalStorage = () => {
  const setLocalStorageItem = (
    localStorageKey: string,
    localStorasgeItem: string
  ) => {
    localStorage.setItem(localStorageKey, localStorasgeItem);
  };

  return { setLocalStorageItem };
};

export default useLocalStorage;
