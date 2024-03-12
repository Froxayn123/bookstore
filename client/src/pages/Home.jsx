import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import BooksCard from "../components/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-api-server-kappa.vercel.app/api/v1/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Book List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? <Spinner /> : <BooksCard books={books} />}
      </div>
      ;
    </>
  );
};

export default Home;
