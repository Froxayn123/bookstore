import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {HiArrowDownCircle} from "react-icons/hi2"
import Navbar from "../components/Navbar";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-api-server-swart.vercel.app/api/v1/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div>
      <Navbar/>
        <div className="flex flex-col justify-center items-center">
        <h1 className=" text-3xl my-4">Show Book</h1>
        {loading ? <HiArrowDownCircle className="w-12 h-12 animate-bounce text-blue-600"/> : ""}
          <div className="m-4 flex flex-col border-2 border-blue-600 rounded-xl w-fit p-4">
        <BackButton />
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
          </div>
          </div>
      </div>
      ;
    </>
  );
};

export default ShowBook;
