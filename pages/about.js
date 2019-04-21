import React from 'react';
import SideNav from '../components/SideNav';
import styled from '@emotion/styled';

const AboutWrapper = styled.div`
  background-color: ${props => props.theme.colors['terra']};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const About = () => (
  <AboutWrapper>
    <div>about</div>
    <SideNav
      title={'start'}
      position={'right'}
      nextPage={'/index'}
      bgColor={'pale'}
      titleColor={'navy'}
    />
  </AboutWrapper>
);

export default About;
