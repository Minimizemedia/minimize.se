import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors[props.bgColor]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const PageWrapper = ({ bgColor, children }) => <Wrapper bgColor={bgColor}>{children}</Wrapper>;

export default PageWrapper;
