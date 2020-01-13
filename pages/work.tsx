import React, { FunctionComponent } from 'react';
import SideNav from '../components/SideNav';
import PageWrapper from '../components/PageWrapper';
import { PageTransition } from '../utils/pageTransition';

const transition = {
  from: { transform: 'translateX(100%)' },
  enter: { transform: 'translateX(0)', opacity: 1 },
  leave: { opacity: 0 },
};

const Work: FunctionComponent = () => (
  <PageTransition transition={transition}>
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
  </PageTransition>
);

export default Work;
