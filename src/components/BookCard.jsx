import { useBookDetails } from "../context/getBookDetails";

function BookCard({ book }) {
  const context = useBookDetails();
  return (
    <button
      className="card card-compact w-32 bg-neutral text-neutral-content shadow-xl"
      onClick={() => {
        context.setBook(book);
        window.my_modal_2.showModal();
      }}
    >
      <figure className="w-32 h-28">
        <img src={book.imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body text-center h-16">
        <p className="text-xs text-ellipsis overflow-hidden">{book.title}</p>
      </div>
    </button>
  );
}

export default BookCard;
