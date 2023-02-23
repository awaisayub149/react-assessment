import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SuccessModal = ({ show, handleClose, selectedItems }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Success</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h1>Here is the Selection you made:</h1>
				{selectedItems.map((item, index) => {
					return (
						<div key={index}>
							<p>
								{item.category}:
								<span className="ms-2">
									{item.selection ? item.selection : "Not Selected"}
								</span>
							</p>
						</div>
					);
				})}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default SuccessModal;
