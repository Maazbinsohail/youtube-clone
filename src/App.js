import './App.css';
import VideoList from './components/Videolist/VideoList';
import AddVideo from './components/addvideo/AddVideo';
import ThemeContext from './context/ThemeContext';
import VideoContext from './context/VideoContext';
import VideoDispatch from './context/VideoDispatch';
import videoDB from './data/Data';
import { useReducer, useState } from 'react';
function App() {
  const [editableVideo, setEditableVideo] = useState(null)     
  const [mode, setMode] = useState('darkMode')
  function videoReducer(videos,action){ //video is mai state ko represent kr rh hai hai
  switch (action.type) {
  case 'ADD':
    return[...videos,
      {...action.payload,id : videos.length + 1} ]
  case 'DELETE': 
    return videos.filter(video => video.id !== action.payload)
    case 'UPDATE':
      const index = videos.findIndex(v=>v.id === action.payload.id)
      const newVideos = [...videos]
      newVideos.splice(index,1,action.payload)
        setEditableVideo(null)
      return newVideos
  default:
    return videos
  }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB)
  function editVideo(id){   
    setEditableVideo(videos.find(video => video.id === id))
  }  
  return (
      <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={videos}>
      <VideoDispatch.Provider value={dispatch}>
      <div className={`App ${mode}`} onClick={()=>console.log('App')}>
      <button onClick={()=>setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Toggle Mode</button> 
      <AddVideo   editableVideo={editableVideo} />
      <VideoList  editVideo={editVideo} />
      </div>
      </VideoDispatch.Provider>
      </VideoContext.Provider>
      </ThemeContext.Provider>
  );
  }
export default App; 