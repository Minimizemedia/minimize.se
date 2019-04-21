import React from 'react';
import SideNav from '../components/SideNav';

const Work = () => (
  <>
    <div>Work</div>
    <SideNav
      title={'start'}
      position={'left'}
      nextPage={'/index'}
      bgColor={'terracotta'}
      titleColor={'miniBlue'}
    />
  </>
);

export default Work;
