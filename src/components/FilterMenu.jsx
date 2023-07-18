import { useState } from "react";
import { useBooksFilter } from "../context/BooksFilter";
import ModalAddBook from "./ModalAddBook";
import ModalLoadingAdd from "./ModalLoadingAdd";
import { useAuthentication } from "../context/Authentication";

function AddBookBtn({ join }) {
  const { user } = useAuthentication();
  return (
    <button
      className={`btn btn-sm btn-primary rounded-box ${join}`}
      onClick={() => {
        if (user !== null) return window.my_modal_1.showModal();
        else return alert("You must login first!");
      }}
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
  const context = useBooksFilter();
  const [group, setGroup] = useState("All");
  const list = [
    {
      name: "All",
    },
    {
      name: "Finished",
    },
    {
      name: "Unfinished",
    },
    {
      name: "Watchlist",
    },
  ];
  return (
    <div className="flex flex-col sm:w-56 gap-5">
      <ModalLoadingAdd />
      <ModalAddBook />
      <div className="join sm:hidden w-full">
        <AddBookBtn join={"join-item"} />
        <button className="btn btn-sm btn-neutral rounded-box join-item dropdown dropdown-end z-10">
          <label>Filter</label>
          <ul
            tabIndex={10}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-base-content rounded-box w-52"
          >
            {list.map((li) => {
              return (
                <li key={li.name}>
                  <a
                    onClick={() => {
                      if (li.name == "All") {
                        setGroup(li.name);
                        return context.showAllBooks();
                      }
                      setGroup(li.name);
                      return context.showBooks(li.name);
                    }}
                    className={context.group == li.name ? "active" : undefined}
                  >
                    {li.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </button>
      </div>
      <div className="hidden sm:flex flex-col gap-5 ">
        <AddBookBtn />
        <ul className="menu bg-slate-50 h-max rounded-box">
          {list.map((li) => {
            return (
              <li key={li.name}>
                <a
                  onClick={() => {
                    if (li.name == "All") {
                      setGroup(li.name);
                      return context.showAllBooks();
                    }
                    setGroup(li.name);
                    return context.showBooks(li.name);
                  }}
                  className={context.group == li.name ? "active" : undefined}
                >
                  {li.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FilterMenu;
