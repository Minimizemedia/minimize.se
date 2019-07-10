import React, { useState, useEffect, FunctionComponent } from 'react';
import { useTransition, animated, UseTransitionProps } from 'react-spring';

export const usePageTransition = transition => {
  const [show, set] = useState(false);
  useEffect(() => {
    set(true);
    return () => {
      set(false);
    };
  }, []);
  return useTransition(show, null, transition);
};

interface Props {
  transition: UseTransitionProps<boolean>;
}

export const PageTransition: FunctionComponent<Props> = ({ transition, children }) => {
  const tmp = usePageTransition(transition);
  return (
    <>
      {tmp.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              {children}
            </animated.div>
          )
      )}
    </>
  );
};
