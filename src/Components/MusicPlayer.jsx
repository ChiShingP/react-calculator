import React, { useState, useEffect } from "react"
//https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs
//Play different music based on ans
function MusicPlayer(props) {
    const [music, playMusic] = useState(false);
    const [song] = useState(new Audio(url));

    useEffect(() => {
        music ? Audio.play() : Audio.pause();
    }, [song]
    );
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];


}