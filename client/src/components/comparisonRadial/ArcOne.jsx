import React, { Component } from 'react';
import * as d3 from 'd3';
import styles from '../../styles/comparison/Comparison.css';

export default class ArcOne extends Component {
  componentDidMount() {
    const context = this.setContext();
    this.setBackground(context);
    this.drawArc(context);
    this.setForeground(context);
    this.setBackground(context);
    this.arc(context);
    this.redrawArc(context);
  }

  componentDidUpdate() {
    this.redrawArc();
  }

  setBackground(context) {
    return context.append('path')
      .datum({ endAngle: Math.PI * 2 })
      .style('fill', '#e6e6e6')
      .attr('d', this.arc());
  }

  setContext() {
    return d3.select(this.refs.arc).append('svg')
      .attr('height', '300px')
      .attr('width', '300px')
      .attr('class', 'd3-arc')
      .append('g')
      .attr('transform', `translate(150, 150)`);
  }

  setText(context) {
    return context.append('text')
      .attr('text-anchor', 'middle')
      // .attr('class', 'styles.percent-complete')
      .attr('d', 0)
      .text(this.props.playerOneSelected)
      .attr('transform', `translate(0, 15)`);
  }

  setForeground(context) {
    return context.append('path')
      .datum({ endAngle: Math.PI * 2 * (this.props.playerOneSelected/15) }) // percentage
      .style('fill', '#ff0000')
      .attr('d', this.arc());
  }

  arc() {
    return d3.arc()
      .innerRadius(60)
      .outerRadius(90)
      .startAngle(0);
  }

  redrawArc() {
    const context = d3.select('.d3-arc');
    d3.select(this.refs.arc).selectAll('text').remove();
    context.remove();
    this.drawArc();
  }

  drawArc() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.setText(context);
  }
  
  render() {
    return (
      <svg width="250" height="250">
        <g ref="arc" fontFamily="Roboto Condensed" fontSize="40px" letterSpacing="5px" fill="#5B8BE3" />
      </svg>
    );
  }
}