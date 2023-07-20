// imports
import React, { Fragment } from "react";
import { Link } from "@mui/material";

// icons
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SlPeople } from "react-icons/sl";

// styles
import "../main_navbar/mainNavbar.css";

// component
export default function MainNavbar() {
	return (
		<Fragment>
			<ul className="links">
				<li>
					<HomeOutlinedIcon style={{ fontSize: "37px" }} />
					<span className="counter">o</span>
					<Link to={"/"}>home</Link>
				</li>
				<li>
					<SlPeople style={{ fontSize: "37px" }} />
					<span className="counter">12</span>
					<Link to={"/"}>my networks</Link>
				</li>
				<li>
					<BusinessCenterOutlinedIcon style={{ fontSize: "37px" }} />
					<Link to={"/"}>jobs</Link>
				</li>
				<li>
					<ChatOutlinedIcon style={{ fontSize: "37px" }} />
					<Link to={"/"}>my messages</Link>
				</li>
			</ul>
		</Fragment>
	);
}
