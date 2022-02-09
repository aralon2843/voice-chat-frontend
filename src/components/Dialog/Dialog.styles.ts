import styled from 'styled-components';

export const DialogWrapper = styled.div`
	border-left: 2px solid ${({ theme }) => theme.colors.semiDarkGrey};
	flex: 1 1 65%;
	background-color: ${({ theme }) => theme.colors.grey};
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	height: 80vh;
	position: relative;
	height: 100%;
	overflow-y: auto;
`;

export const Message = styled.div<{ isMe: boolean }>`
	display: inline-block;
	margin-bottom: 15px;
	text-align: ${({ isMe }) => (isMe ? 'right' : 'left')};
`;

export const MessageAvatar = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	object-fit: cover;
	object-position: center;
	margin-bottom: 5px;
`;

export const MessageText = styled.p<{ isMe: boolean }>`
	color: ${({ theme }) => theme.colors.white};
	text-align: ${({ isMe }) => (isMe ? 'right' : 'left')};
`;


export const MessageTextArea = styled.textarea`
	width: 90%;
	resize: none;
	height: 60px;
	outline: none;
	border: none;
	border-radius: 15px;
	position: absolute;
	bottom: 0px;
	left: calc(50% + 10px);
	transform: translateX(-50%);
	padding: 10px 15px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.semiDarkGrey};
`;
