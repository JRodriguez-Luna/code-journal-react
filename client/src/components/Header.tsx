import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div style={{ backgroundColor: 'white', minWidth: '205vh' }}>
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '30px',
            fontSize: '20px',
            marginTop: '0',
            backgroundColor: '#572C81ff',
            listStyleType: 'none',
            paddingBottom: '20px',
          }}>
          <li style={{ marginTop: '15px', marginLeft: '325px' }}>
            <Link
              to="/"
              style={{
                color: 'white',
              }}>
              Code Journal
            </Link>
          </li>
          <li style={{ marginTop: '15px' }}>
            <Link
              to="/Entries"
              style={{
                color: 'white',
              }}>
              Entries
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
