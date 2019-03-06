import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FadeWrapperPage from '../../FadeWrapperPage';

const TestPage = props => {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 3000);
  }, []);

  return <FadeWrapperPage fetching={fetching} timeout={1000} />;
};

TestPage.propTypes = {};

export default TestPage;
