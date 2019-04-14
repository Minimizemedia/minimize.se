import React, { Component } from 'react';
import styled from '@emotion/styled';

const NavDiv = styled.div`
  width: ${props => props.hover ? '4.5vw': '4vw'};
  transition: width 0.1s ease;
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

class SideNav extends Component {
  state = {
    hover: false,
  };
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };
  render() {
    return (
      <NavDiv
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        hover={this.state.hover}
        bgcolor={this.props.bgcolor}
        position={this.props.position}>
        <NavTitle titleColor={this.props.titleColor} position={this.props.position}>
          {this.props.title}
        </NavTitle>
      </NavDiv>
    );
  }
}

export default SideNav;
