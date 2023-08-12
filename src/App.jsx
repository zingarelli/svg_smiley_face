import { range } from 'd3';
import SmileyFace from './SmileyFace';

const width = 200;
const height = 200;

const faces = range(4 * 3);

function App() {
  return <>
    {faces.map((value) => <SmileyFace
      key={value}
      width={width}
      height={height}
      strokeWidth={10}
      faceCX={width / 2}
      faceCY={height / 2}
      faceRadius={width/2}
      // adding randomness to the faces
      eyeRadius={5 * Math.random() * 7}
      eyeOffsetX={40}
      eyeOffsetY={30}
      mouthWidth={2 * Math.random() * 10}
      mouthRadius={8 * Math.random() * 5}
      mouthOffsetY={35}
      noseRadius={5}
      noseWidth={5}
      noseOffsetX={3}
      noseOffsetY={-30}
    />)}
  </>
}

export default App
