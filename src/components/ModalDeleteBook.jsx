import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useBookDetails } from "../context/getBookDetails";
import { useAuthentication } from "../context/Authentication";

function ModalDeleteConfirm() {
  const { book } = useBookDetails();
  const { user } = useAuthentication();

  const deleteDocument = () => {
    const docRef = doc(db, "users", user?.uid, "books", book.id);
    deleteDoc(docRef);
  };
  return (
    <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Warning!</h3>
        <p className="py-4">Are you sure wanna delete it?</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Cancel</button>
          <button className="btn btn-error" onClick={deleteDocument}>
            Yes, delete it
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default ModalDeleteConfirm;
