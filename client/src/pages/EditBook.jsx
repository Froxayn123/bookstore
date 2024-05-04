import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { HiArrowDownCircle } from "react-icons/hi2";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-api-server-swart.vercel.app/api/v1/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened, Please check console");
        console.log(err);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`https://bookstore-api-server-swart.vercel.app/api/v1/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
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
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-3xl my-4">Edit Book</h1>
          {loading ? <HiArrowDownCircle className="w-12 h-12 animate-bounce text-blue-600" /> : ""}
          <div className="m-4 flex flex-col border-2 border-blue-600 rounded-xl w-fit p-4">
            <BackButton />
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full focus:outline-blue-600" />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Author</label>
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full focus:outline-blue-600" />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Publish Year</label>
              <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full focus:outline-blue-600" />
            </div>
            <button className="p-4 bg-blue-600 m-8 text-white" onClick={handleEditBook}>
              Save
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default EditBook;
