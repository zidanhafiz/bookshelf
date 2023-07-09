import "./App.css";
import Navbar from "./components/Navbar";
import FilterMenu from "./components/FilterMenu";
import Bookshelf from "./components/Bookshelf";
import SideHero from "./components/SideHero";
import { BookDetailsProvider } from "./context/getBookDetails";

function App() {
  return (
    <div className="px-3 py-1 lg:py-5 lg:px-12 xl:px-24 max-h-screen">
      <div className="heading my-5 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Bookshelf</h1>
        <p className="text-xs sm:text-base mt-5">
          Add your watchlist book or mark the book you read
        </p>
      </div>
      <Navbar />
      <BookDetailsProvider>
        <div className="flex flex-col sm:flex-row sm:items-stretch gap-5 items-center mt-1 sm:mt-7 w-full">
          <FilterMenu />
          <Bookshelf />
          <SideHero />
        </div>
      </BookDetailsProvider>
    </div>
  );
}

export default App;
