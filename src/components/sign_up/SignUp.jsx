import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
	WrapperSignForm,
	RegIconWrap,
	RegIcon,
	SignStatus,
	WrapperForm,
	InputFormLine,
	WrapperAgreement,
	AgreeInput,
	LabelAgreeInput,
	InputFormEmailLine,
	InputFormPasswordLine,
	SignButton,
	NavigationLink,
	Rights,
} from "../Collective.Ui";
import signInIcon from "../../assets/padlock.png";

export default function SignUp() {
	// Style veriables
	const defaultBorderColor = "rgba(50, 50, 51, 0.8)";
	const validBorderColor = "rgb(0, 255, 0)";
	const notvalidBorderColor = "rgb(255, 0, 0)";

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [recivePromotions, setRecivePromotions] = useState(false);

	const [isRegistrated, setIsRegistrated] = useState(false);
	const [isSignIn, setIsSignIn] = useState(false);
	const [isValidForm, setIsValidForm] = useState(false);

	const [firstNameBorder, setFirstNameBorder] = useState(defaultBorderColor);
	const [lastNameBorder, setLastNameBorder] = useState(defaultBorderColor);
	const [emailBorder, setEmailBorder] = useState(defaultBorderColor);
	const [passwordBorder, setPasswordBorder] = useState(defaultBorderColor);

	useEffect(() => {
		if (
			firstNameBorder === validBorderColor &&
			lastNameBorder === validBorderColor &&
			emailBorder === validBorderColor &&
			passwordBorder === validBorderColor
		) {
			setIsValidForm(true);
		}
	}, [firstNameBorder, lastNameBorder, emailBorder, passwordBorder]);

	const onChangeFirstName = (e) => {
		const regExp = /^.{3,}$/;
		if (!regExp.test(String(e.target.value))) {
			setFirstNameBorder(notvalidBorderColor);
			setFirstName("");
		} else {
			setFirstNameBorder(validBorderColor);
			setFirstName(e.target.value);
		}
	};

	const onChangeLastName = (e) => {
		const regExp = /^.{3,}$/;
		if (!regExp.test(String(e.target.value))) {
			setLastNameBorder(notvalidBorderColor);
			setLastName("");
		} else {
			setLastNameBorder(validBorderColor);
			setLastName(e.target.value);
		}
	};

	const onChangeEmail = (e) => {
		const regExp = /^[a-zA-Z0-9_.-]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
		if (!regExp.test(String(e.target.value))) {
			setEmailBorder(notvalidBorderColor);
			setEmail("");
		} else {
			setEmailBorder(validBorderColor);
			setEmail(e.target.value);
		}
	};

	const onChangePassword = (e) => {
		const regExp = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
		if (!regExp.test(String(e.target.value))) {
			setPasswordBorder(notvalidBorderColor);
			setPassword("");
		} else {
			setPasswordBorder(validBorderColor);
			setPassword(e.target.value);
		}
	};
	const onChangeRecivePromotions = (e) => {
		return setRecivePromotions(!recivePromotions);
	};

	if (isRegistrated && isSignIn) {
		localStorage.setItem("Registrated", JSON.stringify(isRegistrated));
		localStorage.setItem("SignedIn", JSON.stringify(isSignIn));
		return <Redirect to="/first-page" />;
	}

	const onClickSignButton = () => {
		localStorage.setItem("First name", firstName);
		localStorage.setItem("Last name", lastName);
		localStorage.setItem("Email", email);
		localStorage.setItem("Password", password);
		localStorage.setItem("Recive Promotions", recivePromotions);
	};

	// Заблоковує повернення "Назад"
	const authorized = JSON.parse(localStorage.getItem("SignedIn"));
	if (authorized) {
		return <Redirect to="/first-page" />;
	}

	return (
		<WrapperSignForm>
			<RegIconWrap>
				<RegIcon src={signInIcon} alt="sign-in" />
			</RegIconWrap>
			<SignStatus>Sign Up</SignStatus>
			<WrapperForm>
				<InputFormLine
					borderColor={firstNameBorder}
					placeholder="First Name *"
					onChange={onChangeFirstName}
				/>
				<InputFormLine
					borderColor={lastNameBorder}
					placeholder="Last Name *"
					onChange={onChangeLastName}
				/>
				<InputFormEmailLine
					borderColor={emailBorder}
					placeholder="Email Address *"
					onChange={onChangeEmail}
				/>
				<InputFormPasswordLine
					borderColor={passwordBorder}
					placeholder="Password *"
					type="password"
					onChange={onChangePassword}
				/>
				<WrapperAgreement>
					<AgreeInput
						type="checkbox"
						label="AgreementCheckBox"
						onChange={onChangeRecivePromotions}
					/>
					<LabelAgreeInput htmlFor="AgreementCheckBox">
						I want to receive inspiration, marketing promotion and updates via
						email.
					</LabelAgreeInput>
				</WrapperAgreement>
				<SignButton
					onClick={() => {
						onClickSignButton();
						setIsRegistrated(true);
						setIsSignIn(true);
					}}
					disabled={!isValidForm}
				>
					Sign Up
				</SignButton>
			</WrapperForm>
			<NavigationLink href="/cursor-hw20/sign-in">
				Already have an account? Sign in
			</NavigationLink>

			<Rights>Copyright &copy; Your website 2020.</Rights>
		</WrapperSignForm>
	);
}
