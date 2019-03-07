import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fade, Grow } from '@material-ui/core';
import NewPageContent from './NewPageContent';
import FadeWrapperPage from '../../FadeWrapperPage';

const NewPage = ({ history }) => {
  const [fetching, setFetching] = useState(false);

  return (
    <FadeWrapperPage
      Component={NewPageContent}
      ProgressTransition={Fade}
      ContentTransition={Grow}
      fetching={fetching}
      setFetching={setFetching}
      timeout={300}
      redirect={path => history.push(path)}
    />
  );
};

NewPage.propTypes = {
  history: PropTypes.object.isRequired,
};
export default NewPage;
