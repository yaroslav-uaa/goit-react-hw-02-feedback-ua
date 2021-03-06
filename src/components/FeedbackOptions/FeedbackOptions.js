import PropTypes from 'prop-types';
import f from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={f.btnList}>
    {options.map(name => (
      <li key={name}>
        <button name={name} onClick={onLeaveFeedback}>
          {name}
        </button>
      </li>
    ))}
  </ul>
);


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;