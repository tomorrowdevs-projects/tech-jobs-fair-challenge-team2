import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MyHeader = () => {
	return (
		<div className="d-flex justify-content-center align-items-center bg-body-tertiary">
			<Navbar>
				<Container className="d-flex align-items-center">
					<img
						src="https://media.licdn.com/dms/image/C560BAQGqUjBavTbfSw/company-logo_200_200/0/1519908730531?e=2147483647&v=beta&t=d0ALUs37weNX0070nXLwFBKKgv-i5wFYR_b4F-zweqg"
						width="100"
						height="100"
						className="d-inline-block align-top mr-3 rounded-5"
						alt="TechSolutions Inc. logo"
					/>
					<Navbar.Brand className="mx-3">Tech Solutions Inc.</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
};

export default MyHeader;
