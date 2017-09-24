import * as React from "react";
import * as ReactDOM from "react-dom";

import PVM from "./components/Hello";

ReactDOM.render(
    <PVM message="Hi PVM" />,
    document.getElementById("example")
);