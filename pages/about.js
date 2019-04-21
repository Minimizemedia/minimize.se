import React from 'react';
import SideNav from '../components/SideNav';
import PageWrapper from '../components/PageWrapper';

const About = () => (
  <PageWrapper bgColor="terra">
    <div>about</div>
    <SideNav
      title={'start'}
      position={'right'}
      nextPage={'/'}
      bgColor={'pale'}
      titleColor={'navy'}
    />
  </PageWrapper>
);

export default About;
