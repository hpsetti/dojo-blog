import useFetch from "./useFetch.js";
import "./App.css";
import "./Components.css";
import Navbar from "./components/Navbar/Navbar.js";
import Blogs from "./components/Blogs/Blogs.js";
import BlogDetails from "./components/Blogs/BlogDetails.js";
import Create from "./components/Create/Create.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div>
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blogs && <Blogs blogPosts={blogs} title="All blogs" />}
                {blogs && (
                  <Blogs
                    blogPosts={blogs.filter((blog) => blog.author === "Mario")}
                    title="Mario's blogs"
                  />
                )}
              </div>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
