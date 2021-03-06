import React from 'react';
import * as d3Axis from 'd3';
import { select as d3Select } from 'd3';

// import './Axis.css'

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const axisType = `axis${this.props.orient}`
    const axis = d3Axis[axisType]()
      .scale(this.props.scale)
      .tickSize(-this.props.tickSize) // negative so itll draw inside
      .tickPadding([12]) // spacing between titles of axis
      .ticks([10]); // spacing of axis lines so either by 5s or by 10s on y axis
    d3Select(this.axisElement).call(axis);
  }

  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={(el) => { this.axisElement = el; }}
        transform={this.props.translate}
      />
    );
  }
}