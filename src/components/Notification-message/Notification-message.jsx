import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification-message.module.css';

const NotificationMessage = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
