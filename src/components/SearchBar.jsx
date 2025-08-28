import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ query, setQuery, searchBooks }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length > 0) {
      searchBooks();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by book title..."
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && searchBooks()}
        className={styles.searchInput}
      />
      <button onClick={searchBooks} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
