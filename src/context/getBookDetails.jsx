import { createContext, useContext, useState } from "react";

export const BookDetails = createContext({});

export const useBookDetails = () => {
  return useContext(BookDetails);
};

export const BookDetailsProvider = ({ children }) => {
  const [book, setBook] = useState({});

  // const getBookDetails = (book) => {
  //   setBook(book);
  // };

  const BookDetailsValue = {
    book,
    setBook,
    // getBookDetails,
  };

  return (
    <BookDetails.Provider value={BookDetailsValue}>
      {children}
    </BookDetails.Provider>
  );
};
