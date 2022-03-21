import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

function Header({ title, onToggle, showForm }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={showForm ? 'Hide' : 'Show'}
          color={showForm ? 'crimson' : 'green'}
          onToggle={onToggle}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: 'task tracker',
};

Header.protoTypes = {
  title: PropTypes.string.isRequired,
};

// CSS IN JS
// const headerStyling = {
//   color: 'green',
//   backgroundColor: 'black',
// };

export default Header;
