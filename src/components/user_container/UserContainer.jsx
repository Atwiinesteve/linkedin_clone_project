// IMPORTS
import React, { Fragment } from "react";

// icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Avatar } from "@mui/material";

// styles
import "../user_container/userContainer.css";

// component
export default function UserContainer() {
	return (
		<Fragment>
			<div className="user__container">
				<img
					className="background__image"
					src={
						"https://images.unsplash.com/photo-1490772888775-55fceea286b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
					}
					alt="beach"
				/>
				<div
					className="user__avatar_location"
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginLeft: "40px",
					}}>
					<Avatar
						style={{
							objectFit: "cover",
							position: "absolute",
							top: "-90px",
							left: "-130px",
							width: "180px",
							height: "180px",
							border: "8px solid white",
						}}
						src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
					/>
					<div className="location">
						<LocationOnOutlinedIcon
							style={{ color: "blue", marginRight: "14px" }}
						/>
						<p>Entebbe, Uganda</p>
					</div>
				</div>
				<div className="user__description">
					<div className="name">Farak Hamud Ique</div>
					<div className="occupation">UI/UI Designer</div>
					<div className="other__details">
						<div className="profile">
							<p>Profile</p>
							<div className="numbers">
								<RemoveRedEyeOutlinedIcon style={{ color: "blue" }} />
								<p>123</p>
							</div>
						</div>
						<div className="posts">
							<p>Posts</p>
							<div className="numbers">
								<RemoveRedEyeOutlinedIcon style={{ color: "blue" }} />
								<p>123</p>
							</div>
						</div>
						<div className="premium">
							<p style={{
                                padding: "0.7rem 1rem",
                                color: "black",
                                backgroundColor: "cyan",
                                fontWeight: "bolder"
                            }}>Go Premium</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}