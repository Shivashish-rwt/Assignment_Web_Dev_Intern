import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewCard from "./NewCard";
import CardPage from "./CardPage";
import Sidebar from "./Sidebar";
import { DataProvider } from "./context/DataContext";

function App() {
	return (
		<BrowserRouter>
			<DataProvider>
				<div className="App">
					<Sidebar />
					<div className="Content">
						<nav className="nav"></nav>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/card" element={<NewCard />} />
							<Route path="/card/:id" element={<CardPage />} />
						</Routes>
					</div>
				</div>
			</DataProvider>
		</BrowserRouter>
	);
}

export default App;
