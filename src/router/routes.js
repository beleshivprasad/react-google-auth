import Authenticate from "../components/Authenticate";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import Loader from "../components/Loader";

const routes = [
  {
    path: "/",
    element: (
      <Authenticate>
        <Dashboard />
      </Authenticate>
    ),
    loader: Loader
  },
  {
    path: "/login",
    element: (
      <Authenticate>
        <Login />
      </Authenticate>
    ),
    loader: Loader
  },
  {
    path: "*",
    element: (
      <Authenticate>
        <NotFound />
      </Authenticate>
    ),
    loader: Loader
  }
];

export default routes;
