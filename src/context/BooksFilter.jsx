import { createContext, useContext, useState } from "react";
import { db } from "../firebase-config";
import { query, where, onSnapshot, or, collection } from "firebase/firestore";
import { useAuthentication } from "./Authentication";

export const BooksFilter = createContext({});

export const useBooksFilter = () => {
  return useContext(BooksFilter);
};

export const BooksFilterProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [group, setGroup] = useState("All");
  const [search, setSearch] = useState("");
  const [name, setName] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const { user } = useAuthentication();
  const [users, setUsers] = useState([]);

  const getBooks = () => {
    const colRef = collection(db, "users", user?.uid, "books");
    onSnapshot(colRef, (snapshot) => {
      const booksRef = [];
      snapshot.docs.forEach((doc) => {
        booksRef.push({ ...doc.data(), id: doc.id });
        setBooks(booksRef);
        setGroup("All");
      });
    });
    if (isLogin) setIsLogin(false);
  };

  const showBooks = (filter) => {
    const colRef = collection(db, "users", user?.uid, "books");
    const q = query(colRef, where("group", "==", filter));
    onSnapshot(q, (snapshot) => {
      const booksRef = [];
      snapshot.docs.forEach((doc) => {
        booksRef.push({ ...doc.data(), id: doc.id });
        setBooks(booksRef);
        setGroup(filter);
      });
    });
    if (isLogin) setIsLogin(false);
  };

  const showAllBooks = async () => {
    if (user == null) {
      const colUser = collection(db, "users");
      onSnapshot(colUser, (snapshot) => {
        const usersRef = [];
        snapshot.docs.forEach((doc) => {
          usersRef.push({ ...doc.data(), id: doc.id });
          setUsers(usersRef);
        });
      });
      setIsLogin(true);
      return setBooks(null);
    }
    getBooks();
  };

  const showSearchBooks = () => {
    const colRef = collection(db, "users", user?.uid, "books");
    const q = query(
      colRef,
      // where("author", "==", search),
      // or(where("author", ">=", search)),
      (where("title", "==", search), or(where("title", ">=", search))),
    );
    onSnapshot(q, (snapshot) => {
      const booksRef = [];
      snapshot.docs.forEach((doc) => {
        booksRef.push({ ...doc.data(), id: doc.id });
        setBooks(booksRef);
        setGroup("All");
      });
    });
    if (isLogin) setIsLogin(false);
  };

  const booksFilterValue = {
    showBooks,
    showAllBooks,
    showSearchBooks,
    setSearch,
    search,
    setBooks,
    books,
    group,
    name,
    setName,
    isLogin,
  };
  return (
    <BooksFilter.Provider value={booksFilterValue}>
      {children}
    </BooksFilter.Provider>
  );
};
