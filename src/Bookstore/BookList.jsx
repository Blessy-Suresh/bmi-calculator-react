import React from "react";

function BookList({ books }) {
  return (
    <div className="book-list">
      <h3>Book Details</h3>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="book-card">
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
