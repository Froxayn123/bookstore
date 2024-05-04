import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {HiArrowDownCircle} from "react-icons/hi2"
import Navbar from "../components/Navbar";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-api-server-swart.vercel.app/api/v1/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });

        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error happened. Please check console", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <>
      <div>
      <Navbar/>
        <div className="flex flex-col justify-center items-center">
        <h1 className=" text-3xl my-4">Delete Book</h1>
        {loading ? <HiArrowDownCircle className="w-12 h-12 animate-bounce text-blue-600"/> : ""}
        <div className="m-4 flex flex-col border-2 border-blue-600 rounded-xl w-fit p-6 space-y-6">
          <BackButton/>
          <div className="flex flex-col justify-center items-center space-y-4">
          <h3 className="text-xl capitalize">Are you sure you want to delete this book?</h3>
          <button className="p-4 bg-red-600 text-white w-full" onClick={handleDeleteBook}>
            Yes, Delete it
          </button>
          </div>
        </div>
        </div>

      </div>
      ;
    </>
  );
};

export default DeleteBook;
