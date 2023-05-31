import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { Suspense } from "react";
import paths from "../paths";
import { LazyLoginPage } from "../lazyComponents/lazyComponents";

const routes: RouteObject[] = [
  {
    path: `${paths.root}`,
    element: <App />,
    children: [
      { index: true, element: <Navigate to={`${paths.login}`} replace /> },
      {
        path: `${paths.login}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
