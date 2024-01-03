import "./App.css";
import "./Components.css";
import Navbar from "./components/Navbar/Navbar.js";
import Blogs from "./components/Blogs/Blogs.js";
function App() {
  const blogPosts = [
    {
      id: 1,
      title: "header 1",
      content: "content 1",
      author: "Mario",
    },
    {
      id: 2,
      title: "header 2",
      content: "content 2",
      author: "Yoshi",
    },
    {
      id: 3,
      title: "header 3",
      content: "content 3",
      author: "Mario",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <Blogs blogPosts={blogPosts} />
      </div>
    </div>
  );
}

export default App;
