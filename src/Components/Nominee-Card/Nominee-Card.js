import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const NomineeCard = ({ name, img, id, category, selectItem, className }) => {
	return (
		<div className={`col ${className}`}>
			<div className="card h-100 shadow-sm">
				<div className="text-center">
					<div className="img-hover-zoom img-hover-zoom--colorize">
						<img src={img} alt="Another Image zoom-on-hover effect" />
					</div>
				</div>
				<div className="card-body">
					<div className="clearfix mb-3"></div>
					<div className="my-2 text-center">
						<h6>{name}</h6>
					</div>
					<Button
						className="text-center w-100"
						variant="primary"
						onClick={() => {
							selectItem(name, category);
						}}>
						Select
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NomineeCard;
