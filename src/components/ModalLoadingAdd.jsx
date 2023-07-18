import { useEditBook } from "../context/EditBook";

const ModalLoadingAdd = () => {
  const context = useEditBook();
  return (
    <dialog id="modal_loading_add" className="modal">
      {context.loading ? (
        <form method="dialog" className="modal-box w-fit flex flex-row gap-5">
          <span className="loading loading-dots loading-md"></span>
          <p className="py-4">loading</p>
        </form>
      ) : (
        <form method="dialog" className="modal-box w-fit">
          <p className="py-4">New Book has been Added</p>
          <div className="modal-action">
            <button className="btn">close</button>
          </div>
        </form>
      )}
    </dialog>
  );
};

export default ModalLoadingAdd;
