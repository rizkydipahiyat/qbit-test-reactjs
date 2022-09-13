import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userAction";

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);

	const { userInfo } = userLogin;

	const logoutHandler = () => {
		window.location.href = "/";
		dispatch(logout());
	};
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" bg="white" variant="white">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to="/">
								<Navbar.Brand>Medium</Navbar.Brand>
							</LinkContainer>
						</Nav>
						<Nav>
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/about">
								<Nav.Link>About</Nav.Link>
							</LinkContainer>
							{userInfo && userInfo ? (
								<>
									<LinkContainer to="/login" onClick={logoutHandler}>
										<Nav.Link>Logout</Nav.Link>
									</LinkContainer>
								</>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>Sign In</Nav.Link>
								</LinkContainer>
							)}

							{/* <NavDropdown title="Test" id="collasible-nav-dropdown">
								<LinkContainer to="/profile">
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/create">
									<NavDropdown.Item>Create Post</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item>Logout</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
