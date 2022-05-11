import { useContext } from "preact/hooks";
import Context from "../../../context/Context";
import "../../../css/gallery.css";

const Gallery = ({ setVideo, vid }) => {
  const { data } = useContext(Context);

  return (
    <div className="gallery-controlls">
      {data.videos.map((video, i) => {
        return (
          <div className="controll-item" key={i}>
            <video
              onClick={() => {
                setVideo(i);
              }}
              src={"https://api.appinion.digital" + video.path}
              style={{
                border: `2px solid ${data.mainColor}`,
                backgroundColor: data.mainColor,
                opacity: i === vid ? 1 : 0.5,
              }}
              muted
              loop={false}
              autoPlay={false}
              playsInline
              disablePictureInPicture
            />
            <div
              style={{
                backgroundColor: `${data.mainColor}${i === vid ? "FF" : "80"}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
