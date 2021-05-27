import React from 'react';
import { ReactComponent, ReactComponentProps } from './react-component';

export default {
  component: ReactComponent,
  title: 'ReactComponent',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ReactComponentProps = {};

  return <ReactComponent />;
};
