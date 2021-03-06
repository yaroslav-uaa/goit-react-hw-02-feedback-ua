import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from "./components/Statistics/Statistics";
import Notification from './components/Notification/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbacks = e => {
    const name = e.currentTarget.name
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good / this.countTotalFeedback()) * 100
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={['good','neutral','bad']}
            onLeaveFeedback={this.countFeedbacks}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              feedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification msg="No Feedbacks - Sorry" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
