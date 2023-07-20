// imports
import React, { Fragment } from "react";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CiSearch } from "react-icons/ci";

// styles
import "../upper_navbar/upperNavbar.css";

// component
export default function UpperNavbar() {
	return (
		<Fragment>
			<nav>
				<div className="logo__input">
					<div className="logo">
						<LinkedInIcon style={{ fontSize: "37px", color: "white" }} />
					</div>
					<div className="input">
						<CiSearch
							className="search"
							style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}
						/>
						<input type="search" placeholder="Search" />
					</div>
				</div>
				<div className="notifications__profile">
					<div className="notification__bell"></div>
					<div className="profile__image"></div>
					<div className="grid__image"></div>
					<div className="advert"></div>
				</div>
			</nav>
		</Fragment>
	);
}
