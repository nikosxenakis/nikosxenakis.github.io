import { useEffect, useState } from "react";
import Intro from "@/components/Intro";

export default function App() {
    const [intro1Opacity, setIntro1Opacity] = useState(1);
    const [intro2Opacity, setIntro2Opacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const min = 0;
            const max = 470;
            const scroll = window.scrollY;

            // Intro 1 fades out and moves up
            const intro1Opacity = Math.max(1 - (scroll - min) / (max - min), 0);

            // Intro 2 fades in and moves up from below
            const intro2Opacity = Math.min((scroll - min) / (max - min), 1);

            setIntro1Opacity(intro1Opacity);
            setIntro2Opacity(intro2Opacity);

            console.log("Scroll position:", scroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Intro
                opacity={intro1Opacity}
                top={0}
            />
            <Intro
                opacity={intro2Opacity}
                top={500}
            />
        </>
    );
}