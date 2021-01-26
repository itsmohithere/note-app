import React from "react";
import ToggleMenu from "../toggleMenu/ToggleMenu";
import { ForDevice } from "media-query-react";

export default function Header() {

	const classes = {
		header: "border-2 border-red col-span-2",
	};
	return (
		<header className={classes.header}>
			<section>
        Mohit Saxena
			</section>
			<ForDevice deviceName={["mobile", "mobileLandscape"]}>
				<ToggleMenu />
			</ForDevice>
		</header>
	);
}
