import React from 'react';
import SideNav from '../components/SideNav';
import PageWrapper from '../components/PageWrapper';

const Work = () => (
  <PageWrapper bgColor="navy">
    <div>Work</div>
    <SideNav
      title={'start'}
      position={'left'}
      nextPage={'/'}
      bgColor={'pale'}
      titleColor={'sage'}
    />
  </PageWrapper>
);

export default Work;
