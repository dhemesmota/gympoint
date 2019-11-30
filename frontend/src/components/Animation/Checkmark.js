import React from 'react';
import Lottie from 'react-lottie';

import { ContainerCheckmark } from './styles';

import animation from '~/assets/checkmark.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Checkmark() {
  return (
    <ContainerCheckmark>
      <Lottie options={defaultOptions} height={400} width={400} />
    </ContainerCheckmark>
  );
}
