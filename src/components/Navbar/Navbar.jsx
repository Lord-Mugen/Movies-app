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
            <a className="c-navbar__a" href="#">
              Popular
            </a>
          </li>
          <li className="c-navbar__link">
            <a className="c-navbar__a" href="#">
              Top Rated
            </a>
          </li>
          <li className="c-navbar__link">
            <a className="c-navbar__a" href="#">
              Upcoming
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
