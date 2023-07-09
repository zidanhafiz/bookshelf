import ModalAddBook from "./ModalAddBook";

function AddBookBtn({ join }) {
  return (
    <button
      className={`btn btn-sm btn-primary rounded-box ${join}`}
      onClick={() => window.my_modal_1.showModal()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        fill="#fff"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
      <span>Add Book</span>
    </button>
  );
}

function FilterMenu() {
  return (
    <div className="flex flex-col sm:w-56 gap-5">
      <ModalAddBook />
      <div className="join sm:hidden w-full">
        <AddBookBtn join={"join-item"} />
        <button className="btn btn-sm btn-neutral rounded-box join-item dropdown dropdown-end z-10">
          <label>Filter</label>
          <ul
            tabIndex={10}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-base-content rounded-box w-52"
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Finished</a>
            </li>
            <li>
              <a>Unfinished</a>
            </li>
            <li>
              <a>Watchlist</a>
            </li>
            <li>
              <a>Read Now</a>
            </li>
          </ul>
        </button>
      </div>
      <div className="hidden sm:flex flex-col gap-5 ">
        <AddBookBtn />
        <ul className="menu bg-base-200 h-max rounded-box">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Finished</a>
          </li>
          <li>
            <a>Unfinished</a>
          </li>
          <li>
            <a>Watchlist</a>
          </li>
          <li className="list-item md:hidden">
            <a>Read Now</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterMenu;
