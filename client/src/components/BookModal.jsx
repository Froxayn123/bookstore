import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed -top-20 left-0 right-0 -bottom-20 bg-black bg-opacity-60 z-50 flex justify-center items-center" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="m-4 w-fit max-w-full bg-white rounded-xl p-6 flex flex-col relative">
        <AiOutlineClose className="absolute right-6 top-6 text-3xl text-blue-600 cursor-pointer" onClick={onClose} />
        <h2 className="w-fit px-4 py-1 bg-blue-600 text-white rounded-lg">{book.publishYear}</h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-blue-600 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-blue-600 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4 font-bold">Anything you want to show</p>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam minus sit sed culpa nam ratione numquam. Maiores facere explicabo tenetur mollitia vitae nesciunt laborum! Nobis a rerum explicabo eaque alias?
        </p>
      </div>
    </div>
  );
};

export default BookModal;

BookModal.propTypes = {
  book: PropTypes.object,
  onClose: PropTypes.func,
};
