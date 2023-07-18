import { createContext, useContext, useReducer, useState } from "react";
import { useBookDetails } from "./getBookDetails";

export const EditBook = createContext({});

export const useEditBook = () => {
  return useContext(EditBook);
};

export const EditBookProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const bookContext = useBookDetails();
  const reducer = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.payload };
      case "imgSrc":
        return { ...state, imgSrc: action.payload };
      case "author":
        return { ...state, author: action.payload };
      case "yearReleased":
        return { ...state, yearReleased: action.payload };
      case "totalPages":
        return { ...state, totalPages: action.payload };
      case "group":
        return { ...state, group: action.payload };
      case "clear":
        return { ...book };
      case "init":
        return { ...bookContext.book };
      default:
        throw new Error("unexpected action");
    }
  };

  const book = {
    imgSrc: "",
    title: "",
    author: "",
    yearReleased: "",
    totalPages: "",
    group: "",
  };

  const [newBook, dispatch] = useReducer(reducer, book);
  const editBookValue = {
    book,
    dispatch,
    newBook,
    loading,
    setLoading,
  };

  return (
    <EditBook.Provider value={editBookValue}>{children}</EditBook.Provider>
  );
};
