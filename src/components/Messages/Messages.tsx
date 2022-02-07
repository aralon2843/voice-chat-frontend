import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";
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
  const socket: Socket = io("http://localhost:3001/");

  const params = useParams();
  const navigate = useNavigate();
  const meId = 321321;

  const [messageValue, setMessageValue] = useState("");

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
  ];

  const [messages, setMessages] = useState<string[]>([]);

  const onSendMessage = (message: string): void => {
    socket.emit("messageToServer", message);
    setMessageValue("");
  };

  useEffect(() => {
    console.log("reload");
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);

  useEffect(() => {
    console.log("reload");
    socket.on("messageToClient", (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages, socket]);

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
                    placeholder="text message..."
                    onChange={(e) => {
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
