import React, { useState, useEffect, useRef } from 'react'
import './Addvideo.css'

import useDispatch from '../../customhooks/VideoDispatch'



const initialState = {
    title: '',
    views: '',
    time: '1 month ago',
    channel: 'Mk Bros',
    verified: true
  }
function AddVideo({ editableVideo}) {
  const [video, setVideo] = useState(initialState)
 const dispatch = useDispatch()
 const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(editableVideo) {
      dispatch({type: 'UPDATE', payload: video})

    } else {
      dispatch({type: 'ADD', payload: video})

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
    inputRef.current.focus()    
   
 }, [editableVideo])
  return ( // input mai jo refprop use houa hai usko bind kia hai jo useref mai variable hai ussy
    <div>
      <form>
      <input ref={inputRef}  type="text" name='title' onChange={handleChange}  placeholder='title' value={video.title}/>  
      <input type="text"  name='views' onChange={handleChange}  placeholder='views' value={video.views}/>
      <button onClick={handleSubmit}>
      {editableVideo ? 'Edit' : 'Add'} Video
      </button>
      </form>
    </div>
  )
}

export default AddVideo
