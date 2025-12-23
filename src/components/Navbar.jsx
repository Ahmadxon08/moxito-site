import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo of the site" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
