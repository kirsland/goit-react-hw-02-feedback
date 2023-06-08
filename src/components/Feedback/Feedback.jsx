import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import FeedbackButtons from './Feedback-buttons';
import Statistics from './Feedback-statistics';
import SectionTitle from '../Section-title';

class Feedback extends React.Component {
  static deafaultProps = {
    initialValueGood: 1,
    initialValueNeutral: 1,
    initialValueBad: 1,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  rateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  rateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  rateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? '0%'
      : `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`;
  };

  render() {
    return (
      <div className={css.feedback}>
        <SectionTitle title={'Please leave feedback'} />
        <FeedbackButtons
          onRateGood={this.rateGood}
          onRateNeutral={this.rateNeutral}
          onRateBad={this.rateBad}
        />
        <SectionTitle title={'Statistics'} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
