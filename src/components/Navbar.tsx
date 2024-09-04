import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav
      className="classy"
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <div className="anchor-wrapper">
        <Link to="/home" className="nav-anchor">
          <div>Home / About</div>
        </Link>
      </div>
      <div className="anchor-wrapper">
        <Link to="/bands" className="nav-anchor">
          Bands
        </Link>
      </div>
      <div className="anchor-wrapper">
        <Link to="/events" className="nav-anchor">
          Events
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
