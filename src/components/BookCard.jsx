import { useCapitalize } from "../context/Capitalize";
import { useBookDetails } from "../context/getBookDetails";

function BookCard({ book }) {
  const context = useBookDetails();
  const { capitalize } = useCapitalize();
  const title = capitalize(book.title);
  const author = capitalize(book.author);

  return (
    <button
      className="card card-compact w-32 bg-neutral text-neutral-content shadow-xl"
      onClick={() => {
        context.setBook(book);
        context.setTitle(title);
        context.setAuthor(author);
        window.my_modal_2.showModal();
      }}
    >
      <figure className="w-32 h-28">
        <img src={book.imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body text-center h-16">
        <p className="text-xs text-ellipsis overflow-hidden">
          {capitalize(book.title)}
        </p>
      </div>
    </button>
  );
}

export default BookCard;
