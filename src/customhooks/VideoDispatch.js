import { useContext } from "react"
import VideoDispatch from "../context/VideoDispatch"


function useDispatch() {
return useContext(VideoDispatch)

}
export default useDispatch