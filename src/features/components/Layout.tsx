const Layout: React.FC = (props) => {
  return (
    <div id="layout">
      <div className="selection:text-white selection:bg-blue-200 bg-app_dark w-full min-h-screen">
      {props.children}
      </div>
    </div>
  );
};

export default Layout;