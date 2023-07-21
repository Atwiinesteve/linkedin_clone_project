// imports
import React from "react";

// icons
import { Avatar } from "@mui/material";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDots } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { GrSend } from "react-icons/gr";

// styles
import "../post/post.css";

// components
export default function Post({ post }) {
	return (
		<>
			<div className="post__card">
				<div className="profile__details__header">
					<div className="profile__details">
						<Avatar
							style={{
								marginRight: "1rem",
								objectFit: "cover",
							}}
							src={post.avatar_image}
						/>
						<div className="details">
							<div
								className="name__date"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "left",
								}}>
								<p>{post.name}&nbsp;</p>
								<p>{post.when}</p>
							</div>
							<div
								className="occupation"
								style={{ fontSize: "14px", letterSpacing: "0px" }}>
								<p>{post.occupation}</p>
							</div>
						</div>
					</div>
					<div
						className="time"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "left",
						}}>
						<p style={{ marginRight: "1rem" }}>{post.duration}</p>
						<div>...</div>
					</div>
				</div>
				<div className="post__data">
					<p style={{lineHeight: "1.7"}}>{post.text}</p>
				</div>
				<div className="post__image">
					<img
						style={{
							width: "100%",
							height: "300px",
							objectFit: "cover",
							margin: "1rem 0 4px 0",
						}}
						src={post.post_image}
						alt=""
					/>
					<div className="rating">
						<div className="thumbs">
							<FiThumbsUp fontSize={"10px"} />
						</div>
						<p>2{post.likes}</p>
						<div className="comments">
							<BiCommentDots fontSize={"10px"} />
						</div>
						<p>{post.comments}</p>
					</div>
				</div>
				<div className="like__comment__share__send">
					<div className="like">
						<FiThumbsUp fontSize={"20px"} />
						<p>Like</p>
					</div>
					<div className="comment">
						<BiCommentDots fontSize={"20px"} />
						<p>Comment</p>
					</div>
					<div className="share">
						<PiShareFatLight fontSize={"20px"} />
						<p>Share</p>
					</div>
					<div className="send">
						<GrSend fontSize={"20px"} />
						<p>Send</p>
					</div>
				</div>
			</div>
		</>
	);
}
