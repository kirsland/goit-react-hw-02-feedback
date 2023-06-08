import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedbac-buttons.module.css';

const FeedbackButtons = ({ onRateGood, onRateNeutral, onRateBad }) => {
  return (
    <div className={css.buttons}>
      <button type="button" onClick={onRateGood}>
        Good
      </button>
      <button type="button" onClick={onRateNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onRateBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackButtons.propTypes = {
  onRateGood: PropTypes.func.isRequired,
  onRateNeutral: PropTypes.func.isRequired,
  onRateBad: PropTypes.func.isRequired,
};

export default FeedbackButtons;
