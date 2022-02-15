import { ChangeEvent, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { useAppSelector } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import { FlexContainer } from "../App/App.styles";
import { SendPostIcon } from "../Profile/Profile.styles";
import {
  DialogWrapper,
  Message,
  MessageDate,
  MessageText,
  MessageTextArea,
  Messages,
} from "./Dialog.styles";
import sendIcon from "../../assets/icons/send.svg";
interface IDialogProps {
  me: IUser;
  dialogId: string;
}

interface IMessage {
  sender: string;
  dialogId: string;
  body: string;
  createdAt: Date;
}

const Dialog: React.FC<IDialogProps> = ({ me, dialogId }): JSX.Element => {
  const chatSocket: Socket = io("http://localhost:3001/message");
  const { _id: meId } = useAppSelector((state) => state.userReducer.me);
  const [messageValue, setMessageValue] = useState("");

  const [messages, setMessages] = useState<IMessage[]>([]);
  const params = useParams();

  const onSendMessage = (message: string): void => {
    if (message.trim() !== "") {
      chatSocket.emit("messageToServer", {
        sender: me._id,
        dialogId: dialogId,
        body: message,
      });
      setMessageValue("");
    }
  };

  useEffect(() => {
    if (chatSocket.disconnected) {
      chatSocket.on("connect", () => {
        chatSocket.emit("joinDialog", dialogId);
      });
    }
    if (chatSocket.connected) {
      return () => {
        chatSocket.emit("leaveDialog", dialogId);
      };
    }
  }, []);

  useEffect(() => {
    console.log("rerender");
    console.log(messages);
    chatSocket.on("messageToClient", (message: IMessage) => {
      setMessages((state) => [...state, message]);
    });
  }, []);

  return (
    <DialogWrapper>
      <Messages>
        {messages.map((message: IMessage) => {
          return (
            message.dialogId === params.dialogId && (
              <Message isMe={meId === message.sender}>
                {/* <MessageAvatar src={message.authorAvatarUrl} /> */}
                <MessageDate isMe={meId === message.sender}>
                  {new Date(message.createdAt).toLocaleTimeString()}
                </MessageDate>
                <MessageText isMe={meId === message.sender}>
                  {message.body}
                </MessageText>
              </Message>
            )
          );
        })}
      </Messages>
      <FlexContainer justify="space-between" align="center">
        <MessageTextArea
          placeholder="text message..."
          value={messageValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setMessageValue(e.target.value);
          }}
        />
        <SendPostIcon
          src={sendIcon}
          alt="send"
          onClick={() => {
            onSendMessage(messageValue);
          }}
        />
      </FlexContainer>
    </DialogWrapper>
  );
};

export default memo(Dialog);
