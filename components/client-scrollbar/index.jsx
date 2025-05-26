"use client";
import { forwardRef, memo } from "react";
import SimpleBar from "simplebar-react";

/**
 * https://www.npmjs.com/package/simplebar-react?activeTab=readme
 */
function ClientScrollbar({ children, ...other }, ref) {
  return (
    <SimpleBar
      className="h-full"
      scrollableNodeProps={{ ref }}
      clickOnTrack={false}
      {...other}
    >
      {children}
    </SimpleBar>
  );
}
export default memo(forwardRef(ClientScrollbar));
