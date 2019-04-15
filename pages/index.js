import React from 'react';
import styled from '@emotion/styled';
import SideNav from '../components/SideNav';

const IndexWrapper = styled.div`
  background-color: #eddfc6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const IndexTitle = styled.h1`
  color: #1c6ed2;
  font-size: 5em;
`;

const IndexPage = () => (
  <IndexWrapper>
    <IndexTitle>we are mini_mize</IndexTitle>
    <SideNav bgColor={'terracotta'} titleColor={'miniBlue'} position={'left'} title={'about'} />
    <SideNav bgColor={'navy'} titleColor={'miniBlue'} position={'right'} title={'work'} />
  </IndexWrapper>
);

export default IndexPage;
