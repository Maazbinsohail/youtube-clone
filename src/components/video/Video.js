import { useContext, useEffect } from "react";
import "./Video.css";
import ThemeContext from "../../context/ThemeContext";
import useDispatch from "../../customhooks/VideoDispatch";

function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
          useEffect(() => {

            
          });
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
}

export default Video;
