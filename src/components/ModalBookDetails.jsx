import { useBookDetails } from "../context/getBookDetails";
import ModalEditBook from "./ModalEditBook";
import { useEditBook } from "../context/EditBook";
import ModalDeleteConfirm from "./ModalDeleteBook";
import { useCapitalize } from "../context/Capitalize";

function ModalBookDetails() {
  const context = useBookDetails();
  const editContext = useEditBook();
  const { capitalize } = useCapitalize();

  return (
    <div>
      <ModalEditBook />
      <ModalDeleteConfirm />
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box bg-base-100">
          <h3 className="font-bold text-lg text-center">BOOK DETAILS</h3>
          <div className="flex flex-col md:flex-row md:items-start gap-3 mt-5 items-stretch">
            <img
              src={context.book.imgSrc}
              alt="book's image"
              className="w-32 self-center"
            />
            <table className="table-auto border-separate border-spacing-2">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>:</td>
                  <td>{context.title}</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>:</td>
                  <td>{context.author}</td>
                </tr>
                <tr>
                  <td>Year Released</td>
                  <td>:</td>
                  <td>{context.book.yearReleased}</td>
                </tr>
                <tr>
                  <td>Total Pages</td>
                  <td>:</td>
                  <td>{context.book.totalPages}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>:</td>
                  <td>{context.book.group}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 sm:text-start text-center">
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={() => {
                window.delete_modal.showModal();
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-outline ml-2"
              onClick={() => {
                window.edit_modal.showModal();
                editContext.dispatch({ type: "init" });
              }}
            >
              Edit
            </button>
          </div>
          <div className="modal-action">
            <button className="btn btn-sm">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ModalBookDetails;
