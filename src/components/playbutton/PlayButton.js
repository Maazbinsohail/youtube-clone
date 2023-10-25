import '../playbutton/Playbutton.css'
import React from 'react'

function PlayButton({message,children,onPlay,onPause}){
   const [playing, setPlaying] = React.useState(false);
    function handleClick(e){
        console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying ( !playing);
    }

    return (
        <button onClick={handleClick}>{children} : {playing? '⏸️' : '▶️'}</button>
    )

}

export default PlayButton;
