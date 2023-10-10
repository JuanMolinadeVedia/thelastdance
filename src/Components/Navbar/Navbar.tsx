import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="branding">
          <Link to={"/"}>
            <img src="data:image/png;base64,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" />
          </Link>
          <p>Zarpado ecommerce</p>
        </div>
        <div className="user">
          <p>Shop</p>
          <Link to={"/login"}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
          </Link>
        </div>
      </div>
    </>
  );
}

export { Navbar };
