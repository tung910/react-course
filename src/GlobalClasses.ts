import styled, { css } from 'styled-components';

const GlobalClasses = css`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
	body {
		font-family: 'Poppins', sans-serif;
	}
	.ant-btn-link {
		color: black;
		&:hover {
			color: inherit;
		}
	}
`;
const ContainerStyled = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: block;
	height: 100%;
`;
const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const mixins = { flexCenter };
export { GlobalClasses, ContainerStyled, mixins };