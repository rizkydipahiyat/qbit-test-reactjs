import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import { getListArticles } from "../service/localstorage";

const HomePage = () => {
	const [articles, setArticles] = useState([]);

	const navigate = useNavigate();

	const userLogin = useSelector((state) => state.userLogin);

	const { userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
		setArticles(getListArticles());
	}, [userInfo, navigate]);
	return (
		<>
			<Container>
				<Row>
					<div className="position-relative">
						{userInfo ? (
							<LinkContainer to="/post">
								<Button className="position-absolute end-0">Add Post</Button>
							</LinkContainer>
						) : null}
					</div>
					{articles.map((article, index) => (
						<div>
							<Content article={article} />
						</div>
					))}
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
