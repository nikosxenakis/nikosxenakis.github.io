const IMAGE_BASE =
  "https://i.pinimg.com/736x/b2/fb/21/b2fb21f206c56acc2007ed7e587d9770.jpg?auto=compress";
const IMAGE_640 = `${IMAGE_BASE}&w=640`;
const IMAGE_1280 = `${IMAGE_BASE}&w=1280`;
const IMAGE_1920 = `${IMAGE_BASE}&w=1920`;
const IMAGE_SRCSET = `${IMAGE_640} 640w, ${IMAGE_1280} 1280w, ${IMAGE_1920} 1920w`;

const Background = () => (
  <picture
    className="absolute inset-0 h-full w-full overflow-hidden"
    style={{ opacity: 1, zIndex: -1, position: "fixed", top: 0, left: 0 }}
  >
    <source type="image/jpeg" srcSet={IMAGE_SRCSET} />
    <img
      className="absolute inset-0 h-full w-full scale-[1.02] object-cover opacity-40 blur-2xl dark:opacity-30"
      alt=""
      aria-hidden="true"
      src={IMAGE_1920}
      srcSet={IMAGE_SRCSET}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        filter: "blur(26px)",
        opacity: 0.9,
      }}
    />
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, rgba(30,30,40,0.7) 0%, rgba(10,10,20,0.9) 100%)",
        backdropFilter: "blur(8px) saturate(120%)",
        WebkitBackdropFilter: "blur(8px) saturate(120%)",
        borderRadius: "0",
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.25)",
      }}
    ></div>
  </picture>
);

export default Background;
