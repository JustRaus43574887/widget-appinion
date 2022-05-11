import { useCallback, useContext, useRef, useState } from "preact/hooks";
import { Fragment } from "preact";

import Context from "../../../context/Context";
import { videoEndpoint } from "../../../utils/constants";
import ExpandFalse from "./ExpandFalse";
import ExpandTrue from "./ExpandTrue";
import { LogoWrap, LogoWrapCollapsed } from "./LogoWrap";
import Gallery from "./Gallery";
import StaButton from "./StaButton";

const Video = ({ transition }) => {
  const videoRef = useRef();
  const { data, expand } = useContext(Context);
  const [video, setVideo] = useState(0);

  const Controls = useCallback(() => {
    if (transition) return <Fragment />;
    if (expand)
      return (
        <>
          <ExpandTrue videoRef={videoRef} />
          {data.type === 1 && <Gallery setVideo={setVideo} vid={video} />}
          <StaButton />
          <LogoWrap />
        </>
      );
    else
      return (
        <>
          <ExpandFalse videoRef={videoRef} />
          <LogoWrapCollapsed />
        </>
      );
    //eslint-disable-next-line
  }, [transition, data, video]);

  return (
    <Fragment>
      <video
        ref={videoRef}
        src={videoEndpoint + data.videos[video].path}
        style={{
          borderRadius: expand ? 35 : 16,
        }}
        playsInline
        muted
        autoPlay
        loop
        disablePictureInPicture
      >
        <source
          src={videoEndpoint + data.videos[video].path}
          type={data.videos[video].mimetype}
        />
      </video>

      <div
        className="shadow"
        style={{
          borderRadius: expand ? 35 : 16,
          top: expand ? 7 : 5,
          bottom: expand ? 6.5 : 5,
          left: expand ? 7 : 5,
          right: expand ? 7 : 5,
        }}
      />

      <Controls />
    </Fragment>
  );
};

export default Video;
