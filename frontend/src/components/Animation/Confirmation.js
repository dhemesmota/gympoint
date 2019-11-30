import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import { ContainerLottie, LottieSubTitle } from './styles';

import animation from '~/assets/confirmed.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Confirmation({ title }) {
  return (
    <ContainerLottie>
      <Lottie options={defaultOptions} height={350} width={350} />
      {title && <LottieSubTitle>{title}</LottieSubTitle>}
    </ContainerLottie>
  );
}

Confirmation.propTypes = {
  title: PropTypes.string,
};

Confirmation.defaultProps = {
  title: null,
};
