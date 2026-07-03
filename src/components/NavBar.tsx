import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar is-light is-fixed-top" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          {/* Для Home */}
          <div
            className={classNames('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            <Link
              to="/"
              className={classNames({ 'is-active': pathname === '/' })}
            >
              Home
            </Link>
          </div>

          {/* Для Tabs */}
          <div
            className={classNames('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            <Link
              to="/tabs"
              className={classNames({
                'is-active': pathname.startsWith('/tabs'),
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
