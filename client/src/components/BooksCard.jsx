import BookCard from "./BookCard";
import PropTypes from "prop-types";

const BooksCard = ({ books, children }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
      {children}
    </div>
  );
};

// {showModal && <BookModal book={book} onClose={() => setShowModal(!showModal)} />}
export default BooksCard;

BooksCard.propTypes = {
  books: PropTypes.array,
  children: PropTypes.object,
};
