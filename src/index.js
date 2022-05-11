import { render } from "preact";

import Provider from "./components/Provider";

export function init(token) {
  const widDiv = document.createElement("div");
  widDiv.id = "appinion-widget-root";
  document.body.append(widDiv);

  render(
    <Provider token={token} />,
    document.getElementById("appinion-widget-root")
  );
}

if (module.hot) init("60785926a7001004f254a63e");
