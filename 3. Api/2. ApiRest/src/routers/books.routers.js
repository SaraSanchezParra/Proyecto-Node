const {Router} = require ("express");
const router = Router();
const booksCtrl = require("../controller/books.controller");



router.get("/", booksCtrl.getStart);
router.get("/books", booksCtrl.getBook);
router.get("/books", booksCtrl.getAllBooks);
router.post("/books", booksCtrl.postBook);
router.put("/books", booksCtrl.putBook);
router.delete("/books", booksCtrl.deleteBook);

module.exports = router;