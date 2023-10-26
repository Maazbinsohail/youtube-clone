import './App.css';
import VideoList from './components/Videolist/VideoList';
import AddVideo from './components/addvideo/AddVideo';
import videoDB from './data/Data';
import { useState } from 'react';
function App() {

  const [videos, setVideos] = useState(videoDB)
  const [editableVideo, setEditableVideo] = useState(null)        

  function addVideos(video){
    setVideos([...videos,
      {...video,id : videos.length + 1} ])
  }

  function deleteVideo(id){

    setVideos(videos.filter((video) => video.id !== id))
   console.log(id)
  }

  function editVideo(id){
      
    setEditableVideo(videos.find((video) => video.id === id))

  }   


  function updateVideo(video){
    const index = video.findIndex(v=>v.id === video.id)
    const newVideos = [...video]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }
   

  return (
    <div className="App" onClick={()=>console.log('App')}>
      <AddVideo addvideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo} />
      <VideoList  deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}/>
      </div>
  );
}

export default App; 