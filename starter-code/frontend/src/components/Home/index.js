import { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { usertoken } from "../../App";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const user = useContext(usertoken);
  const navigate = useNavigate();

  //-------------get All Category-------------
  const [category, setCategory] = useState([]);

  const [userId, setUserId] = useState("");
  // console.log(category);
  // console.log(setCategory);
  // console.log(userId);
  // console.log(setUserId);

  //   console.log("Home L 12");
  const getAllcategory = () => {
    axios
      .get("http://localhost:5000/catogory", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        // console.log(results.data);
        setCategory(results.data.title);
        // console.log(results.data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //filter
  useEffect(() => {
    getAllcategory();
    getAllBooks();
  }, []);
  //-------------get All Books-------------
  const [books, setBooks] = useState([]);
  const getAllBooks = () => {
    axios
      .get("http://localhost:5000/books", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        // console.log(results.data);
        setBooks(results.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //-----------------------------------------------------------
  // make onClick for Specific category
  return (
    <div className="homepage">
      <div className="category">
        {category.map((categoryElem, index) => {
          // console.log(categoryElem);
          // to go to other component must use  LINK or useNavigate hook
          //to be able to use hook or Link must be imported
          return (
            <div>
              <Link to={`/category/${categoryElem._id}`}>
                
                {categoryElem.title}
              </Link>
              {/* <h2
                onClick={() => {
                  navigate("/category");
                }}
              >
                {categoryElem.title}
              </h2> */}
            </div>
          );
        })}
      </div>
      <div className="showBooks">
        {books.map((booksElem, index) => {
          //   console.log(booksElem);
          return (
            <div>
              {/* <img
                className="img"
                src={`${booksElem.image} `}
                alt="img not found"
              /> */}
              <Link to={`/bookInfo/${booksElem._id}`}>
                {
                  <img
                    className="img"
                    src={`${booksElem.image} `}
                    alt="img not found"
                  />
                }
              </Link>
              
              <h2>{booksElem.title} </h2>
              <h2>{booksElem.description} </h2>
              <h2>{booksElem.price} </h2>
              <h2>{booksElem.rating} </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

/*
      filter.getAllcategory((elem,i)=>{
        return(
          setCategory(results)
        )
      })
      */

      //addSeach
