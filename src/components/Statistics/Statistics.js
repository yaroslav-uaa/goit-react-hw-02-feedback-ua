import PropTypes from 'prop-types';
// import s from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total, feedbackPercentage}) => (
    <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>
      Positive feedback:
          {isNaN(feedbackPercentage) ? 0 : Math.round(feedbackPercentage)}%
        </p>
</>
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
