import { useState } from "react";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import ModalBookDetails from "./ModalBookDetails";
import { colRef } from "../firebase-config";
import { onSnapshot } from "firebase/firestore";

function Bookshelf() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [books, setBooks] = useState([]);

  const books2 = [];
  for (let i = 0; i <= 50; i++) {
    books2.push(<BookCard index={i} key={i} />);
  }

  const lastPostIndex = currentPage * postPerPage;
  const fistPostIndex = lastPostIndex - postPerPage;
  const currentPost = books.slice(fistPostIndex, lastPostIndex);

  onSnapshot(colRef, (snapshot) => {
    const booksRef = [];
    snapshot.docs.forEach((doc) => {
      booksRef.push({ ...doc.data(), id: doc.id });
      setBooks(booksRef);
    });
  });

  return (
    <div className="flex flex-col content-end w-full">
      <ModalBookDetails />
      <div className="p-3 border-2 border-gray-200 rounded-xl flex flex-row items-start sm:justify-normal justify-center flex-wrap gap-3 overflow-scroll h-108">
        {/* {currentPost} */}
        {books.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
      {/* <Pagination */}
      {/*   totalPost={books.length} */}
      {/*   postPerPage={postPerPage} */}
      {/*   setCurrentPage={setCurrentPage} */}
      {/*   currentPage={currentPage} */}
      {/* /> */}
    </div>
  );
}

export default Bookshelf;
