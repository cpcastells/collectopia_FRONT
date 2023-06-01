import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../../pages/login/LoginPage"));

export const LazyCollectionPage = lazy(
  () => import("../../pages/collection/CollectionPage")
);
