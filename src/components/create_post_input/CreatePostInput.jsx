// imports
import React from "react";

// icons
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";

// styles
import "../create_post_input/createPostInput.css";

// components
export default function CreatePostInput() {
	return (
		<>
			<div className="post__input">
				<input type="text" placeholder="Create a post .." />
				<div className="icons">
					<AiOutlineCamera color="blue" fontSize={"19px"} cursor={"pointer"} />
					<AiOutlineVideoCamera
						color="blue"
						fontSize={"19px"}
						cursor={"pointer"}
					/>
					<AiOutlineCalendar
						color="blue"
						fontSize={"19px"}
						cursor={"pointer"}
					/>
					<BiNotepad color="blue" fontSize={"19px"} cursor={"pointer"} />
				</div>
			</div>
		</>
	);
}
