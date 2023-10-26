import React, { useState, useEffect } from 'react'
import './Addvideo.css'


const initialState = {
    title: '',
    views: '',
    time: '1 month ago',
    channel: 'Mk Bros',
    verified: true
  }
function AddVideo({addvideos,updateVideo, editableVideo}) {
  const [video, setVideo] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!editableVideo) {
      updateVideo(video)
    } else {
      addvideos(video)
    }
    
    setVideo(initialState)  
  }

  const handleChange = (e) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    })
  }
 useEffect(() => {
    if(editableVideo) {
      setVideo(editableVideo)
    }
   
 }, [editableVideo])
  return (
    <div>
      <form>
      <input type="text" name='title' onChange={handleChange}  placeholder='title' value={video.title}/>
      <input type="text"  name='views' onChange={handleChange}  placeholder='views' value={video.views}/>
      <button onClick={handleSubmit}>
      {editableVideo ? 'Edit' : 'Add'} Video
      </button>
      </form>
    </div>
  )
}

export default AddVideo
