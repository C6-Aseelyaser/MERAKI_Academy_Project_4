//here i want to show .. when the user click on specific category [history -business - religion - science - math ] it'll bring jsut the books who relative to this category
import "./style.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";

// first must make onClick for every specific category .. this onClick must put it on Home

function Category() {
  const user = useContext(usertoken);
  const { id } = useParams();
  // console.log(params)
  //   -------------get Books By Category-------------
  const [bookCategory, setBookCategory] = useState([]);
  const getBooksByCategory = () => {
    axios
      .get(`http://localhost:5000/books/search_1?category=${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        console.log(results)
        setBookCategory(results.data.books);
      })
      .catch((err)=>{
        console.log(err);
      })
  };
  useEffect(() => {
    getBooksByCategory();
   
  }, []);



  //------------- return -------------
  return (
    <div className="category">
      <div>
        {bookCategory.map((cateElem, index) => {
          //   console.log(categoryElem);
          return (
            <div>
                <Link to {`${element._id}>{element.image}`}></Link>
              <img
                className="img"
                src={`${cateElem.image} `}
                alt="img not found"
              />
              <h2>{cateElem.title} </h2>
              <h2>{cateElem.description} </h2>
              <h2>{cateElem.price} </h2>
              <h2>{cateElem.rating} </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
//1. Link to on image
//2.Routes + app.js  /bookInfo
//3. on bookInfo comp. import Link 
//4.