const Navbar = (props) => {
	return (
		<>
			<nav className="navbar border-bottom border-2 border-dark">
				<div className="container-fluid justify-content-center">
					<a className="navbar-brand" href="#">
						{props.siteName}
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
