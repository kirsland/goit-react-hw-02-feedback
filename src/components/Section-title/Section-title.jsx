import React from 'react';
import PropTypes from 'prop-types';
import css from './Section-title.module.css';

const SectionTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
