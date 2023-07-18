import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEditBook } from "../context/EditBook";
import { useAuthentication } from "../context/Authentication";
import { useBookDetails } from "../context/getBookDetails";

function ModalEditBook() {
  const editContext = useEditBook();
  const { user } = useAuthentication();
  const { book } = useBookDetails();

  const updateBook = () => {
    editContext.setLoading(true);
    window.modal_loading_edit.showModal();
    const docRef = doc(db, "users", user?.uid, "books", book.id);
    updateDoc(docRef, {
      imgSrc: editContext.newBook.imgSrc,
      title: editContext.newBook.title.toLowerCase(),
      author: editContext.newBook.author.toLowerCase(),
      yearReleased: editContext.newBook.yearReleased,
      totalPages: editContext.newBook.totalPages,
      group: editContext.newBook.group,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        editContext.setLoading(false);
      })
      .catch((e) => {
        editContext.setLoading(false);
        console.log("Error adding document", e);
      });
  };

  return (
    <div>
      <dialog id="edit_modal" className="modal">
        <form method="dialog" className="modal-box bg-base-200">
          <h3 className="font-bold text-lg text-center">EDIT BOOK</h3>
          <div className="flex flex-col gap-3 mt-5 items-stretch">
            <label className="text-sm">Book's Image :</label>
            <input
              type="text"
              className="input input-bordered input-sm w-full"
              placeholder="Image's url here"
              name="book-image"
              value={editContext.newBook.imgSrc}
              onChange={(e) => {
                editContext.dispatch({
                  type: "imgSrc",
                  payload: e.target.value,
                });
              }}
            />
            <label className="text-sm">Title :</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full"
              name="title"
              value={editContext.newBook.title}
              onChange={(e) => {
                editContext.dispatch({
                  type: "title",
                  payload: e.target.value,
                });
              }}
            />
            <label className="text-sm">Author :</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
              name="author"
              value={editContext.newBook.author}
              onChange={(e) => {
                editContext.dispatch({
                  type: "author",
                  payload: e.target.value,
                });
              }}
            />
            <label className="text-sm">Year Released :</label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
              name="year-realeased"
              value={editContext.newBook.yearReleased}
              onChange={(e) => {
                editContext.dispatch({
                  type: "yearReleased",
                  payload: e.target.value,
                });
              }}
            />
            <label className="text-sm">Total Pages :</label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
              name="total-pages"
              value={editContext.newBook.totalPages}
              onChange={(e) => {
                editContext.dispatch({
                  type: "totalPages",
                  payload: e.target.value,
                });
              }}
            />
            <label className="text-sm">Group :</label>
            <select
              className="select select-bordered select-sm w-full"
              value={editContext.newBook.group}
              onChange={(e) => {
                editContext.dispatch({
                  type: "group",
                  payload: e.target.value,
                });
              }}
            >
              <option>Finished</option>
              <option>Unfinished</option>
              <option>Watchlist</option>
            </select>
          </div>
          <div className="modal-action">
            <button className="btn btn-sm">Cancel</button>
            <button className="btn btn-sm btn-primary" onClick={updateBook}>
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ModalEditBook;
