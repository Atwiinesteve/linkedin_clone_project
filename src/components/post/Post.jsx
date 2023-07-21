// imports
import React from "react";

// icons

// styles
import "../post/post.css";
import { Avatar } from "@mui/material";

// components
export default function Post() {
	return (
		<>
			<div className="post__card">
				<div className="profile__details__header">
					<div className="profile__details">
						<Avatar />
						<div className="details">
							<div className="name__date">
								<p>Alice Blake</p>
								<p>. 1st</p>
							</div>
							<div className="occupation">
								<p>Building a Digital Media Co. | Marketing Marverick</p>
							</div>
						</div>
					</div>
					<div className="time">
						<p>29 min ago</p>
						<div>...</div>
					</div>
				</div>
				<div className="post__data">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						minus architecto voluptatem totam cum. Nihil vel deserunt nulla
						dolorum obcaecati, quisquam optio incidunt quod a? Inventore,
						laborum officiis. Error, obcaecati. Porro fuga voluptate unde
						nesciunt iure natus dignissimos voluptas ipsum rerum aspernatur
						excepturi culpa obcaecati facere placeat vitae laboriosam, maxime id
						optio maiores modi. Repellendus doloribus accusantium minus
						laboriosam repellat nesciunt culpa id perspiciatis veniam
						voluptatibus soluta et dolores vero molestias cupiditate fugiat,
						quasi veritatis sapiente necessitatibus similique fugit! Mollitia
						maiores pariatur voluptatum sunt omnis, quaerat a aut fugit saepe
						velit doloremque. Laboriosam asperiores aperiam dolorum vel error,
						provident tempora.
					</p>
				</div>
                <div className="post__image">
                    <img src="" alt="" />
                    <div className="rating"></div>
                </div>
                <div className="like__comment__share__send">
                    <div className="like">
                        <p>Like</p>
                    </div>
                    <div className="comment">
                        <p>Comment</p>
                    </div>
                    <div className="share">
                        <p>Share</p>
                    </div>
                    <div className="send">
                        <p>Send</p>
                    </div>
                </div>
			</div>
		</>
	);
}
