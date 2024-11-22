import { Outlet, Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header>
      <nav className="navbar row">
        <ul className="column-full">
          <li>
            <Link to="/">Code Journal</Link>
          </li>
          <li>
            <Link to="/Entries">Entries</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
