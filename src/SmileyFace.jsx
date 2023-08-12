import Eyes from './Eyes';
import Face from './Face';
import FaceContainer from './FaceContainer';
import Mouth from './Mouth';
import Nose from './Nose';

export default function SmileyFace({
    width,
    height,
    strokeWidth,
    faceCX,
    faceCY,
    faceRadius,
    eyeRadius,
    eyeOffsetX,
    eyeOffsetY,
    mouthWidth,
    mouthRadius,
    mouthOffsetY,
    noseRadius,
    noseWidth,
    noseOffsetX,
    noseOffsetY,
}) {
    return (
        <FaceContainer width={width} height={height}>
            <Face
                radius={faceRadius - strokeWidth / 2}
                strokeWidth={strokeWidth}
                cx={faceCX}
                cy={faceCY}
            />
            <Eyes
                radius={eyeRadius}
                offsetX={eyeOffsetX}
                offsetY={eyeOffsetY}
                cx={faceCX}
                cy={faceCY}
            />
            {/* g is a group. It's a way of grouping elements and working with them as a single element. Anything inside this g tag is being translated to the center of the face */}
            <g transform={`translate(${faceCX}, ${faceCY + mouthOffsetY})`}>
                <Nose radius={noseRadius} width={noseWidth} offsetX={noseOffsetX} offsetY={noseOffsetY} />
                <Mouth radius={mouthRadius} width={mouthWidth} strokeWidth={strokeWidth} />
            </g>
        </FaceContainer>
    )
}