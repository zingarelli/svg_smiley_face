export default function FaceContainer({ width, height, children }) {
    // the starting point (0,0) is at the TOP left of the svg
    return <svg width={width} height={height}>
        {children}
    </svg>
}