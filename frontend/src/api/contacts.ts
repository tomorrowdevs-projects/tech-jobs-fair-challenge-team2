import axios from "axios";
import { supabaseUrl, API_KEY } from "../supabase";
import { Contact } from "../models";

export const supabase = axios.create({
	baseURL: supabaseUrl,
	headers: {
		apikey: API_KEY,
		Authorization: `Bearer ${API_KEY}`,
		"Content-Type": "application/json",
	},
});
export const createContatto = async (contatto: Contact) => {
	try {
		const { data } = await supabase.post("/Contatti", contatto);
		return data;
	} catch (error) {
		console.error("Errore durante la creazione del contatto:", error);
	}
};

export const getContatti = async () => {
	try {
		const { data } = await supabase.get("/Contatti");
		return data;
	} catch (error) {
		console.error("Errore durante il recupero dei contatti:", error);
		return [];
	}
};

export const updateContatto = async (id: number, contatto: Contact) => {
	try {
		const { data } = await supabase.patch(`/Contatti?id=eq.${id}`, contatto);
		return data;
	} catch (error) {
		console.error("Errore durante l'aggiornamento del contatto:", error);
	}
};

export const deleteContatto = async (id: number) => {
	try {
		const { data } = await supabase.delete(`/Contatti?id=eq.${id}`);
		return data;
	} catch (error) {
		console.error("Errore durante l'eliminazione del contatto:", error);
	}
};
