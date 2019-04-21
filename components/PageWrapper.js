import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';

const Wrapper = styled(animated.div)`
  background-color: ${props => props.theme.colors[props.bgColor]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const PageWrapper = ({ bgColor, children }) => {
  const [show, set] = useState(false);
  useEffect(() => {
    console.log('mounted');
    set(true);
    return () => {
      console.log('unmounted');
      set(false);
    };
  });
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Wrapper key={key} style={props} bgColor={bgColor}>
          {children}
        </Wrapper>
      )
  );
};

export default PageWrapper;
