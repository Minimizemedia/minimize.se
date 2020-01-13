import React, { FunctionComponent } from 'react';
import SideNav from '../components/SideNav';
import PageWrapper from '../components/PageWrapper';
import { PageTransition } from '../utils/pageTransition';

const transition = {
  from: { transform: 'translateX(-100%)' },
  enter: { transform: 'translateX(0)', opacity: 1 },
  leave: { opacity: 0 },
};

const About: FunctionComponent = () => (
  <PageTransition transition={transition}>
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
  </PageTransition>
);

export default About;
