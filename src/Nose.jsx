import { arc } from "d3";

export default function Nose({ radius, width, offsetX, offsetY }) {
    const noseArc = arc()
        .innerRadius(radius)
        .outerRadius(radius + width)
        .startAngle(0)
        .endAngle(170 * Math.PI / 180);

    return (
        <>
            {/* <path
                d={noseArc()}
                transform={`translate(${-offsetX}, ${offsetY}) rotate(45)`}
            /> */}
            <rect width={width} height={15} x={offsetX} y={1.8 * offsetY} />
            <path
                d={noseArc()}
                transform={`translate(${offsetX}, ${offsetY})`}
            />
        </>
    )
}