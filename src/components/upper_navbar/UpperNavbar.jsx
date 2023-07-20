// imports
import React, { Fragment } from "react";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";

// images
import blower from "../../../src/assets/blower.png";

// styles
import "../upper_navbar/upperNavbar.css";
import { Avatar } from "@mui/material";

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
					<div
						className="notification__bell"
						style={{ marginRight: "40px", position: "relative" }}>
						<IoMdNotificationsOutline
							style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}
						/>
						<span
							style={{
								position: "absolute",
								top: "-8px",
								left: "12px",
								color: "white",
								fontSize: "11px",
								fontWeight: "bold",
								backgroundColor: "red",
								width: "20px",
								height: "20px",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							className="counter">
							17
						</span>
					</div>
					<div className="profile__image" style={{ marginRight: "30px" }}>
						<Avatar
							style={{ objectFit: "cover" }}
							src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
						/>
					</div>
					<div className="grid__image" style={{ marginRight: "30px" }}>
						<BsGrid3X3Gap style={{ color: "white" }} />
					</div>
					<div
						className="advert"
						style={{
							backgroundColor: "rgb(9, 248, 228)",
							padding: "0.2rem 0.8rem",
							marginRight: "30px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<p style={{ fontWeight: "bold", fontSize: "13px", color: "black" }}>
							Free I Month Premium
						</p>
						<img
							style={{ width: "30px", height: "30px", marginLeft: "10px" }}
							src={blower}
							alt="wishes"
						/>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}
