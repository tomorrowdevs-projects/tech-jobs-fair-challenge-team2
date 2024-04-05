import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { createContatto } from "../api/contacts";

const CreateContactForm = () => {
	const [contatto, setContatto] = useState({
		nome: "",
		cognome: "",
		email: "",
		telefono: "",
		azienda: "",
		link: "",
		tipo: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setContatto(prevContatto => ({
			...prevContatto,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await createContatto(contatto);
			alert("Contatto creato con successo!");
		} catch (error) {
			console.error("Errore durante la creazione del contatto:", error);
			alert("Si è verificato un errore durante la creazione del contatto.");
		}
	};

	return (
		<Container>
			<div className="d-flex justify-content-center align-items-center my-4 pt-2">
				<h2>Crea nuovo contatto</h2>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formNome">
					<Form.Label>Nome</Form.Label>
					<Form.Control
						type="text"
						name="nome"
						value={contatto.nome}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formCognome">
					<Form.Label>Cognome</Form.Label>
					<Form.Control
						type="text"
						name="cognome"
						value={contatto.cognome}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						name="email"
						value={contatto.email}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formTelefono">
					<Form.Label>Telefono</Form.Label>
					<Form.Control
						type="text"
						name="telefono"
						value={contatto.telefono}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formAzienda">
					<Form.Label>Azienda</Form.Label>
					<Form.Control
						type="text"
						name="azienda"
						value={contatto.azienda}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formLink">
					<Form.Label>Link</Form.Label>
					<Form.Control
						type="text"
						name="link"
						value={contatto.link}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formTipo">
					<Form.Label>Tipo</Form.Label>
					<Form.Control
						type="text"
						name="tipo"
						value={contatto.tipo}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit" className="mt-3">
					Crea Contatto
				</Button>
			</Form>
		</Container>
	);
};

export default CreateContactForm;
