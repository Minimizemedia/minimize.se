import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '../utils/styled';

interface NavDivProps {
  hover: boolean;
  position?: string;
  bgColor: string;
}

const NavDiv = styled.div<NavDivProps>`
  width: ${(props): string => (props.hover ? '4.5vw' : '4vw')};
  transition: width 0.1s ease;
  position: fixed;
  top: 0;
  z-index: 100;
  left: ${(props): string | number => (props.position == 'left' ? 0 : 'auto')};
  right: ${(props): string | number => (props.position == 'right' ? 0 : 'auto')};
  height: 100vh;
  background-color: ${(props): string => props.theme.colors[props.bgColor]};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

interface NavTitleProps extends NavDivProps {
  titleColor: string;
}

const NavTitle = styled.h1<NavTitleProps>`
  font-size: 1em;
  color: ${(props): string => props.theme.colors[props.hover ? props.bgColor : props.titleColor]};
  margin-left: ${(props): string => (props.position == 'left' ? '8vw' : '0')};
  margin-right: ${(props): string => (props.position == 'right' ? '8vw' : '0')};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

interface SideNavProps {
  nextPage: string;
  bgColor: string;
  position: string;
  title: string;
  titleColor: string;
}

const SideNav: FunctionComponent<SideNavProps> = ({
  nextPage,
  bgColor,
  position,
  titleColor,
  title,
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  // router.prefetch();
  const hoverHandler = (value: boolean): (() => void) => (): void => {
    setHover(value);
  };
  const clickHandler = (): void => {
    setTimeout(() => router.push(nextPage), 100);
  };
  return (
    <NavDiv
      onClick={clickHandler}
      onMouseEnter={hoverHandler(true)}
      onMouseLeave={hoverHandler(false)}
      hover={hover}
      bgColor={bgColor}
      position={position}>
      <NavTitle hover={hover} bgColor={bgColor} titleColor={titleColor} position={position}>
        {title}
      </NavTitle>
    </NavDiv>
  );
};

export default SideNav;
