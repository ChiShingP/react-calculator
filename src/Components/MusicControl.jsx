import React, { useState, useEffect } from "react"
//https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs
//Play different music based on ans
function MusicControl(props) {
    const [music, playMusic] = useState(false);
    const [song] = useState(new Audio(props));
    const toggle = () => playMusic(!music);

    useEffect(() => {
        music ? song.play() : song.pause();
    }, [song]
    );
    useEffect(() => {
        song.addEventListener('ended', () => playMusic(false));
        return () => {
            song.removeEventListener('ended', () => playMusic(false));
        };
    }, []);

    return (
        <div>
            <button type="button" class="btn btn-secondary btn-sizing" onClick={toggle}>{music ? "Pause" : "Play"}</button>
        </div>
    );
};



export default MusicControl;