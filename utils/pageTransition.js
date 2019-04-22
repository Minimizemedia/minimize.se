import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

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

export const PageTransition = ({ transition, children }) => {
  const tmp = usePageTransition(transition);
  return tmp.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          {children}
        </animated.div>
      )
  );
};
