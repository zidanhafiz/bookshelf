import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import ModalBookDetails from "./ModalBookDetails";
import { EditBookProvider } from "../context/EditBook";
import ModalLoadingEdit from "./ModalLoadingEdit";
import { useBooksFilter } from "../context/BooksFilter";
import SignInGoogleBtn from "./SignInGoogleBtn";
import { useAuthentication } from "../context/Authentication";
import { auth } from "../firebase-config";

const LoginSuccess = () => {
  return (
    <p className="w-full self-center text-center">
      Login Success! Now you can add your book.
    </p>
  );
};

function Bookshelf() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(14);
  const filterContext = useBooksFilter();
  const { user, getUserTemp, createUser, userTemp } = useAuthentication();
  const books = [];

  const getBooks = () => {
    if (filterContext.books != null) {
      filterContext.books.map((book) => {
        return books.push(<BookCard book={book} key={book.id} />);
      });
    }
  };
  getBooks();

  const lastPostIndex = currentPage * postPerPage;
  const fistPostIndex = lastPostIndex - postPerPage;
  const currentPost = books.slice(fistPostIndex, lastPostIndex);

  useEffect(() => {
    if (userTemp !== null) {
      createUser();
    }
  }, [userTemp]);

  useEffect(() => {
    filterContext.showAllBooks();
    getUserTemp();
  }, [auth.currentUser]);

  return (
    <div className="flex flex-col content-end w-full">
      <EditBookProvider>
        <ModalLoadingEdit />
        <ModalBookDetails />
        <div className="px-5 py-3 border-2 border-gray-200 rounded-xl flex flex-row items-start sm:justify-normal justify-center flex-wrap gap-3 overflow-scroll h-108 bg-slate-50">
          {user == null ? <SignInGoogleBtn /> : currentPost}
          {user !== null && filterContext.isLogin && <LoginSuccess />}
        </div>
        <Pagination
          totalPost={books.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </EditBookProvider>
    </div>
  );
}

export default Bookshelf;
