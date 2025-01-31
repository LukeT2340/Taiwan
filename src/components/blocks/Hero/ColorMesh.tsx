interface Props {}

const ColorMesh = ({}: Props) => {
  return (
    <mesh position={[0, -11, -1]}>
      <planeGeometry args={[16, 9]} />
      <meshStandardMaterial color={0xff5629} />
      <ambientLight intensity={1} />
    </mesh>
  );
};

export default ColorMesh;
