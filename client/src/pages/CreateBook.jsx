import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";


const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("https://bookstore-api-server-swart.vercel.app/api/v1/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('"An error happened. Please check console"', { variant: "error" });
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className=" flex flex-col justify-center items-center">
        <h1 className="text-3xl my-4">Create Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="m-4 flex flex-col border-2 border-blue-600 rounded-xl w-fit p-4">
        <BackButton />
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <button className="p-3 bg-blue-600 text-white text-lg font-bold m-8" onClick={handleSaveBook}>
            Save
          </button>
        </div>
        </div>
      </div>
      ;
    </>
  );
};

export default CreateBook;
