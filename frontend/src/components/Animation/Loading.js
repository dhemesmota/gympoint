import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import loader from '~/assets/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Loading({ height, width }) {
  return (
    <Lottie
      options={defaultOptions}
      height={height || 100}
      width={width || 300}
    />
  );
}

Loading.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Loading.defaultProps = {
  height: null,
  width: null,
};
