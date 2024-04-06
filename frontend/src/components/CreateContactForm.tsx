import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { HouseFill } from "react-bootstrap-icons";

import { createContatto, getContatti } from "../api/contacts";
import { useNavigate } from "react-router-dom";

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
			const contatti = await getContatti();
			const emailAlreadyExists = contatti.some(
				contact => contact.email === contatto.email
			);

			if (emailAlreadyExists) {
				alert(
					"L'email inserita è già associata a un altro contatto. Si prega di inserire un'email diversa."
				);
				return;
			}
			const result = await createContatto(contatto);
			console.log(result);

			if (result) {
				alert("Contatto creato con successo!");
			} else {
				alert("Si è verificato un errore durante la creazione del contatto.");
			}
		} catch (error) {
			console.error("Errore durante la creazione del contatto:", error);
			alert("Si è verificato un errore durante la creazione del contatto.");
		}
	};

	const nav = useNavigate();
	//route for home page
	const gotoHome = () => {
		nav("/");
	};

	return (
		<Container>
			<div
				className="d-flex justify-content-center align-items-center my-4 pt-2"
				style={{ gap: 24 }}
			>
				<h2>Crea nuovo contatto</h2>
				<button className="btn btn-outline-warning" onClick={gotoHome}>
					<HouseFill />
				</button>
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
