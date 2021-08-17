import styled from "styled-components";
import React from "react";

export const WrapperSignIn = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin: 50px 0 50px 0;
	color: rgb(255, 255, 255);
`;

export const RegIconWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(171, 44, 142);
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

export const RegIcon = styled.img`
	width: 60%;
	height: 60%;
`;

export const SignInStatus = styled.h2`
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.8px;
    margin: 10px 0 10px 0;
`;

export const WrapperForm = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
`;

export const InputFormLine = styled.input`
	width: 175px;
	background-color: rgb(14, 14, 14);
	border: 1.5px solid rgba(50, 50, 51, 0.8);
	border-radius: 5px;
	padding: 8px 5px 8px 5px;
	margin: 7px 0 7px 0;
	color: rgb(255, 255, 255);
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	letter-spacing: 0.8px;
	&:focus {
		outline-color: rgba(50, 50, 51, 0.8);
	}
`;

export const InputFormEmailLine = styled(InputFormLine)`
	width: 100%;
`;
export const InputFormPasswordLine = styled(InputFormEmailLine)``;

const WrapperAgreement = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	margin: 10px 0 10px 0;
`;

const AgreeInput = styled.input`
	width: 15px;
	height: 15px;
	margin: 0 15px 0 0;
`;

const LabelAgreeInput = styled.label`
	font-size: 13px;
	padding: 0 10px 0 10px;
	color: rgba(255, 255, 255, 0.85);
`;

export function AgreementCheckBox() {
	return (
		<WrapperAgreement>
			<AgreeInput type="checkbox" label="AgreementCheckBox" />
			<LabelAgreeInput htmlFor="AgreementCheckBox">
				I want to receive inspiration, marketing promotion and updates via
				email.
			</LabelAgreeInput>
		</WrapperAgreement>
	);
}

export const SignInButton = styled.button`
	width: 100%;
	background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
    margin: 10px 0 10px 0;
    padding: 5px 0 5px 0;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
    }

`;
