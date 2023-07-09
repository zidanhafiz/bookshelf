function Pagination({ totalPost, postPerPage, setCurrentPage, currentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="join mt-5 self-center sm:self-end">
      {pages.map((page) => {
        return (
          <input
            key={page}
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label={page}
            onChange={() => {
              setCurrentPage(page);
            }}
            checked={page === currentPage ? true : false}
          />
        );
      })}
    </div>
  );
}

export default Pagination;
