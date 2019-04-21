import React from 'react';
import SideNav from '../components/SideNav';
import styled from '@emotion/styled';

const WorkWrapper = styled.div`
  background-color: ${props => props.theme.colors['navy']};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const Work = () => (
  <WorkWrapper>
    <div>Work</div>
    <SideNav
      title={'start'}
      position={'left'}
      nextPage={'/index'}
      bgColor={'pale'}
      titleColor={'sage'}
    />
  </WorkWrapper>
);

export default Work;
