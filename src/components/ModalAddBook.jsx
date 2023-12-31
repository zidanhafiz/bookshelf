import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useReducer } from "react";
import { useEditBook } from "../context/EditBook";
import { db } from "../firebase-config";
import { useAuthentication } from "../context/Authentication";

const book = {
  imgSrc: "",
  title: "",
  author: "",
  yearReleased: "",
  totalPages: "",
  group: "Unfinished",
};

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
    default:
      throw new Error("unexpected action");
  }
};

function ModalAddBook() {
  const [newBook, dispatch] = useReducer(reducer, book);
  const editContext = useEditBook();
  const { user } = useAuthentication();

  const addNewBook = async () => {
    editContext.setLoading(true);
    window.modal_loading_add.showModal();
    const colRef = collection(db, "users", user?.uid, "books");
    await addDoc(colRef, {
      imgSrc: newBook.imgSrc,
      title: newBook.title.toLowerCase(),
      author: newBook.author.toLowerCase(),
      yearReleased: newBook.yearReleased,
      totalPages: newBook.totalPages,
      group: newBook.group,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        editContext.setLoading(false);
        clearForm();
      })
      .catch((err) => {
        clearForm();
        editContext.setLoading(false);
        console.log("Error adding document", err);
      });
  };

  const clearForm = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box bg-base-200">
          <h3 className="font-bold text-lg text-center">ADD NEW BOOK</h3>
          <div className="flex flex-col gap-3 mt-5 items-stretch">
            <label className="text-sm">Book's Image :</label>
            <input
              type="text"
              className="input input-bordered input-sm w-full"
              placeholder="Image's url here"
              name="book-image"
              value={newBook.imgSrc}
              onChange={(e) => {
                dispatch({ type: "imgSrc", payload: e.target.value });
              }}
            />
            <label className="text-sm">Title :</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full"
              name="title"
              value={newBook.title}
              onChange={(e) => {
                dispatch({ type: "title", payload: e.target.value });
              }}
            />
            <label className="text-sm">Author :</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
              name="author"
              value={newBook.author}
              onChange={(e) => {
                dispatch({ type: "author", payload: e.target.value });
              }}
            />
            <label className="text-sm">Year Released :</label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
              name="year-realeased"
              value={newBook.yearReleased}
              onChange={(e) => {
                dispatch({ type: "yearReleased", payload: e.target.value });
              }}
            />
            <label className="text-sm">Total Pages :</label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
              name="total-pages"
              value={newBook.totalPages}
              onChange={(e) => {
                dispatch({ type: "totalPages", payload: e.target.value });
              }}
            />
            <label className="text-sm">Group :</label>
            <select
              className="select select-bordered select-sm w-full"
              value={newBook.group}
              onChange={(e) => {
                dispatch({ type: "group", payload: e.target.value });
              }}
            >
              <option>Finished</option>
              <option>Unfinished</option>
              <option>Watchlist</option>
            </select>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm">Cancel</button>
            <button className="btn btn-sm btn-primary" onClick={addNewBook}>
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ModalAddBook;
