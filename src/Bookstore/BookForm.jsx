import React, { useState } from "react";

function BookForm({ addBook }) {
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    price: ""
  });
 
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.isbn || !book.title || !book.author || !book.price) {
      setError("All fields are required!");
      return;
    }

    addBook(book);
    setBook({ isbn: "", title: "", author: "", price: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={book.isbn}
        onChange={handleChange}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={book.price}
        onChange={handleChange}
      />

      <button type="submit">Add Book</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default BookForm;
