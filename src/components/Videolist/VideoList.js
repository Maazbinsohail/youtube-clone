import React, { useCallback, useEffect } from 'react'
import Video from '../video/Video'
import PlayButton from '../playbutton/PlayButton'
import useVideos from '../../customhooks/Videos'
import axios from 'axios'
import useDispatch from '../../customhooks/VideoDispatch'

function VideoList({editVideo}){

const url = 'https://my.api.mockaroo.com/video.json?key=47b5dcc0'

const videos = useVideos()
const dispatch = useDispatch()
  

    // async function handleClick (){
    //  const res = await axios.get(url)
    //  console.log('getVideos',res.data)
    //  dispatch({type: 'LOAD', payload:res.data})
    // }

 useEffect(() => {
  async function getVideos (){
    const res = await axios.get(url)
    console.log('getVideos',res.data)
    dispatch({type: 'LOAD', payload:res.data})
   }
   getVideos()

 },[dispatch])

 const play = useCallback (() => console.log('Playing..',videos.title),[ videos.title])
 const pause = useCallback (() => console.log('Paused..',videos.title),[ videos.title]) 

    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo={editVideo}
              
            >
              <PlayButton
                onPlay={play}
                onPause={pause}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          
          </>
    )
}

export default VideoList