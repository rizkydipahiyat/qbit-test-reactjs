import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutPage = () => {
	return (
		<Container>
			<Row className="mt-5 py-5">
				<Col>
					<h5>Halo 👋, saya </h5>
					<h4>
						<b>Rizky Dipahiyat Alghipari</b>
					</h4>
					<h6>
						Mahasiswa & <strong>Front End Developer</strong>
					</h6>
					<p> 📍 Kembangan, Jakarta Barat, 11610 </p>
				</Col>
			</Row>
			<hr />
			<Row>
				<div className="detailPendidikan">
					<h3>Pendidikan</h3>
					<ul>
						<li>Universitas Esa Unggul | 2019 - Sekarang</li>
						<small>Teknik Informatika, Ilmu Komputer</small>
						<br />
						<small>IPK 3.81 dalam 7 Semester</small>
						<hr />
						<li>SMK Telkom Jakarta | 2016 - 2019</li>
						<small>Rekayasa Perangkat Lunak</small>
						<hr />
						<li>SMPN 215 SSN Jakarta | 2013 - 2016</li>
						<hr />
						<li>SDN 09 Pagi Kembangan Utara | 2007 - 2013</li>
					</ul>
				</div>
			</Row>
			<hr />
			<Row>
				<div className="detailPengalaman">
					<h3>Pengalaman</h3>
					<ul>
						<li>
							Magang Junior Front End Developer | 📍 PT. Telkom Satelit
							Indonesia | Sep 2018 - Nov 2018
						</li>
						<small>
							Membuat user interface chat app menggunakan framework ionic
						</small>
						<br />
						<small>Melakukan input data menggunakan excel</small>
					</ul>
				</div>
			</Row>
		</Container>
	);
};

export default AboutPage;
