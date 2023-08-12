export default function Face({ radius, strokeWidth, cx, cy }) {
    {/* cx and cy are the x,y coordinates for the center of the circle */}
    return <circle
      r={radius}
      cx={cx}
      cy={cy}
      fill="#ffff00"
      stroke="#000000"
      strokeWidth={strokeWidth}
    />
  }