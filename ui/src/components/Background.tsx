const Background = () => {
  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        zIndex: -1,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        background: "linear-gradient(135deg, #1a1f2e 0%, #2a2f3a 25%, #1e2330 50%, #2a2f3a 75%, #1a1f2e 100%)",
      }}
    ></div>
  );
};

export default Background;
