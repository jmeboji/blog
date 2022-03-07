import { Link } from "react-router-dom";
import logo from "./bridge-logo-1.svg";

console.log(logo);
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} style={{ height: 540, width: 168 }} alt="Logo" />
      <div className="links">
        <Link to="/">Home</Link>

        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
