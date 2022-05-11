import { useContext } from "preact/hooks";
import { Fragment } from "preact";

import Logo from "../../../images/logoWidget.svg";
import "../../../css/logoWrap.css";
import Context from "../../../context/Context";

export const LogoWrap = () => {
  const { data } = useContext(Context);

  if (data.type !== 0) return <Fragment />;

  return (
    <div
      className="logo-wrap"
      style={{ bottom: 25, right: 0 }}
      onClick={() => window.open("https://appinion.digital", "_blank").focus()}
    >
      <img src={Logo} alt="logo" />
      <div
        style={{
          color: "white",
          lineHeight: "17px",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 14,
        }}
      >
        <span style={{ fontWeight: 700 }}>ОТЗЫВЫ,</span> КОТОРЫМ
        <br />
        <span style={{ fontWeight: 700 }}>ДОВЕРЯЮТ</span>
      </div>
    </div>
  );
};

export const LogoWrapCollapsed = () => {
  const { setExpand } = useContext(Context);
  return (
    <div
      className="logo-wrap"
      style={{ bottom: 10, right: -30 }}
      onClick={() => setExpand(true)}
    >
      <img src={Logo} alt="logo" />
    </div>
  );
};
