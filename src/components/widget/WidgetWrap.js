import { useRef } from "preact/hooks";
import { Fragment } from "preact";
import { Suspense, lazy } from "preact/compat";
import "../../css/widgetWrap.css";

import useResize from "../../hooks/resize.hook";
import ErrorBoundary from "../rander/ErrorBoundary";
import Info from "../widget/Info";

const Widget = lazy(() => import("../widget/Widget"));

const WidgetWrap = () => {
  const transitionRef = useRef();
  const { wrapStyle, compStyle, transition } = useResize(transitionRef);

  return (
    <div className="comp-wrap" style={compStyle}>
      <div ref={transitionRef} className="widget-wrap" style={wrapStyle}>
        <ErrorBoundary>
          <Suspense fallback={<Fragment />}>
            <Widget transition={transition} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <Info transition={transition} />
    </div>
  );
};

export default WidgetWrap;
