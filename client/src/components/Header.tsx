import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="w-full h-16 bg-violet-600	flex justify-start ">
        <nav className='flex w-64 justify-between pl-10 text-white items-center'>
          <Link to="/" className='text-2xl font-semibold'>Code Journal</Link>
          <Link to="/entries">Entries</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
