import React from "react";
import styles from "./BookList.module.css";

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p className={styles.noResults}>No books to display</p>;
  }

  return (
    <div className={styles.bookGrid}>
      {books.map((book, index) => (
        <div key={index} className={styles.bookCard}>
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className={styles.bookImage}
            />
          ) : (
            <div className={styles.noImage}>No Image</div>
          )}
          <div className={styles.bookInfo}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            {book.author_name && (
              <p className={styles.bookAuthor}>by {book.author_name.join(", ")}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
