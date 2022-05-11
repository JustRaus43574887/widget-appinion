import { useContext } from "preact/hooks";
import Context from "../../../context/Context";
import Video from "./Video";

const VideoWrap = ({ transition }) => {
  const { data, expand } = useContext(Context);
  return (
    <div
      className="video-wrap"
      style={{
        backgroundColor: data.mainColor,
        borderRadius: expand ? 38 : 18,
        padding: expand ? 7 : 5,
      }}
    >
      <Video transition={transition} />
    </div>
  );
};

export default VideoWrap;
