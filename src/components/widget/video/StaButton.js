import { useContext } from "preact/hooks";
import { Fragment } from "preact";
import "../../../css/staButton.css";

import Context from "../../../context/Context";

const StaButton = () => {
  const { data } = useContext(Context);

  if (!data.staButton) return <Fragment />;

  return (
    //eslint-disable-next-line
    <a href={data.staLink} target="_blank" referrerPolicy="no-referrer">
      <div
        className="sta-button"
        style={{
          backgroundColor: data.mainColor,
        }}
      >
        <p
          style={{
            color: data.textColor,
          }}
        >
          {data.staText}
        </p>
      </div>
    </a>
  );
};

export default StaButton;
