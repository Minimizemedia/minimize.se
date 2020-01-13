import React, { FunctionComponent } from 'react';
import styled from '../utils/styled';

interface WrapperProps {
  bgColor: string;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${(props): string => props.theme.colors[props.bgColor]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-content: center;
  align-items: start;
  flex-direction: column;
`;

interface PageWrapperProps {
  bgColor: string;
}

const PageWrapper: FunctionComponent<PageWrapperProps> = ({ bgColor, children }) => (
  <Wrapper bgColor={bgColor}>{children}</Wrapper>
);

export default PageWrapper;
