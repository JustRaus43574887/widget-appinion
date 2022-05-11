import { useEffect, useState } from "preact/hooks";
import { Fragment } from "preact";

import WidgetWrap from "./widget/WidgetWrap";
import { fetchData } from "../utils";
import Context from "../context/Context";

const Provider = ({ token }) => {
  const [data, setData] = useState(null);
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    fetchData(token).then((res) => setData(res));
  }, [token]);

  const contextValue = {
    data,
    expand,
    setExpand,
    setClose,
  };

  if (close || !data) return <Fragment />;

  return (
    <Context.Provider value={contextValue}>
      <WidgetWrap />
    </Context.Provider>
  );
};

export default Provider;
