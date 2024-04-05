import "./App.css";
import Header from "./components/Header";
import ContactsTable from "./components/Table";
import CreateContactForm from "./components/CreateContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<ContactsTable />} />
				<Route path="/nuova" element={<CreateContactForm />} />
				<Route path="/modifica" element={<h1>modifica</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
