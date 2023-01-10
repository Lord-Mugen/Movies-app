import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div>
      <nav className="c-navbar">
        <input type="search" placeholder="Seach for movies" name="search" />
        <input type="checkbox" id="check" />
        <label for="check" className="c-navbar__checkbtn">
          <Icon icon="material-symbols:menu-rounded" />
        </label>
        <ul className="c-navbar__list">
          <li className="c-navbar__link">
            <a href="#">Popular</a>
          </li>
          <li className="c-navbar__link">
            <a href="#">Top Rated</a>
          </li>
          <li className="c-navbar__link">
            <a href="#">Upcoming</a>
          </li>
        </ul>
      </nav>

      {/* <nav className="c-navbar">
        <input
          className="c-navbar__input"
          type="search"
          placeholder="Search for movies"
        />

        <ul className="c-navbar__list">
          <li className="c-navbar__link">
            <a href="">Popular</a>
          </li>
          <li className="c-navbar__link">
            <a href="">Top Rated</a>
          </li>
          <li className="c-navbar__link">
            <a href="">Upcoming</a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
