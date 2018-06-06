import React, { Component } from 'react';
import BackHeader from './header.png'

var sectionStyle = {
  width: "100%",
  height: "400px",
  // backgroundhead: `url(${BackHeader})`
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default Section