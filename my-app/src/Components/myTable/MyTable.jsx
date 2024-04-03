import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MyTable = () => {
	const [contacts, setContacts] = useState([
		{
			id: 1,
			nome: "Marco",
			cognome: "Rossi",
			email: "marcorossi@gmail.com",
			telefono: "1234567",
			azienda: "Google",
			link: "https://www.marco.com",
			tipo: "Partner",
		},
		{
			id: 2,
			nome: "Luigi",
			cognome: "Verdi",
			email: "luigiverdi@gmail.com",
			telefono: "03456548",
			azienda: "Microsoft",
			link: "https://www.luigi.com",
			tipo: "Partner",
		},
		{
			id: 3,
			nome: "Davide",
			cognome: "Bianchi",
			email: "davidebianchi@gmail.com",
			telefono: "87654312",
			azienda: "SpaceX",
			link: "https://www.davideb.com",
			tipo: "Partner",
		},
		{
			id: 4,
			nome: "Matteo",
			cognome: "Neri",
			email: "matteoneri@gmail.com",
			telefono: "5463729",
			azienda: "Coca-Cola",
			link: "https://www.matteoneri.com",
			tipo: "Cliente",
		},
		{
			id: 5,
			nome: "Luca",
			cognome: "Costa",
			email: "lucacosta@gmail.com",
			telefono: "72893541",
			azienda: "Aruba",
			link: "https://www.costaluca.com",
			tipo: "Partner",
		},
		{
			id: 6,
			nome: "Giorgio",
			cognome: "Esposito",
			email: "giorgioe@gmail.com",
			telefono: "61439366",
			azienda: "Tech Solutions Inc.",
			link: "https://www.espositog.com",
			tipo: "Dipendente",
		},
		{
			id: 7,
			nome: "Franco",
			cognome: "Battiato",
			email: "francob@gmail.com",
			telefono: "52614426671",
			azienda: "Sony",
			link: "https://www.francobat.com",
			tipo: "Partner",
		},
		{
			id: 8,
			nome: "Snoop",
			cognome: "Dogg",
			email: "snoopdogg@gmail.com",
			telefono: "02415792",
			azienda: "Leafs By Snoop",
			link: "https://www.snoop.com",
			tipo: "Cliente",
		},
		{
			id: 9,
			nome: "Salvador",
			cognome: "Dalì",
			email: "salvador@gmail.com",
			telefono: "6724451",
			azienda: "Surrealism",
			link: "https://www.francobat.com",
			tipo: "Cliente",
		},
		{
			id: 10,
			nome: "Jhon",
			cognome: "Rambo",
			email: "rambone@gmail.com",
			telefono: "67245361",
			azienda: "Tech Solutions Inc.",
			link: "https://www.francobat.com",
			tipo: "Dipendente",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");

	const filteredContacts = contacts.filter(
		contact =>
			contact.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
			contact.cognome.toLowerCase().includes(searchTerm.toLowerCase()) ||
			contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			contact.telefono.includes(searchTerm) ||
			contact.azienda.toLowerCase().includes(searchTerm.toLowerCase()) ||
			contact.tipo.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearchChange = event => {
		setSearchTerm(event.target.value);
	};

	return (
		<Container className="container-fluid">
			<div className="d-flex justify-content-center align-items-center my-4 pt-2">
				<h2>Rubrica telefonica aziendale</h2>
			</div>
			<div className="my-3">
				<input
					type="text"
					placeholder="Cerca contatto..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="form-control"
				/>
			</div>
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nome</th>
							<th scope="col">Cognome</th>
							<th scope="col">E-mail</th>
							<th scope="col">Telefono</th>
							<th scope="col">Azienda</th>
							<th scope="col">Link</th>
							<th scope="col">Tipo di contatto</th>
						</tr>
					</thead>
					<tbody>
						{filteredContacts.map(contact => (
							<tr key={contact.id}>
								<td>{contact.id}</td>
								<td>{contact.nome}</td>
								<td>{contact.cognome}</td>
								<td>{contact.email}</td>
								<td>{contact.telefono}</td>
								<td>{contact.azienda}</td>
								<td>{contact.link}</td>
								<td>{contact.tipo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Container>
	);
};

export default MyTable;
