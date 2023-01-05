import BottomHeader from "./bottomHeader";
import "./Header.scss";
import TopHeader from "./topHeader";

function Header() {
  return (
    <header className="header-top">
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
