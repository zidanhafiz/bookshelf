function SideHero() {
  return (
    <div className="hidden border-2 border-gray-200 rounded-xl w-5/12 lg:w-3/14 py-5 px-2 md:flex flex-col items-center gap-5">
      <h1 className="bg-neutral text-neutral-content px-5 py-1 rounded-box">
        Read Now
      </h1>
      <img
        src="https://books.google.co.id/books/content?id=S0ZNe2iqM54C&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0B_mUEro8jwJ28suZfAqrsyrzWfw&w=1280"
        className="mt-3 w-28 border-4 border-red-300"
      />
      <div className="text-sm">
        <table className="table-auto border-separate border-spacing-x-5 mt-3">
          <tbody>
            <tr>
              <td>Title</td>
              <td>: </td>
            </tr>
            <tr>
              <td>Author</td>
              <td>: Ijichi Nijika</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>: 1975</td>
            </tr>
            <tr>
              <td>Total Pages</td>
              <td>: 304</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SideHero;
