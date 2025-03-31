import { Outlet } from "react-router-dom";
import Logo from "../components/logo";
import NavItem from "../components/nav-item";
import { useTabIndicator } from "../hooks/use-tab-indicator";

function RootLayout() {
  const tabsListRef = useTabIndicator();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <div className="header-top-content">
            <Logo />
          </div>
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
              <NavItem
                to="/"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                App Card
              </NavItem>
              <NavItem
                to="/social-graph"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                Social Graph
              </NavItem>
              <NavItem
                to="/feed"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
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
