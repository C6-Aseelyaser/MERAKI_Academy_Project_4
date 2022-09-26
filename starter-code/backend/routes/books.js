const express = require("express");
const {createNewBook,getAllBooks,getBookByCategory} = require("../controllers/books");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
// create books router
const booksRouter = express.Router();
booksRouter.post("/",authentication,authorization("CREATE_BOOKS"), createNewBook); 
booksRouter.get("/",getAllBooks)
booksRouter.get("/search_1",getBookByCategory)
module.exports = booksRouter;





// NewBook,
// getAllBooks,
// getBookssByAuthor,
// getBookById,
// updateBookById,
// deleteBookById,
// deleteBookByAuthor,
// newComment
