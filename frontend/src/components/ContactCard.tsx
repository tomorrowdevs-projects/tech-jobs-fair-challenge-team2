import React from "react";
import { Card, Container } from "react-bootstrap";

const ContactCard = ({ contact, onDelete, onEdit }) => {
	return (
		<Container className=" border border-warning rounded my-3 p-4 bg-white">
			<Card.Body className="d-flex flex-column align-items-start">
				<Card.Title>{`${contact.nome} ${contact.cognome}`}</Card.Title>
				<Card.Text className="mt-3">
					<strong>Email:</strong> {contact.email}
				</Card.Text>
				<Card.Text>
					<strong>Telefono:</strong> {contact.telefono}
				</Card.Text>
				<Card.Text>
					<strong>Azienda:</strong> {contact.azienda}
				</Card.Text>
				<Card.Text>
					<strong>Link:</strong>{" "}
					<a href={contact.link} target="_blank" rel="noopener noreferrer">
						{contact.link}
					</a>
				</Card.Text>
				<Card.Text>
					<strong>Tipo di contatto:</strong> {contact.tipo}
				</Card.Text>
			</Card.Body>
			<div className="mt-auto d-flex justify-content-end">
				<button
					type="button"
					className="btn btn-sm btn-outline-primary me-2"
					onClick={() => onEdit(contact)}
				>
					<i className="bi bi-pencil-fill"></i>
				</button>
				<button
					type="button"
					className="btn btn-sm btn-outline-danger"
					onClick={() => onDelete(contact.id)}
				>
					<i className="bi bi-trash3-fill"></i>
				</button>
			</div>
		</Container>
	);
};

export default ContactCard;
