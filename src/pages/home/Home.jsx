import React, { Fragment } from "react";
import MainNavbar from "../../components/main_navbar/MainNavbar";

// component imports
import UserProfile from "../../components/user_profile/UserProfile";

// styles
import "../home/home.css";
import FeaturedStories from "../../components/featured_stories/FeaturedStories";

// components
export default function Home() {
	return (
		<Fragment>
			<MainNavbar />
			<div className="main__container" style={{marginTop: "4rem"}}>
				<UserProfile  />
				<FeaturedStories />
			</div>
		</Fragment>
	);
}
