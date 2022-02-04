import { useNavigate, useParams } from "react-router-dom";
import { FlexContainer } from "../App/App.styles";
import MainContainer from "../MainContainer/MainContainer";
import {
  Dialog,
  DialogThumbnail,
  DialogThumbnailLastMessage,
  DialogThumbnailPersonAvatar,
  DialogThumbnailPersonUsername,
  DialogThumbnails,
  Message,
  MessageAvatar,
  MessagesWrapper,
  MessageText,
  MessageTextArea,
  NoDialogsTitle,
} from "./Messages.styles";

const Messages: React.FC = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const meId = 321321;
  const dialogs = [
    {
      dialogId: "132132132131",
      participants: [
        {
          userId: 321,
          userName: "Dima",
          avatarUrl:
            "https://sun9-57.userapi.com/impg/wUDRiDp5BM8PaLMIrKO9cYjWlofeSXLkhYTjLw/WHyyg5Slo2o.jpg?size=785x589&quality=96&sign=92559cf2ba36d1aa5071fc6594954e02&type=album",
        },
        {
          userId: 123,
          userName: "vlad bumaga a4",
          avatarUrl:
            "https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album",
        },
      ],
      lastMessage: "хаха!",
    },

    {
      dialogId: "321312312312",
      participants: [
        {
          userId: 321,
          userName: "Igor",
          avatarUrl:
            "https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album",
        },
        {
          userId: 123,
          userName: "John",
          avatarUrl:
            "https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album",
        },
      ],
      lastMessage: "вау!",
    },

    {
      dialogId: "3213132323132",
      participants: [
        {
          userId: 321,
          userName: "kukumber1488",
          avatarUrl:
            "https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album",
        },
        {
          userId: 123,
          userName: "Eugen",
          avatarUrl:
            "https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album",
        },
      ],
      lastMessage: "что задавали по матеше",
    },
  ];

  const messages = [
    {
      messageId: 1,
      dialogId: "132132132131",
      authorId: 321321,
      authorAvatarUrl:
        "https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album",
      body: "привет",
    },
    {
      messageId: 2,
      dialogId: "132132132131",
      authorId: 321313,
      authorAvatarUrl:
        "https://sun9-57.userapi.com/impg/wUDRiDp5BM8PaLMIrKO9cYjWlofeSXLkhYTjLw/WHyyg5Slo2o.jpg?size=785x589&quality=96&sign=92559cf2ba36d1aa5071fc6594954e02&type=album",
      body: "привет",
    },
    {
      messageId: 3,
      dialogId: "132132132131",
      authorId: 321321,
      authorAvatarUrl:
        "https://sun9-3.userapi.com/impg/X2P_4UgWWQA7iZmE6_57Faz4EBUyUE7QhOICYw/P2d5xPB7bU4.jpg?size=640x480&quality=96&sign=3161228576c10c9959132fc8af4d6d49&type=album",
      body: "займи 100р пж до завтра",
    },
    {
      messageId: 4,
      dialogId: "132132132131",
      authorId: 321313,
      authorAvatarUrl:
        "https://sun9-57.userapi.com/impg/wUDRiDp5BM8PaLMIrKO9cYjWlofeSXLkhYTjLw/WHyyg5Slo2o.jpg?size=785x589&quality=96&sign=92559cf2ba36d1aa5071fc6594954e02&type=album",
      body: "ок",
    },
    {
      messageId: 5,
      dialogId: "132132132131",
      authorId: 321313,
      authorAvatarUrl:
        "https://sun9-57.userapi.com/impg/wUDRiDp5BM8PaLMIrKO9cYjWlofeSXLkhYTjLw/WHyyg5Slo2o.jpg?size=785x589&quality=96&sign=92559cf2ba36d1aa5071fc6594954e02&type=album",
      body: "хаха!",
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
                    alt="avatar"
                  />
                  <FlexContainer direction="column" justify="flex-start">
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

            <Dialog>
              {!params.dialogId ? (
                <NoDialogsTitle>
                  Select the user you want to chat with
                </NoDialogsTitle>
              ) : (
                <>
                  {messages.map((message) => {
                    return (
                      message.dialogId === params.dialogId && (
                        <Message isMe={meId === message.authorId}>
                          <MessageAvatar src={message.authorAvatarUrl} />
                          <MessageText isMe={meId === message.authorId}>
                            {message.body}
                          </MessageText>
                        </Message>
                      )
                    );
                  })}
                  <MessageTextArea placeholder="text message..." />
                </>
              )}
            </Dialog>
          </>
        )}
      </MessagesWrapper>
    </MainContainer>
  );
};

export default Messages;
