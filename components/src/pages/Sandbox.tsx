import React from "react";
import RuneLinkBox from "../components/RuneLinkBox";

const Sandbox: React.FC = () => {

	return (
		<div className="m-3">
			<div style={{height: 10, backgroundColor: "red"}}>

			</div>
			<RuneLinkBox title="Community">
				<div className="d-flex justify-content-end">
					<a className="text-limeGreen" href="#" style={{fontSize: "1.3em"}}>
						Log in
					</a>
				</div>
			</RuneLinkBox>
		</div>
	);
};

export default Sandbox;
