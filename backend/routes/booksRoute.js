import express from 'express';
import { Book } from '../models/bookModel.js';

const router=express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear|| !req.body.notes) {
      return res
        .status(400)
        .send({ message: "Send all required fields:title,author,publishYear" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      notes:req.body.notes,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
//update based on id
router.put("/edit/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear|| !req.body.notes)
      return res.status(400).send({ message: "Send all required fields" });
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) return res.status(404).json({ messgae: "Book Not Found" });
    return res.status(200).json({ message: "Book updated successfully." });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
//delete a book
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result){
      return res.status(404).json({ message: "Book Not Found" });
    } 
    return res.status(200).send({ message: "Book deleted successfully." });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;