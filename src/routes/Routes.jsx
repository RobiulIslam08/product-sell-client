import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProductPage from "../pages/ProductPage/ProductPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ContactPage from "../pages/ContactPage/ContactPage";

 const router = createBrowserRouter([
	{
	  path: "/",
	  element: <MainLayout></MainLayout>,
	  children: [
		{
			path: "/",
			element: <ProductPage></ProductPage>
		},
		{
			path: 'sign-up',
			element: <LoginPage></LoginPage>
		},
		{
			path: 'sign-in',
			element: <RegisterPage></RegisterPage>
		},
		{
			path:'contact-page',
			element: <ContactPage></ContactPage>
		}
	  ]
	},
  ]);
  export default router