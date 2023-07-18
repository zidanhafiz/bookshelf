import { createContext, useContext, useState } from "react";

export const BookDetails = createContext({});

export const useBookDetails = () => {
  return useContext(BookDetails);
};

export const BookDetailsProvider = ({ children }) => {
  const [book, setBook] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const BookDetailsValue = {
    book,
    setBook,
    title,
    setTitle,
    author,
    setAuthor,
  };

  return (
    <BookDetails.Provider value={BookDetailsValue}>
      {children}
    </BookDetails.Provider>
  );
};
