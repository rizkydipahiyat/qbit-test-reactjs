import React from "react";
import { Card, Col } from "react-bootstrap";

const Content = ({ article }) => {
	return (
		<>
			{article.isPosting ? (
				<Col sm={12} md={6} lg={4} className="mt-5">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>{article.title}</Card.Title>
							<Card.Text>{article.content.substring(0, 100)}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			) : null}
		</>
	);
};

export default Content;
