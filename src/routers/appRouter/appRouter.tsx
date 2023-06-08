import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { Suspense } from "react";
import paths from "../paths";
import {
  LazyAddBoardgamePage,
  LazyCollectionPage,
  LazyLoginPage,
} from "../lazyComponents/lazyComponents";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <App />,
    children: [
      { index: true, element: <Navigate to={paths.login} replace /> },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.collection,
        element: (
          <Suspense>
            <LazyCollectionPage />
          </Suspense>
        ),
      },
      {
        path: paths.addBoardgame,
        element: (
          <Suspense>
            <LazyAddBoardgamePage />
          </Suspense>
        ),
      },

      { path: paths.notFound, element: <NotFoundPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
