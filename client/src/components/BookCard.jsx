import { AiOutlineEdit } from "react-icons/ai";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";
import { useState } from "react";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div key={book._id} className="w-[350px] p-4 m-4 flex flex-col space-y-4 border-2 rounded-lg relative hover:shadow-xl transition-all ease-in-out duration-100 border-blue-600">
      <div className="m-2 flex items-center space-x-8">
        <h4 className="text-gray-500">{book._id}</h4>
        <h2 className="px-4 py-1 font-bold rounded-md absolute end-0 top-0 bg-blue-600 text-white">{book.publishYear}</h2>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-x-2">
          <PiBookOpenTextLight className="text-2xl text-blue-600" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-blue-600 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <div>
          <BiShow className="text-3xl text-blue-800 hover:text-black transition-all ease-in-out duration-100 cursor-pointer" onClick={() => setShowModal(!showModal)} />
        </div>
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black transition-all ease-in-out duration-100" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-700 hover:text-black transition-all ease-in-out duration-100" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black transition-all ease-in-out duration-100" />
        </Link>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(!showModal)} />}
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.array,
};
