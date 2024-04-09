import { ChangeEvent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useContatti } from "../hooks/table.hook";
import { deleteContatto } from "../api/contacts";
import { useNavigate } from "react-router-dom";
import { PlusCircleFill } from "react-bootstrap-icons";
import ContactCard from "./ContactCard";
import LoginSignup from "./LoginSignup";
import { Contact } from "../models";

const ContactsTable = () => {
  const { contatti } = useContatti();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contatti.filter(
    (contact) =>
      contact.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.cognome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.telefono.includes(searchTerm) ||
      contact.azienda.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const gotoEdit = (contact: Contact) => {
    navigate(`/modifica/${contact.id}`);
  };

  if (localStorage.getItem("sb-ftgwvpuqwdqgicyqqncn-auth-token")) {
    return (
      <Container>
        <div
          className="d-flex justify-content-center align-items-center my-4 pt-2"
          style={{ gap: 24 }}
        >
          <h2>Rubrica telefonica aziendale</h2>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              navigate(`/nuova`);
            }}
          >
            <PlusCircleFill />
          </button>
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
        <div>
          <Row>
            <ul>
              {filteredContacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard
                    contact={contact}
                    onDelete={() => deleteContatto(Number(contact.id))}
                    onEdit={gotoEdit}
                  />
                </Col>
              ))}
            </ul>
          </Row>
        </div>
      </Container>
    );
  } else {
    return <LoginSignup />;
  }
};

export default ContactsTable;
