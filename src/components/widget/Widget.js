import { useContext } from "preact/hooks";
import Context from "../../context/Context";
import "../../css/widget.css";

import VideoWrap from "./video/VideoWrap";

const Widget = ({ transition }) => {
  const { expand } = useContext(Context);

  return (
    <div
      className="widget"
      style={{
        borderRadius: expand ? 38 : 18,
      }}
    >
      <VideoWrap transition={transition} />
    </div>
  );
};

export default Widget;
