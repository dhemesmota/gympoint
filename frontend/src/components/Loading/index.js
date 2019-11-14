import React from 'react';
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

export default function Loading() {
  return <Lottie options={defaultOptions} height={100} width={300} />;
}
