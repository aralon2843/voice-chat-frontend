import {
	ChangeEvent,
	ChangeEventHandler,
	EventHandler,
	useEffect,
	useState,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { IUser } from '../../models/IUser';
import {
	DialogWrapper,
	Message,
	MessageText,
	MessageTextArea,
} from './Dialog.styles';

interface IDialogProps {
	me: IUser;
	dialogId: string;
}

const Dialog: React.FC<IDialogProps> = ({ me, dialogId }): JSX.Element => {
	const chatSocket: Socket = io('http://localhost:3001/chat');
	// const alertSocket: Socket = io('http://localhost:3001/alerts');

	const [messageValue, setMessageValue] = useState('');

	const [messages, setMessages] = useState<string[]>([]);
	// const [alerts, setAlerts] = useState<string[]>([]);

	const onSendMessage = (message: string): void => {
		if (message.trim() !== '') {
			chatSocket.emit('messageToServer', {
				sender: me.username,
				dialog: dialogId,
				body: message,
			});
			setMessageValue('');
		}
	};

	useEffect(() => {
		if (chatSocket.connected) {
			chatSocket.on('connect', () => {
				chatSocket.emit('joinDialog', dialogId);
			});
		}

		return () => {
			chatSocket.emit('leaveDialog', dialogId);
		};
	}, []);

	useEffect(() => {
		console.log(messages);
		chatSocket.on('messageToClient', (message: string) => {
			setMessages([...messages, message]);
		});
	});

	return (
		<DialogWrapper>
			{messages.map((message) => {
				// return (
				//   message.dialogId === params.dialogId && (
				//     <Message isMe={meId === message.authorId}>
				//       <MessageAvatar src={message.authorAvatarUrl} />
				//       <MessageText isMe={meId === message.authorId}>
				//         {message.body}
				//       </MessageText>
				//     </Message>
				//   )
				// );
				return (
					<Message isMe={false}>
						<MessageText isMe={false}>{message}</MessageText>
					</Message>
				);
			})}
			<MessageTextArea
				placeholder='text message...'
				value={messageValue}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
					setMessageValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					onSendMessage(messageValue);
				}}
			>
				Send message
			</button>
		</DialogWrapper>
	);
};

export default Dialog;
