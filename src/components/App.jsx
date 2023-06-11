import React from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';
import FeedbackOptions from './Feedback-buttons/Feedback-buttons';
import Statistics from './Feedback-statistics/Feedback-statistics';
import NotificationMessage from './Notification-message/Notification-message';
import SectionTitle from './Section-title/Section-title';

export class App extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleRateChange = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, i) => {
      return acc + i;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0
      ? '0%'
      : `${Math.round((this.state.good / total) * 100)}%`;
  };

  render() {
    return (
      <div className={css.feedback}>
        <SectionTitle title={'Please leave feedback'} />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleRateChange}
        />
        <SectionTitle title={'Statistics'} />
        {this.total === 0 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
