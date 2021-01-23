import PropTypes from "prop-types";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";

export default function AppLayout({ children }) {
	return (
		<div className="grid gap-x-2 gap-y-0 h-screen grid-rows-4	grid-flow-row border-2 border-black">
			<Header />
			<SideBar />
			<main className="border-2 border-blue-600 col-span-9">
				{children}
			</main>
			<Footer/>
		</div>
	);
}

AppLayout.propTypes = {
	children: PropTypes.object.isRequired,
};
