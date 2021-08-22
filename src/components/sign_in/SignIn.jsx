import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
	WrapperSignForm,
	RegIconWrap,
	RegIcon,
	SignStatus,
	WrapperForm,
	WrapperAgreement,
	AgreeInput,
	LabelAgreeInput,
	InputFormEmailLine,
	InputFormPasswordLine,
	SignButton,
	WrapperNavigation,
	NavigationLink,
	Rights,
} from "../Collective.Ui";
import signInIcon from "../../assets/padlock.png";

// =============================== Custom CSS =================================
const WrapperSignInNavigation = styled(WrapperNavigation)`
	justify-content: space-between;
`;

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	let history = useHistory();

	const onChangeEmail = (e) => {
		return setEmail(e.target.value);
	};
	const onChangePassword = (e) => {
		return setPassword(e.target.value);
	};
	const onChangeRememberMe = (e) => {
		return setRememberMe(!rememberMe);
	};

	const emailLocStorage = localStorage.getItem("Email");
	const passwordLocStorage = localStorage.getItem("Password");
	const remembered = JSON.parse(localStorage.getItem("RememberMe"));

	const onClickSignIn = () => {
		localStorage.setItem("RememberMe", rememberMe);
		localStorage.setItem("SignedIn", true);

		if (
			(emailLocStorage === email || emailLocStorage === emailRemembered) &&
			(passwordLocStorage === password ||
				passwordLocStorage === passwordRemembered)
		) {
			history.push("/first-page");
		}
	};

	// =================== Logic for "Remember me" ============================
	let emailRemembered;
	let passwordRemembered;

	if (remembered) {
		emailRemembered = emailLocStorage;
		passwordRemembered = passwordLocStorage;
	}

	return (
		<WrapperSignForm>
			<RegIconWrap>
				<RegIcon src={signInIcon} alt="sign-in" />
			</RegIconWrap>
			<SignStatus>Sign In</SignStatus>
			<WrapperForm>
				<InputFormEmailLine
					value={emailRemembered}
					placeholder="Email Address *"
					onChange={onChangeEmail}
				/>
				<InputFormPasswordLine
					value={passwordRemembered}
					placeholder="Password *"
					type="password"
					onChange={onChangePassword}
				/>
				<WrapperAgreement>
					<AgreeInput
						type="checkbox"
						label="AgreementCheckBox"
						onChange={onChangeRememberMe}
					/>
					<LabelAgreeInput htmlFor="AgreementCheckBox">
						Remember me
					</LabelAgreeInput>
				</WrapperAgreement>
				<SignButton onClick={onClickSignIn}>Sign In</SignButton>
			</WrapperForm>
			<WrapperSignInNavigation>
				<NavigationLink>Forgot password?</NavigationLink>
				<NavigationLink href="/cursor-hw20/sign-up">
					Don't have an account? Sign up
				</NavigationLink>
			</WrapperSignInNavigation>
			<Rights>Copyright &copy; Your website 2020.</Rights>
		</WrapperSignForm>
	);
}
