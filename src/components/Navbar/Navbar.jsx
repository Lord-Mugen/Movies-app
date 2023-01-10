import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const icon = <Icon icon="material-symbols:menu-rounded" />;

  return (
    <header>
      <nav className="c-navbar">
        <input
          className="c-navbar__search"
          type="search"
          placeholder="Seach for movies..."
          name="search"
        />
        <ul className={`c-navbar__nav-menu ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="/" className="c-navbar__a">
              Home
            </Link>
          </li>
          <li>
            <Link to="/popular" className="c-navbar__a">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/top-rated" className="c-navbar__a">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="c-navbar__a">
              Upcoming
            </Link>
          </li>
        </ul>
        <div className="c-navbar__menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={`c-navbar__fas fa-bars ${isOpen ? "open" : ""}`}>
            {
              <Icon
                icon="material-symbols:menu-rounded"
                color="white"
                width="35"
                height="35"
              />
            }
          </i>
        </div>
      </nav>
    </header>
  );
};
{
  /* <header>
      <nav className="c-navbar">
        <input
          className="c-navbar__search"
          type="search"
          placeholder="Seach for movies..."
          name="search"
        />
        <ul className="c-navbar__list">
          <li className="c-navbar__link">
            <Link to={"/"} className="c-navbar__a">
              Home
            </Link>
          </li>
          <li className="c-navbar__link">
            <Link to={"/popular"} className="c-navbar__a">
              Popular
            </Link>
          </li>
          <li className="c-navbar__link">
            <Link to={"/top-rated"} className="c-navbar__a">
              Top Rated
            </Link>
          </li>
          <li className="c-navbar__link">
            <Link to={"/upcoming"} className="c-navbar__a">
              Upcoming
            </Link>
          </li>
        </ul>
      </nav>
    </header> */
}
export default Navbar;
