import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              //   className={({ isActive }) =>
              //     isActive ? classes.active : undefined
              //   }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              //   className={({ isActive }) =>
              //     isActive ? classes.active : undefined
              //   }
              end
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
