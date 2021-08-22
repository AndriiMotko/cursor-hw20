import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import sauronImg from "../../assets/souron.jpg";
import { SignButton } from "../Collective.Ui";

const MainPageBody = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100%;
	background: url(${sauronImg}) no-repeat center center fixed;
	background-size: cover;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`;

const WrapperMainPage = styled.div`
	display: flex;
	width: 400px;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: #77767689;
	box-shadow: 0 0 12px 10px #77767689;
	margin-top: 150px;
	padding: 15px 0 15px 0;
`;
const InvitationHeader = styled.h2`
	color: rgb(255, 241, 44);
	font-family: "RingbearerMedium", sans-serif;
	letter-spacing: 2px;
	font-size: 36px;
`;

const LogOutButton = styled(SignButton)`
	width: 80%;
`;

export default function FirstPage() {
	let history = useHistory();

	const logOutHandler = () => {
		localStorage.setItem("SignedIn", false);
		history.push("/sign-in");
	};

	// Заблоковує повернення "Назад"
	const authorized = JSON.parse(localStorage.getItem("SignedIn"));
	if (authorized === false) {
		history.push("/sign-in");
	}

	return (
		<MainPageBody>
			<WrapperMainPage>
				<InvitationHeader>I see you...</InvitationHeader>
				<LogOutButton onClick={logOutHandler}>Log out</LogOutButton>
			</WrapperMainPage>
		</MainPageBody>
	);
}
