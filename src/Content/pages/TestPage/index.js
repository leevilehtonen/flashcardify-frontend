import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade, Grow } from '@material-ui/core';
import FadeWrapperPage from '../../FadeWrapperPage';

const TestPage = props => {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 1000);
  }, []);

  return (
    <FadeWrapperPage
      Component={() => <div />}
      ProgressTransition={Fade}
      ContentTransition={Grow}
      fetching={fetching}
      timeout={300}
      quiz={{ id: 0, title: 'hello', description: 'world' }}
      redirect={() => {}}
    />
  );
};

TestPage.propTypes = {};

export default TestPage;
