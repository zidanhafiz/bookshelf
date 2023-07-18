import "./App.css";
import Navbar from "./components/Navbar";
import FilterMenu from "./components/FilterMenu";
import Bookshelf from "./components/Bookshelf";
import { BookDetailsProvider } from "./context/getBookDetails";
import { EditBookProvider } from "./context/EditBook";
import { BooksFilterProvider } from "./context/BooksFilter";
import { CapitalizeProvider } from "./context/Capitalize";
import { AuthenticationProvider } from "./context/Authentication";

function App() {
  return (
    <div className="px-3 py-1 lg:py-5 lg:px-12 xl:px-36 min-h-screen max-h-screen bg-gradient-to-br from-slate-50 via-violet-100 to-slate-50">
      <AuthenticationProvider>
        <CapitalizeProvider>
          <BooksFilterProvider>
            <EditBookProvider>
              <div className="heading my-5 text-center">
                <h1 className="text-4xl font-semibold sm:text-4xl font-heading">
                  Bookshelf
                </h1>
                <p className="text-xs sm:text-base mt-5">
                  Add your watchlist book or mark the book you read
                </p>
              </div>
              <Navbar />
              <BookDetailsProvider>
                <div className="flex flex-col sm:flex-row sm:items-stretch gap-5 items-center mt-1 sm:mt-7 w-full">
                  <FilterMenu />
                  <Bookshelf />
                </div>
              </BookDetailsProvider>
            </EditBookProvider>
          </BooksFilterProvider>
        </CapitalizeProvider>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
