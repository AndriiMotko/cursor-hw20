import styled from "styled-components";

export const WrapperSignForm = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin: 50px 0 20px 0;
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

export const SignStatus = styled.h2`
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
	border: 1.5px solid;
	border-color: ${(props) => props.borderColor};
	border-radius: 5px;
	padding: 8px 5px 8px 5px;
	margin: 7px 0 7px 0;
	color: rgb(255, 255, 255);
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	letter-spacing: 0.8px;
	&:focus {
		outline: none;
	}
`;

export const InputFormEmailLine = styled(InputFormLine)`
	width: 100%;
`;
export const InputFormPasswordLine = styled(InputFormEmailLine)``;

export const WrapperAgreement = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	margin: 10px 0 10px 0;
`;

export const AgreeInput = styled.input`
	width: 15px;
	height: 15px;
	margin: 0 15px 0 0;
`;

export const LabelAgreeInput = styled.label`
	font-size: 13px;
	padding: 0 10px 0 5px;
	color: rgba(255, 255, 255, 0.85);
	letter-spacing: 0.25px;
`;

export const SignButton = styled.button`
	width: 100%;
	background-image: linear-gradient(
		to right,
		#77a1d3 0%,
		#79cbca 51%,
		#77a1d3 100%
	);
	margin: 10px 0 5px 0;
	padding: 5px 0 5px 0;
	border: none;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
	}
`;
export const WrapperNavigation = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
`;

export const NavigationLink = styled.a`
	color: #79cbca;
	font-size: 11px;
	text-decoration: none;
	align-self: flex-end;
	margin: 0 5px 0 5px;
`;

export const Rights = styled.div`
	margin: 25px 0 10px 0;
	font-size: 11px;
	color: rgb(96, 96, 96);
`;
