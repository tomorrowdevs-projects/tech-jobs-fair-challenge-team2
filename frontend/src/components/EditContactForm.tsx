import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { updateContatto } from "../api/contacts";

const EditContactForm = ({ contact }) => {
	const [contattoModificato, setContattoModificato] = useState(contact);

	const handleChange = e => {
		const { name, value } = e.target;
		setContattoModificato(prevContatto => ({
			...prevContatto,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await updateContatto(contattoModificato.id, contattoModificato);
			alert("Contatto aggiornato con successo!");
		} catch (error) {
			console.error("Errore durante l'aggiornamento del contatto:", error);
			alert("Si è verificato un errore durante l'aggiornamento del contatto.");
		}
	};

	return (
		<Container>
			<div className="d-flex justify-content-center align-items-center my-4 pt-2">
				<h2>Modifica contatto</h2>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formNome">
					<Form.Label>Nome</Form.Label>
					<Form.Control
						type="text"
						name="nome"
						value={contattoModificato.nome}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{/* Aggiungi altri campi del form simili per gli altri attributi del contatto */}

				<Button variant="primary" type="submit" className="mt-3">
					Salva Modifiche
				</Button>
			</Form>
		</Container>
	);
};

export default EditContactForm;
