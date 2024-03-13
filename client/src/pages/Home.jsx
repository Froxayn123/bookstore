import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import BooksCard from "../components/BooksCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-api-server-swart.vercel.app/api/v1/books")
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
      <header>
        <Navbar>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-white text-4xl hover:text-black transition-all ease-in-out duration-100" />
          </Link>
        </Navbar>
      </header>
      <main>
        <div className="mt-10 flex flex-col justify-center items-center space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <input type="text" className="w-48" />
            <select></select>
            <select></select>
          </div>
          {loading ? <Spinner /> : <BooksCard books={books} />}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
