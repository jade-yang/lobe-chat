import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

const Layout = ({ children }) => {
  return (
    <SpeedInsights>
      <div>
        {children}
      </div>
    </SpeedInsights>
  );
};

export default Layout;
