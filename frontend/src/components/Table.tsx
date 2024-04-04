import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useContatti } from "../hooks/table.hook";
import { deleteContatto } from "../api/contacts";

const ContactsTable = () => {
  const { contatti } = useContatti();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contatti.filter(
    (contact) =>
      contact.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.cognome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.telefono.includes(searchTerm) ||
      contact.azienda.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.tipo.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (event) => {
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
        <table className="table table-striped w-100">
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
              <th scope="col">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.nome}</td>
                <td>{contact.cognome}</td>
                <td>{contact.email}</td>
                <td>{contact.telefono}</td>
                <td>{contact.azienda}</td>
                <td>{contact.link}</td>
                <td>{contact.tipo}</td>
                <td>
                  <Container>
                    <Row>
                      <Col>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          aria-label={`modifica il contatto di ${contact.nome} dell'azienda ${contact.azienda}`}
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          aria-label={`elimina il contatto di ${contact.nome} dell'azienda ${contact.azienda}`}
                          onClick={() => deleteContatto(contact.id)}
                        >
                          <i className="bi bi-trash3-fill" />
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ContactsTable;
