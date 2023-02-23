import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { GetMovies } from "../../action/action";
import { GlobalState } from "../../context/globalContext";
import { MOVIES } from "../../helpers/constants";
import CategoryTitle from "../Category-Title/Category-Title";
import NomineeCard from "../Nominee-Card/Nominee-Card";
import SuccessModal from "../Success-Modal/Success-Modal";
const Ballot = () => {
	const { state, dispatch } = GlobalState();
	const [items, setItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [show, setShow] = useState(false);
	useEffect(() => {
		async function get() {
			const response = await GetMovies();
			if (response.length)
				dispatch({
					type: MOVIES,
					payload: response,
				});
			const selected = [];
			response.forEach((ele) => {
				selected.push({
					category: ele.title,
				});
			});
			setSelectedItems(selected);
		}
		get();
	}, []);

	return (
		<div>
			<nav className="navbar justify-content-center">
				<span className="navbar-brand mb-0 h1">AWARDS 2021</span>
			</nav>
			{state?.movies?.map((item) => {
				return (
					<div key={item.id} className="mt-3">
						<CategoryTitle title={item.title} />
						<div className="container p-5">
							<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
								{item.items.map((nomination) => {
									return (
										<div key={nomination.id}>
											<NomineeCard
												img={nomination.photoUrL}
												name={nomination.title}
												id={nomination.id}
												category={item.title}
												selectItem={(id, category) => {
													const selected = selectedItems.findIndex(
														(ele) => ele.category === category
													);
													selectedItems[selected].selection = id;
													setSelectedItems(selectedItems);
												}}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
			<div className="d-flex justify-content-end">
				<Button
					variant="primary"
					className="mx-auto primary-button"
					onClick={() => {
						setShow(true);
					}}>
					Submit Data
				</Button>
			</div>

			<SuccessModal
				show={show}
				handleClose={() => {
					setShow(false);
				}}
				selectedItems={selectedItems}
			/>
		</div>
	);
};

export default Ballot;
