import BookCard from "./BookCard";
import PropTypes from "prop-types";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

// {showModal && <BookModal book={book} onClose={() => setShowModal(!showModal)} />}
export default BooksCard;

BooksCard.propTypes = {
  books: PropTypes.array,
};
