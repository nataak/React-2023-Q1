import { NavLink, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="wrap">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">Copyright 2023</footer>
    </div>
  );
}

export default AppLayout;
