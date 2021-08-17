import React from "react";
import {
	WrapperSignIn,
	RegIconWrap,
	RegIcon,
	SignInStatus,
	WrapperForm,
    InputFormLine,
    InputFormEmailLine,
    InputFormPasswordLine,
    AgreementCheckBox,
    SignInButton
} from "./SignIn.ui.jsx";
import signInIcon from "../../assets/padlock.png";

export default function SignIn() {
	return (
		<WrapperSignIn>
			<RegIconWrap>
				<RegIcon src={signInIcon} alt="sign-in" />
			</RegIconWrap>
			<SignInStatus>Sign In</SignInStatus>
			<WrapperForm>
				<InputFormLine placeholder="First Name *" />
				<InputFormLine placeholder="Last Name *" />
				<InputFormEmailLine placeholder="Email Address *" />
				<InputFormPasswordLine placeholder="Password *" type="password" />
                <AgreementCheckBox />
                <SignInButton>Sign In</SignInButton>
			</WrapperForm>
		</WrapperSignIn>
	);
}
