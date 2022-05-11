import "./text.css";

const Text = ({
  children,
  marginTop = 0,
  weight = 400,
  size = "14px",
  lineHeight = "17px",
  color = "#404040",
  letterSpacing = "auto",
  fontStyle = "normal",
}) => {
  const textStyle = {
    "--margin-top": marginTop,
    "--weight": weight,
    "--size": size,
    "--line-height": lineHeight,
    "--color": color,
    "--letter-spacing": letterSpacing,
    "--style": fontStyle,
  };
  return <p style={textStyle}>{children}</p>;
};

export default Text;
