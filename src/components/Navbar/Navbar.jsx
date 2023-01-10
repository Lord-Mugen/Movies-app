import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="c-navbar">
        <input
          className="c-navbar__search"
          type="search"
          placeholder="Seach for movies..."
          name="search"
        />
        <ul className="c-navbar__list">
          <li className="c-navbar__link">
            <Link to={"/popular"}>
              <p className="c-navbar__a">Popular</p>
            </Link>
          </li>
          <li className="c-navbar__link">
            <Link to={"/top-rated"}>
              <p className="c-navbar__a">Top Rated</p>
            </Link>
          </li>
          <li className="c-navbar__link">
            <Link to={"/upcoming"}>
              <p className="c-navbar__a">Upcoming</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
