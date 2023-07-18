function ModalLoginSuccess() {
  return (
    <div>
      <dialog id="login_success_modal" className="modal">
        <form method="dialog" className="modal-box">
          <p className="py-4">Login Success! you can add your book now</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ModalLoginSuccess;
