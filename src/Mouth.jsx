import { arc } from 'd3';

export default function Mouth({ radius, width, strokeWidth }) {
    // constructor function arc() with method chaining
    const mouthArc = arc()
      // method chaining: each function called returns the original arc object, transformed by the function
      // the space between inner and outer radius sets a "thickness" for the arc
      .innerRadius(0) // 0: open mouth; other values (<= radius) will set a thickness for the lips
      .outerRadius(radius + width)
      // angle is a number in radius
      .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 3 / 2);
  
    return <path
      d={mouthArc()}
      fill='#ff0000'
      stroke='#000000'
      strokeWidth={strokeWidth}
    />
  }