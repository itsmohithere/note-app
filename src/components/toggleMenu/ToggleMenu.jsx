import React from "react";

// eslint-disable-next-line react/prop-types
export default function ToggleMenu({ toggle }) {
	const classes = {
		menuShow: "block md:flex md:items-center md:w-auto w-full",
		menuHide: "hidden",
	};

	return (
		<section>
			<nav className={`${toggle ? classes.menuShow : classes.menuHide}`}>
				<ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
					<li><a className="md:p-4 py-3 px-0 block" href="#">AboutUs</a></li>
					<li><a className="md:p-4 py-3 px-0 block" href="#">Treatments</a></li>
					<li><a className="md:p-4 py-3 px-0 block" href="#">Blog</a></li>
					<li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact Us</a></li>
				</ul>
			</nav>
		</section>
	);
}
