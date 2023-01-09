const Navbar = () => {
  return (
    <nav className="c-navbar">
      <input
        className="c-navbar__input"
        type="search"
        placeholder="Search for movies..."
      />
      <ul className="c-navbar__list">
        <li className="c-navbar__link">Popular</li>
        <li className="c-navbar__link">Top Rated</li>
        <li className="c-navbar__link">Upcoming</li>
      </ul>
    </nav>
  );
};

export default Navbar;
