import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const isLogged = !!sessionStorage.getItem("token");

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1">React Boilerplate</Link>
				<div className="d-flex gap-2">
					{!isLogged && <Link to="/signup"><button className="btn btn-outline-primary">Registro</button></Link>}
					{!isLogged && <Link to="/login"><button className="btn btn-outline-success">Login</button></Link>}
					{isLogged && <button className="btn btn-danger" onClick={handleLogout}>Logout</button>}
				</div>
			</div>
		</nav>
	);
};