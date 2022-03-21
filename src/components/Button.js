import PropTypes from 'prop-types';

const Button = ({ color, text, onToggle }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onToggle}
      className="btn"
    >
      {text}
    </button>
  );
};

// Button.defaultProps = {
//   text: 'Add',
// };

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
