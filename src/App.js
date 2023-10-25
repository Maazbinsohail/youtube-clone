import './App.css';
import VideoList from './components/Videolist/VideoList';
import AddVideo from './components/addvideo/AddVideo';
import videoDB from './data/Data';
import { useState } from 'react';
function App() {

  const [videos, setVideos] = useState(videoDB)

  function addVideos(video){
    setVideos([...videos,
      {...video,id : videos.length + 1}   ])
  }


  return (
    <div className="App" onClick={()=>console.log('App')}>
      <AddVideo addvideos={addVideos} />
      <VideoList videos={videos}/>
      </div>
  );
}

export default App;