import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = lazy(() => import("./App"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AdminPage = lazy(() => import("./pages/AdminPage/AdminPage"));
const Auth1 = lazy(() => import("./service/Auth1/Auth1.jsx"));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/AdminPage",
        element: <Auth1 />,
        children: [
          {
            path: "AdminPage",
            element: <AdminPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: '/product-page/:productId',
    element: <ProductPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...Loading</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
