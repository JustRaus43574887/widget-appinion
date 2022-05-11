import { useContext } from "preact/hooks";
import { Fragment } from "preact";
import "../../../css/expandFalse.css";

import Context from "../../../context/Context";

import Close from "../../../images/close.svg";
import Play from "../../../images/PlayBtn.svg";

const ExpandFalse = ({ videoRef }) => {
  const { setExpand, setClose, data, expand } = useContext(Context);

  return (
    <Fragment>
      <div
        onClick={() => {
          setExpand(true);
          videoRef.current.muted = false;
          videoRef.current.currentTime = 0;
        }}
        className="widget-video-overlay"
        style={{
          borderRadius: expand ? 35 : 16,
          top: 5,
          bottom: 5,
          left: 5,
          right: 5,
        }}
      >
        <img
          src={Close}
          alt="close"
          className="widget-remove"
          onClick={() => {
            setClose(true);
            videoRef.current.muted = true;
            videoRef.current.pause();
          }}
        />

        <div
          className="widget-video-play"
          style={{
            "--first-offset": data.mainColor + "26",
            "--second-offset": data.mainColor + "4D",
            backgroundColor: data.mainColor,
          }}
        >
          <img src={Play} alt="ply" />
        </div>
      </div>
    </Fragment>
  );
};

export default ExpandFalse;
