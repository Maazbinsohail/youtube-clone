import { useContext, memo } from "react";
import "./Video.css";
import ThemeContext from "../../context/ThemeContext";
import useDispatch from "../../customhooks/VideoDispatch";

const Video = memo (function Video({
  title,
  id,
  channel = "MKZ",
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
      
  return (
    <div className={`container ${theme}`}>
      <button
        className="close"
        onClick={() => dispatch({ type: "DELETE", payload: id })}
      >
        ❌
      </button>
      <button className="edit" onClick={() => editVideo(id)}>
        ✏️
      </button>
      <div className="pic">
        <img
          src={`https://picsum.photos/id/${id}/160/90`}
          alt="Katherine Johnson"
        />
      </div>
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified && "✅"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
})

export default Video;
