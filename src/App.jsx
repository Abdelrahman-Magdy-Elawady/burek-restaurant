import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//--------------------pages------------------------------
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import FranchisePage from "./pages/FranchisePage";
import ReviewsPage from "./pages/ReviewsPage";
import AboutPage from "./pages/AboutPage";
import VacanciesPage from "./pages/VacanciesPage";
//--------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <>Page is Not found</>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:name",
        element: <CategoryPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/franchise",
        element: <FranchisePage />,
      },
      {
        path: "/reviews",
        element: <ReviewsPage />,
      },
      {
        path: "/aboutUs",
        element: <AboutPage />,
      },
      {
        path: "/vacancies",
        element: <VacanciesPage />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
