import { signOut } from "firebase/auth";
import { useBooksFilter } from "../context/BooksFilter";
import { auth } from "../firebase-config";
import { useAuthentication } from "../context/Authentication";

function Navbar() {
  const { showSearchBooks, setSearch } = useBooksFilter();
  const { setIsLogin, user } = useAuthentication();

  const logoutHandle = () => {
    signOut(auth)
      .then(() => {
        setIsLogin(false);
        console.log("log out success");
      })
      .catch((err) => {
        setIsLogin(false);
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-slate-50 rounded-box shadow-lg px-7">
      <div className="navbar-start w-full sm:w-1/2">
        <div className="form-control-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showSearchBooks();
            }}
          >
            <input
              type="text"
              placeholder="Search Book"
              className="input input-bordered input-sm w-36 md:w-full max-w-full sm:max-w-xs bg-gray-100"
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
            />
          </form>
        </div>
      </div>
      <div className="navbar-end">
        <p className="mr-3 text-sm font-semibold">{user?.displayName}</p>
        <div className="dropdown dropdown-end z-20">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <form onSubmit={logoutHandle}>
              <li>
                <button type="submit" className="w-full">
                  Logout
                </button>
              </li>
            </form>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
