import LayoutSite from "@/components/layout/LayoutSite";
import React, { FC } from "react";
interface ILayoutChildrenProps {
  children: React.ReactNode;
}

const layout: FC<ILayoutChildrenProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
