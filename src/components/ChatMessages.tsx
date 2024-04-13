import React, { FC } from "react";
import "./styles/messages.css";

type Props = {
  chatMessages: {
    message: string;
    fromUser: string;
    sendedAt: string;
  }[];
};

export const ChatMessages: FC<Props> = ({ chatMessages }) => {
  const currentUser = "kolya";
  return (
    <div>
      {chatMessages.map((message, index) => {
        return (
          // <div
          //   style={{
          //     display: "flex",
          //     justifyContent:
          //       message.fromUser === currentUser ? "flex-end" : "flex-start",
          //     padding: "0 20px",
          //     marginTop: "10px",
          //   }}
          //   key={index}
          // >
          //   <div
          //     style={{
          //       border: "1px solid black",
          //       borderRadius: "5px",
          //       fontSize: "30px",
          //       display: "flex",
          //       position: "relative",
          //     }}
          //   >
          //     <div
          //       style={{
          //         flex: 1,
          //         display: "flex",
          //         justifyContent: "center",
          //         alignItems: "flex-start",
          //       }}
          //     >
          //       <div>{message.message}</div>
          //     </div>
          //     <div
          //       style={{
          //         display: "flex",
          //         justifyContent: "flex-end",
          //         alignItems: "flex-end",
          //         paddingRight: "0px",
          //         color: "rgb(0,0,0,0.8)",
          //         fontSize: "15px",
          //         top: 0,
          //         right: 0,
          //       }}
          //     >
          //       {message.sendedAt}
          //     </div>
          //   </div>
          // </div>
          <div className="imessage">
            <p
              className={
                message.fromUser === currentUser ? "from-me" : "from-them"
              }
            >
              {message.message}
            </p>
          </div>
        );
      })}
    </div>
  );
};
