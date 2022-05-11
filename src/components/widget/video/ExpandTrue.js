import { useEffect, useState, useContext } from "preact/hooks";
import { Fragment } from "preact";
import "../../../css/expandTrue.css";

import Close from "../../../images/close.svg";
import Pause from "../../../images/pause.svg";
import Play from "../../../images/play.svg";
import Replay from "../../../images/replay.svg";
import Mute from "../../../images/mute.svg";
import Value from "../../../images/value.svg";
import Context from "../../../context/Context";

const ExpandTrue = ({ videoRef }) => {
  const { setExpand, data } = useContext(Context);
  const [mute, setMute] = useState(videoRef.current.muted);
  const [play, setPlay] = useState(!videoRef.current.paused);

  useEffect(() => {
    videoRef.current.onplay = () => setPlay(true);
    videoRef.current.onpause = () => setPlay(false);
  }, [videoRef]);

  useEffect(() => {
    videoRef.current.muted = mute;
  }, [mute, videoRef]);

  return (
    <Fragment>
      <div className="play-overlay" />

      <img
        src={Close}
        alt="close"
        onClick={() => {
          setExpand(false);
          videoRef.current.muted = true;
        }}
        className="widget-close"
      />

      {play ? (
        <img
          onClick={() => videoRef.current.pause()}
          src={Pause}
          alt="pause"
          className="widget-pause"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      ) : (
        <img
          onClick={() => videoRef.current.play()}
          src={Play}
          alt="play"
          className="widget-pause"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      )}

      <img
        onClick={() => (videoRef.current.currentTime = 0)}
        src={Replay}
        alt="replay"
        className="widget-replay"
        style={{ bottom: data.type !== 0 && 30 }}
      />

      {mute ? (
        <img
          onClick={() => setMute(!mute)}
          src={Value}
          alt="value"
          className="widget-mute"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      ) : (
        <img
          onClick={() => setMute(!mute)}
          src={Mute}
          alt="mute"
          className="widget-mute"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      )}

      {/* {play ? (
        <img
          src={Pause}
          alt="pause"
          onClick={() => setPlay(false)}
          className="widget-pause"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      ) : (
        <img
          src={Play}
          alt="play"
          onClick={() => setPlay(true)}
          className="widget-pause"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      )}

      <img
        onClick={() => (videoRef.current.currentTime = 0)}
        src={Replay}
        alt="replay"
        className="widget-replay"
        style={{ bottom: data.type !== 0 && 30 }}
      />

      {mute ? (
        <img
          onClick={() => setMute(false)}
          src={Value}
          alt="value"
          className="widget-mute"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      ) : (
        <img
          onClick={() => setMute(true)}
          src={Mute}
          alt="mute"
          className="widget-mute"
          style={{ bottom: data.type !== 0 && 30 }}
        />
      )} */}
    </Fragment>
  );
};

export default ExpandTrue;
