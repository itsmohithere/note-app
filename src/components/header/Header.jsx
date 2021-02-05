import React, { useState } from "react";
import ToggleMenu from "../toggleMenu/ToggleMenu";

export default function Header() {
	const [toggle, setToggle] = useState(false); //toggle state default value is false, we can change the value of toggle using setToggle.
	function navToggle() {
		setToggle(!toggle); //on btn click the toggle value will be changed opposite.
	}

	const classes = {
		header: "border-2 border-red col-span-2 clear-both",
	};
	return (
		<header className={classes.header}>
			<section className="flex">
				<div className="flex-1 flex justify-between items-center">
					<a href="#" className="text-xl">NOTE-APP</a>
				</div>
				<button className="pointer-cursor ts:hidden iPads:hidden ds:hidden" onClick={navToggle}>
					<svg className="fill-current text-gray-900"
						xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
						<title>menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</section>
			<ToggleMenu toggle={toggle} />
		</header>
	);
}
