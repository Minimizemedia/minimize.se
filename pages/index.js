import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const spanStyle = props =>
  props.hover
    ? css`
        color: #eddfc6;
        text-shadow: rgb(28, 110, 210) 1px 0px 0px, rgb(28, 110, 210) 0.540302px 0.841471px 0px,
          rgb(28, 110, 210) -0.416147px 0.909297px 0px, rgb(28, 110, 210) -0.989992px 0.14112px 0px,
          rgb(28, 110, 210) -0.653644px -0.756802px 0px,
          rgb(28, 110, 210) 0.283662px -0.958924px 0px, rgb(28, 110, 210) 0.96017px -0.279415px 0px;
      `
    : undefined;

const IndexWrapper = styled.div`
  background-color: ${props => props.theme.colors['pale']};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const IndexTitle = styled.h1`
  color: ${props => props.theme.colors['blue']};
  font-size: 5em;
  span {
    ${spanStyle}
  }
`;

class IndexPage extends Component {
  state = {
    hover: false,
  };
  handleMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };
  render() {
    return (
      <IndexWrapper>
        <IndexTitle hover={this.state.hover}>
          we are{' '}
          <span onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            mini_mize
          </span>
        </IndexTitle>
        <SideNav
          title={'about'}
          position={'left'}
          nextPage={'/about'}
          bgColor={'terra'}
          titleColor={'blue'}
        />
        <SideNav
          title={'work'}
          position={'right'}
          nextPage={'/work'}
          bgColor={'navy'}
          titleColor={'blue'}
        />
      </IndexWrapper>
    );
  }
}

export default IndexPage;
