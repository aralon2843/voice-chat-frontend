import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { FlexContainer } from '../App/App.styles';
import Dialog from '../Dialog/Dialog';
import { DialogWrapper } from '../Dialog/Dialog.styles';
import MainContainer from '../MainContainer/MainContainer';
import {
	DialogThumbnail,
	DialogThumbnailLastMessage,
	DialogThumbnailPersonAvatar,
	DialogThumbnailPersonUsername,
	DialogThumbnails,
	MessagesWrapper,
	NoDialogsTitle,
} from './Messages.styles';

const Messages: React.FC = (): JSX.Element => {
	const navigate = useNavigate();
	const params = useParams();
	const me = useAppSelector((state) => state.userReducer.me);

	const dialogs = [
		{
			dialogId: '132132132131',
			participants: [
				{
					userId: 321,
					userName: 'Dima',
					avatarUrl:
						'https://sun9-57.userapi.com/impg/wUDRiDp5BM8PaLMIrKO9cYjWlofeSXLkhYTjLw/WHyyg5Slo2o.jpg?size=785x589&quality=96&sign=92559cf2ba36d1aa5071fc6594954e02&type=album',
				},
				{
					userId: 123,
					userName: 'vlad bumaga a4',
					avatarUrl:
						'https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album',
				},
			],
			lastMessage: 'хаха!',
		},
	];

	return (
		<MainContainer>
			<MessagesWrapper hasDialogs={dialogs.length > 0}>
				{dialogs.length === 0 ? (
					<NoDialogsTitle>
						No dialogs yet, try to chat with someone
					</NoDialogsTitle>
				) : (
					<>
						<DialogThumbnails>
							{dialogs.map((dialog) => (
								<DialogThumbnail
									onClick={() => navigate(`/messages/${dialog.dialogId}`)}
								>
									<DialogThumbnailPersonAvatar
										src={dialog.participants[0].avatarUrl}
										alt='avatar'
									/>
									<FlexContainer direction='column' justify='flex-start'>
										<DialogThumbnailPersonUsername>
											{dialog.participants[0].userName}
										</DialogThumbnailPersonUsername>
										<DialogThumbnailLastMessage>
											{dialog.lastMessage}
										</DialogThumbnailLastMessage>
									</FlexContainer>
								</DialogThumbnail>
							))}
						</DialogThumbnails>
						{!params.dialogId ? (
							<DialogWrapper>
								<NoDialogsTitle>
									Select the user you want to chat with
								</NoDialogsTitle>
							</DialogWrapper>
						) : (
							<Dialog me={me} dialogId={dialogs[0].dialogId} />
						)}
					</>
				)}
			</MessagesWrapper>
		</MainContainer>
	);
};

export default Messages;
