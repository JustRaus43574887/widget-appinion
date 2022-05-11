import { useContext } from "preact/hooks";
import Context from "../../context/Context";

import Text from "../Text/Text";

const Info = ({ transition }) => {
  const { data, expand } = useContext(Context);

  return (
    <div className="info" style={{ marginTop: expand ? 0 : -100 }}>
      <Text
        weight={700}
        size={expand ? (transition ? "0" : "18px") : "0"}
        lineHeight="22px"
        letterSpacing="0.02em"
        color={transition ? "white" : "#404040"}
      >
        {data.name}
      </Text>
      <div
        className="divider"
        style={{ backgroundColor: transition ? "white" : data.mainColor }}
      />
      <Text
        size={expand ? (transition ? "0" : "12px") : "0"}
        lineHeight="15px"
        letterSpacing="0.02em"
        color={transition ? "white" : "#3A3A3A"}
      >
        {data.position}
      </Text>
    </div>
  );
};

export default Info;
