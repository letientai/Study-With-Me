import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
