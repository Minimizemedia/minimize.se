import React, { Component } from 'react';
import { withRouter } from 'next/router';
import styled from '@emotion/styled';
import { WithRouterProps } from 'next/dist/client/with-router';

interface NavDivProps {
  hover: boolean;
  position?: string;
  bgColor: string;
}

const NavDiv = styled.div<NavDivProps>`
  width: ${props => (props.hover ? '4.5vw' : '4vw')};
  transition: width 0.1s ease;
  position: fixed;
  top: 0;
  z-index: 100;
  left: ${props => (props.position == 'left' ? 0 : 'auto')};
  right: ${props => (props.position == 'right' ? 0 : 'auto')};
  height: 100vh;
  background-color: ${props => props.theme.colors[props.bgColor]};
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
  color: ${props => props.theme.colors[props.hover ? props.bgColor : props.titleColor]};
  margin-left: ${props => (props.position == 'left' ? '8vw' : '0')};
  margin-right: ${props => (props.position == 'right' ? '8vw' : '0')};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

interface SideNavProps extends WithRouterProps {
  nextPage: string;
  bgColor: string;
  position: string;
  title: string;
  titleColor: string;
}

class SideNav extends Component<SideNavProps> {
  componentDidMount() {
    const { router } = this.props;
    router.prefetch(this.props.nextPage);
  }
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
    const { router, nextPage, position, bgColor, titleColor, title } = this.props;
    return (
      <NavDiv
        onClick={() => setTimeout(() => router.push(nextPage), 100)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        hover={this.state.hover}
        bgColor={bgColor}
        position={position}>
        <NavTitle
          hover={this.state.hover}
          bgColor={bgColor}
          titleColor={titleColor}
          position={position}>
          {title}
        </NavTitle>
      </NavDiv>
    );
  }
}

export default withRouter(SideNav);
