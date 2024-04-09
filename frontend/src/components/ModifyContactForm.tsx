import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getContatti, updateContatto } from "../api/contacts";
import { useNavigate, useParams } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";
import { Contact } from "../models";

const ModifyContactForm = () => {
  const { contactId } = useParams();
  const [contatto, setContatto] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
    azienda: "",
    link: "",
    tipo: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContatto((prevContatto) => ({
      ...prevContatto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateContatto(Number(contactId), contatto);
      alert("Contatto aggiornato con successo!");
      nav("/");
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

  useEffect(() => {
    const fetchContatto = async () => {
      try {
        // Ottieni tutti i contatti
        const contatti = await getContatti();

        // Trova il contatto desiderato utilizzando l'ID
        const contattoFiltrato = contatti.find(
          (contatto: Contact) => contatto.id === Number(contactId)
        );

        // Imposta il contatto filtrato nello stato
        setContatto(contattoFiltrato);
      } catch (error) {
        console.error("Errore durante il recupero del contatto:", error);
      }
    };

    fetchContatto();
  }, [contactId]);

  return (
    <Container>
      <div
        className="d-flex justify-content-center align-items-center my-4 pt-2"
        style={{ gap: 24 }}
      >
        <h2>Modifica contatto</h2>
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
          />
        </Form.Group>

        <Form.Group controlId="formCognome">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            name="cognome"
            value={contatto.cognome}
            onChange={handleChange}
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
          />
        </Form.Group>
        <Form.Group controlId="formAzienda">
          <Form.Label>Azienda</Form.Label>
          <Form.Control
            type="text"
            name="azienda"
            value={contatto.azienda}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formLink">
          <Form.Label>Link</Form.Label>
          <Form.Control
            type="text"
            name="link"
            value={contatto.link}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            name="tipo"
            value={contatto.tipo}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Modifica Contatto
        </Button>
      </Form>
    </Container>
  );
};

export default ModifyContactForm;
