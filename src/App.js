// imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Layout from "./Layout";
import Home from "./pages/home/Home";

// main
export default function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index path={"/"} element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}
