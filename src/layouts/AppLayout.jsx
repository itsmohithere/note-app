import PropTypes from "prop-types";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import { ForDevice } from "media-query-react";

export default function AppLayout({ children }) {
	
	return (
		<div className="grid grid-cols-appLayout grid-rows-appLayout ts:grid-cols-appLayoutDesktop border-2 border-black h-screen">
			<Header />
			<ForDevice deviceName={["tablet", "desktop"]}>
				<SideBar />
			</ForDevice>
			<main className="border-2 border-blue-600">
				{children}
			</main>
			<Footer/>
		</div>
	);
}

AppLayout.propTypes = {
	children: PropTypes.object.isRequired,
};
