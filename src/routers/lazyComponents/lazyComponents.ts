import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);

export const LazyCollectionPage = lazy(
  () => import("../../pages/CollectionPage/CollectionPage")
);

export const LazyAddBoardgamePage = lazy(
  () => import("../../pages/AddBoardgamePage/AddBoardgamePage")
);

export const LazyDetailPage = lazy(
  () => import("../../pages/DetailPage/DetailPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);
