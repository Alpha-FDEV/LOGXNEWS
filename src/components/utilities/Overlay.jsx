function Overlay({close}) {
  return (
    <div
      onClick={close}
      className="w-screen top-0 left-0  z-40 backdrop-brightness-75  backdrop-blur-sm   fixed  h-screen"
    ></div>
  );
}

export default Overlay;
