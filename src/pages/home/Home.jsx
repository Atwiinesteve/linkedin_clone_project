import React, { Fragment } from "react";
import MainNavbar from "../../components/main_navbar/MainNavbar";

// component imports
import UserProfile from "../../components/user_profile/UserProfile";

// styles
import "../home/home.css";

// components
export default function Home() {
	return (
		<Fragment>
			<MainNavbar />
			<div className="main__container">
				<UserProfile />
				<div
					className="two"
					style={{
						color: "white",
						background: "green",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
            padding: "1.5rem 1rem",
            fontSize: "1.4rem"
					}}>
					data loading..
				</div>
			</div>
		</Fragment>
	);
}
