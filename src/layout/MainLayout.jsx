import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";


// const MainLayout = () => {
// 	return (
// 		<div className="max-w-[85%]  mx-auto">
// 			<Navbar></Navbar>
// 			<Outlet></Outlet>
// 			<Footer></Footer>
// 		</div>
// 	);
// };
const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex-grow max-w-[85%] mx-auto">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;