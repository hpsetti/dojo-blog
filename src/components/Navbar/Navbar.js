import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__header-container d-flex justify-space-between w-100 p-25">
        <div className="header-container">
          <h3 className="header-1 primary-color header-logo">Dojo Blog</h3>
        </div>
        <div className="header-navigation">
          <ul className="header-nav d-flex justify-space-between">
            <li className="nav-home">
              <button className="btn-secondary fw-200">Home</button>
            </li>
            <li className="nav-newBlog">
              <button className="btn-primary fw-200">New Blog</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
