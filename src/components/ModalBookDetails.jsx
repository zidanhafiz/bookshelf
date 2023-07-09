import { useBookDetails } from "../context/getBookDetails";

function ModalBookDetails() {
  const context = useBookDetails();
  return (
    <div>
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
                  <td>: {context.book.title}</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>: {context.book.author}</td>
                </tr>
                <tr>
                  <td>Year Released</td>
                  <td>: {context.book.yearReleased}</td>
                </tr>
                <tr>
                  <td>Total Pages</td>
                  <td>: {context.book.totalPages}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>: {context.book.group}</td>
                </tr>
              </tbody>
            </table>
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
