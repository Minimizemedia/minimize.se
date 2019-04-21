import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SideNav from '../components/SideNav';

const spanStyle = props =>
  props.hover
    ? css`
        color: #eddfc6;
        /* text-shadow: rgb(28, 110, 210) 2px 0px 0px, rgb(28, 110, 210) 1.75517px 0.958851px 0px, rgb(28, 110, 210) 1.0806px 1.68294px 0px, rgb(28, 110, 210) 0.141474px 1.99499px 0px, rgb(28, 110, 210) -0.832294px 1.81859px 0px, rgb(28, 110, 210) -1.60229px 1.19694px 0px, rgb(28, 110, 210) -1.97998px 0.28224px 0px, rgb(28, 110, 210) -1.87291px -0.701566px 0px, rgb(28, 110, 210) -1.30729px -1.5136px 0px, rgb(28, 110, 210) -0.421592px -1.95506px 0px, rgb(28, 110, 210) 0.567324px -1.91785px 0px, rgb(28, 110, 210) 1.41734px -1.41108px 0px, rgb(28, 110, 210) 1.92034px -0.558831px 0px; */
        text-shadow: rgb(28, 110, 210) 1px 0px 0px, rgb(28, 110, 210) 0.540302px 0.841471px 0px, rgb(28, 110, 210) -0.416147px 0.909297px 0px, rgb(28, 110, 210) -0.989992px 0.14112px 0px, rgb(28, 110, 210) -0.653644px -0.756802px 0px, rgb(28, 110, 210) 0.283662px -0.958924px 0px, rgb(28, 110, 210) 0.96017px -0.279415px 0px;
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
