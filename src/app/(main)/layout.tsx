import React from "react";

import Sidebar from "@/components/Sidebar/Sidebar";

const LayoutMain = () => (
  <div className={"grid grid-cols-[13.625rem_1fr] gap-2"}>
    <Sidebar />
    <div />
  </div>
);

export default LayoutMain;
