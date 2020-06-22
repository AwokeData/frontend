import React from 'react';

import Introduction from './introduction';
import Information from './information';
import CallToAction from '../call-to-action';

const About = () => {
  return (
    <div id="about">
      <Introduction />
      <Information />
      <CallToAction />
    </div>
  );
};

export default About;
