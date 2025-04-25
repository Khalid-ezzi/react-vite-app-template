import Screen from '../../assets/Spin@1x-1.0s-200px-200px.svg'

const LoadingScreen = () => {
  return (
    <div
      className="justify-center items-center h-screen w-full fixed z-50 left-0 top-0 bg-black bg-opacity-50 flex flex-col"
    >
      <img
        src={Screen}
        alt="Loading..."
      />
    </div>
  );
};

export default LoadingScreen;
