import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProductPage from "../pages/ProductPage/ProductPage";

 const router = createBrowserRouter([
	{
	  path: "/",
	  element: <MainLayout></MainLayout>,
	  children: [
		{
			path: "/",
			element: <ProductPage></ProductPage>

		}
	  ]
	},
  ]);
  export default router