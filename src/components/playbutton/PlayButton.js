import ThemeContext from '../../context/ThemeContext';
import '../playbutton/Playbutton.css'
import React, { useContext } from 'react'

function PlayButton({children,onPlay,onPause}){

    const theme = useContext(ThemeContext)

   const [playing, setPlaying] = React.useState(false);
    function handleClick(e){
        console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying ( !playing);
    }

    return (
        <button className={theme} onClick={handleClick}>{children} : {playing? '⏸️' : '▶️'}</button>
    )

}

export default PlayButton;
