import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SideNav from '../components/SideNav';

const spanStyle = props =>
  props.hover
    ? css`
        -webkit-text-stroke: 1px black;
        color: white;
        text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
          1px 1px 0 #000;
      `
    : undefined;

const IndexWrapper = styled.div`
  background-color: #eddfc6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const IndexTitle = styled.h1`
  color: #1c6ed2;
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
        <SideNav bgColor={'terracotta'} titleColor={'miniBlue'} position={'left'} title={'about'} />
        <SideNav bgColor={'navy'} titleColor={'miniBlue'} position={'right'} title={'work'} />
      </IndexWrapper>
    );
  }
}

export default IndexPage;
