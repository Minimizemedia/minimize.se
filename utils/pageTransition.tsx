import React, { useState, useEffect, FunctionComponent } from 'react';
import { useTransition, animated, UseTransitionProps, ItemTransition } from 'react-spring';

type UsePageTransition<Item> = (transition: UseTransitionProps<Item>) => ItemTransition<Item>[];

export const usePageTransition: UsePageTransition<boolean> = transition => {
  const [show, set] = useState(false);
  useEffect(() => {
    set(true);
    return (): void => {
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
