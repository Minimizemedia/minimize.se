import React from 'react';
import styled from '@emotion/styled';

const NavDiv = styled.div`
  width: 5vw;
  position: fixed;
  top: 0;
  z-index: 100;
  left: ${props => (props.position == 'left' ? 0 : 'auto')};
  right: ${props => (props.position == 'right' ? 0 : 'auto')};
  height: 100vh;
  background-color: ${props => props.theme.colors[props.bgcolor]};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavTitle = styled.h1`
  font-size: 1em;
  color: ${props => props.theme.colors[props.titleColor]};
  margin-left: ${props => (props.position == 'left' ? '8vw' : '0')};
  margin-right: ${props => (props.position == 'right' ? '8vw' : '0')};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const SideNav = props => (
  <NavDiv bgcolor={props.bgcolor} position={props.position}>
    <NavTitle titleColor={props.titleColor} position={props.position}>{props.title}</NavTitle>
  </NavDiv>
);

export default SideNav;
