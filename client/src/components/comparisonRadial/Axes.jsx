import React from 'react';
import Axis from './Axis';

export default ({ scales, margins, svgDimensions }) => {
  const { height, width } = svgDimensions;

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  };

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
    // tickSize: width - margins.left - margins.right,
  };
  // new es6 obj spread!!!
  return (
    <g>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  );
};