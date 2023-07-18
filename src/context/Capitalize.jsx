import { createContext, useContext } from "react";

const Capitalize = createContext({});

export const useCapitalize = () => {
  return useContext(Capitalize);
};

export const CapitalizeProvider = ({ children }) => {
  const capitalize = (word) => {
    const str = word;
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
  };
  const capitalizeValue = {
    capitalize,
  };
  return (
    <Capitalize.Provider value={capitalizeValue}>
      {children}
    </Capitalize.Provider>
  );
};
