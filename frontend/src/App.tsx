import "./App.css";
import Header from "./components/Header";
import ContactsTable from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<ContactsTable />} />
        <Route path="/nuova" element={<h1>nuova</h1>} />
        <Route path="/modifica" element={<h1>modifica</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
