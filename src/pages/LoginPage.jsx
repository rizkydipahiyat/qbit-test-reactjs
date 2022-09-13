import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userAction";
import FormContainer from "../components/FormContainer";

const LoginPage = () => {
	const [username, setUsername] = useState("username");
	const [password, setPassword] = useState("123456");
	const [message, setMessage] = useState("");

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);

	const { loading, userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			navigate("/login");
		}
	}, [userInfo, navigate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(username, password));
		navigate("/");
	};
	return (
		<>
			<FormContainer>
				<h3 className="text text-center mt-5">Login</h3>
				<hr />
				{message && <Alert variant="danger">{message}</Alert>}
				{loading && <div>Loading...</div>}
				<Form onSubmit={submitHandler}>
					<Form.Group className="mb-2">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Enter username"
						/>
					</Form.Group>
					<Form.Group className="mb-2">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter password"
						/>
					</Form.Group>
					<Button type="submit" variant="dark" className="w-100 mt-3">
						Login
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default LoginPage;
