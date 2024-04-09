
export interface Contact {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  azienda: string;
  link: string;
  tipo: string;
}

export type OnEditFunction = (contact: Contact) => void;
export type OnDeleteFunction = (contactId?: number) => void;
