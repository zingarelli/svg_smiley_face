export default function Eyes({ radius, offsetX, offsetY, cx, cy }) {
    return (
      <>
        <circle
          r={radius}
          cx={cx - offsetX}
          cy={cy - offsetY}
        />
        <circle
          r={radius}
          cx={cx + offsetX}
          cy={cy - offsetY}
        />
      </>
    )
  }