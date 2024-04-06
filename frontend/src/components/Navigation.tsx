import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";

const Navigation = () => {
	const nav = useNavigate();

	//route for add address page
	const gotoAdd = () => {
		nav("/nuova");
	};

	return (
		<Container>
			<h2 className="p-2 m-1" onClick={gotoAdd}>
				<PlusCircleFill />
			</h2>
		</Container>
	);
};
export default Navigation;
