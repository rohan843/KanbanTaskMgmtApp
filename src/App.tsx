import React from "react";
import useLayoutProvider from "./hooks/useLayoutProvider";

const App: React.FC = () => {
  return <div className="w-full h-full">{useLayoutProvider().layout}</div>;
};

export default App;
