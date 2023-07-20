// imports
import React from "react";
import { Outlet } from "react-router";

// import components
import UpperNavbar from "./components/upper_navbar/UpperNavbar";

// Layout
export default function Layout() {
	return (
		<>
			<UpperNavbar />
			<Outlet />
		</>
	);
}
