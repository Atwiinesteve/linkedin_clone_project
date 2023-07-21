// IMPORTS
import React, { Fragment } from "react";

// icons
import { FiHash } from "react-icons/fi";

// styles
import "../recent/recent.css";
import { Link } from "@mui/material";

// component
export default function Recent({ recent }) {
	return (
		<Fragment>
			<div className="recent__container">
				<div className="recent__header">
					<p>Recent</p>
					<Link>see all</Link>
				</div>
				<div className="recent__data">
					<div className="icon">
						<FiHash />
					</div>
					<div className="text">
						<Link>{recent.text}</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
