import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useForm } from "../hooks/useForm";
import { addArticle } from "../service/localstorage";
import { v4 as uuid } from "uuid";

const PostPage = () => {
	const { inputValues, handleInputChange, resetForm } = useForm({
		title: "",
		content: "",
		isPosting: false,
	});

	const navigate = useNavigate();

	const userLogin = useSelector((state) => state.userLogin);

	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			navigate("/login");
		}
	}, [userInfo, navigate]);

	const submitHandler = (e) => {
		e.preventDefault();
		addArticle({ id: uuid(), ...inputValues });
		resetForm();
		navigate("/");
	};
	return (
		<FormContainer>
			<h3 className="text-center mt-5">Create Post</h3>
			<hr />
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						name="title"
						type="text"
						value={inputValues.title}
						onChange={handleInputChange}
						placeholder="Enter title"
					/>
				</Form.Group>
				<Form.Group controlId="content">
					<Form.Label>Content</Form.Label>
					<Form.Control
						as="textarea"
						name="content"
						type="text"
						value={inputValues.content}
						onChange={handleInputChange}
						placeholder="Enter name"
					/>
				</Form.Group>
				<Form.Group controlId="published" className="mb-2">
					<Form.Check
						name="isPosting"
						type="checkbox"
						label="Posting"
						value={inputValues.isPosting}
						onChange={handleInputChange}
					></Form.Check>
				</Form.Group>
				<Button type="submit" variant="dark" className="w-100 mt-2">
					Submit
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PostPage;
