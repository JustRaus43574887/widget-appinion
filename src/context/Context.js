import { createContext } from "preact";

const Context = createContext({
  data: null,
  expand: null,
  setExpand: () => {},
  setClose: () => {},
});

export default Context;
