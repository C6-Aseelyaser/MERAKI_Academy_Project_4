const express = require("express");
const {createNewBook,getAllBooks,getBookByCategory,getBookById,updateBookById,deleteBookById,createComment,searchBooks} = require("../controllers/books");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
// create books router
const booksRouter = express.Router();
booksRouter.post("/",authentication,authorization("CREATE_BOOKS"),createNewBook); 
booksRouter.get("/",authentication,getAllBooks);
booksRouter.get("/search_1",authentication,getBookByCategory);
booksRouter.get("/search_2",getBookById);
booksRouter.put("/:id",authentication,authorization("UPDATE_BOOKS"),updateBookById);
booksRouter.delete("/:id",authentication,authorization("DELETE_BOOKS"),deleteBookById);
booksRouter.post("/:bookId/comments",authentication,authorization("CREATE_COMMENT"),createComment)
booksRouter.get("/searchbook",searchBooks) //~~>http://localhost:5000/books/searchbook

module.exports = booksRouter;






