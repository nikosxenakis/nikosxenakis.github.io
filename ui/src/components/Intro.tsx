const Intro = ({ opacity, top }: { opacity: number; top: number }) => (
    <div
        className="section"
        style={{
            opacity,
            top: `${top}px`,
        }}
    >
        <h1>Nikos Xenakis</h1>
        <h2>Software Engineer</h2>
    </div>
);

export default Intro;
