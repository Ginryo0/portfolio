import { Html } from '@react-three/drei';
const CanvasLoader = () => {
  return (
    <Html>
      <div
        style={{
          width: '40px',
          marginTop: '120px',
          marginLeft: '-10px',
        }}
      >
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Html>
  );
};
export default CanvasLoader;
