import React from "react";

const CategoryTitle = ({ title }) => {
	return (
		<div className="container vertical-center" id="partI">
			<div className="row text-center">
				<div className="col-md-12">
					<h1> {title}</h1>
				</div>
			</div>
		</div>
	);
};

export default CategoryTitle;
