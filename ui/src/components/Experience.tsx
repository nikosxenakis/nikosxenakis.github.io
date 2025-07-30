import { useEffect } from "react";

const Experience = ({ opacity }: { opacity: number }) => {
    useEffect(() => {
        console.log("Experience opacity changed:", opacity);
    }, [opacity]);
    
    return (
        <div
            className="section"
            data-aos="fade-up"
            style={{
                opacity,
                transition: 'opacity 0.2s linear',
                pointerEvents: opacity > 0 ? 'auto' : 'none'
            }}
        >
            <h2>Experience</h2>
            <p>This section will showcase my professional experience.</p>
        </div>
    );
};

export default Experience;