import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Import layout
import RootLayout from "./layouts/root-layout";

// Import pages
import AppCardPage from "./pages/app-card-page";
import HelpPage from "./pages/help-page";
import SocialGraphPage from "./pages/social-graph";
import FeedPage from "./pages/feed-page";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AppCardPage />,
      },
      {
        path: "social-graph",
        element: <SocialGraphPage />,
      },
      {
        path: "feed",
        element: <FeedPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
