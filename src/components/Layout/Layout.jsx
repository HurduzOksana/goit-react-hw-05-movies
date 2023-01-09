import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

// const navItems = [
//   { href: '/', text: 'Home' },
//   { href: '/movies', text: 'Movies' },
// ];

// export const Layout = () => {
//   return (
//     <>
//       <header>
//         {navItems.map(({ href, text }) => (
//           <Link to={href} key={href}>
//             {text}
//           </Link>
//         ))}
//       </header>
//       <Outlet />
//       <footer>2023</footer>
//     </>
//   );
// };

const Layout = () => {
  return (
    <>
      <header className={styles.Header}>
        <NavLink className={styles.Nav} to="/">
          Home
        </NavLink>
        <NavLink className={styles.Nav} to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
