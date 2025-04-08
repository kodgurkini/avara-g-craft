import { Outlet, useLocation } from "react-router-dom";
import Logo from "../components/logo";
import NavItem from "../components/nav-item";
import { useTabIndicator } from "../hooks/use-tab-indicator";
import { useEffect } from "react";
import { AppIcon, FeedIcon, GraphIcon } from "../components/icons";

let isFirstLoad = true;

function RootLayout() {
  const tabsListRef = useTabIndicator();
  const location = useLocation();

  useEffect(() => {
    isFirstLoad = false;
  }, []);

  return (
    <div className="app">
      {!isFirstLoad && <div className="progress-bar" key={location.pathname} />}
      <header className="app-header">
        <div className="header-top">
          {/*  <div className="header-top-content">
            <Logo />
          </div> */}
        </div>
        <div className="header-bottom">
          <div className="header-bottom-content">
            <nav
              className="main-nav"
              ref={tabsListRef}
              style={
                {
                  "--indicator-left": "0px",
                  "--indicator-width": "97.25px",
                  position: "relative",
                } as React.CSSProperties
              }
            >
              <span
                className="indicator"
                style={{
                  left: "var(--indicator-left)",
                  width: "var(--indicator-width)",
                }}
              />
              <NavItem to="/" icon={<AppIcon />}>
                App Card
              </NavItem>
              <NavItem to="/social-graph" icon={<GraphIcon />}>
                Social Graph
              </NavItem>
              <NavItem to="/feed" icon={<FeedIcon />}>
                Feed
              </NavItem>
            </nav>
            {/* <div className="right-nav">
              <Link to="/help">Help & Support</Link>
            </div> */}
          </div>
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
