import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
