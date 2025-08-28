import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"; // import global styles

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await res.json();
      if (data.docs.length === 0) {
        setError("No books found!");
      } else {
        setBooks(data.docs.slice(0, 10));
      }
    } catch (err) {
      setError("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <h1 className="heading">📚 Book Finder</h1>

        <SearchBar query={query} setQuery={setQuery} searchBooks={searchBooks} />

        {loading && <p className="loading">Searching...</p>}

        <ErrorMessage error={error} />

        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
