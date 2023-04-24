import Header from "../components/Header";
import { memo } from "react";
function DefaultLayout({ children }) {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="content" style={{ background : "#f9f9f9"}} >{children}</div>
    </div>
  );
}

export default memo(DefaultLayout);
