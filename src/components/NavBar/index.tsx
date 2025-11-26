import { NAV_LINKS } from "../../constants/nav";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Logo" />

        <ul>
          {NAV_LINKS.map(({ label, url }, index) => (
            <li key={index}>
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
