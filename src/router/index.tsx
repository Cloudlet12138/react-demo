import { lazy, Suspense } from "react";
import Home from "../views/Home";
import { Navigate } from "react-router-dom";

const Page1 = lazy(() => import("../views/Page1"))
const Page2= lazy(() => import("../views/Page2"));

const withLoadingComponent = (element: JSX.Element) => {
  return <Suspense fallback={<div>Loding...</div>}>{element}</Suspense>;
};

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: (
            withLoadingComponent(<Page1></Page1>)
        )
      },
      {
        path: "/page2",
        element: (
            withLoadingComponent(<Page2></Page2>)
        )
      },
    ],
  },
];

export default routes;
