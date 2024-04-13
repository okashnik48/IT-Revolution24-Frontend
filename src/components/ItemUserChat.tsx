import React, { FC, useState } from "react";
import "./styles/states.css";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { SetCurrentChatId } from "../store/slices/chatInfo";

type Props = {
  preViewChatInfo: {
    id: string;
    image: string;
    userName: string;
    message: string;
    lastMessageTime: string;
  };
};

const ItemUserChat: FC<Props> = ({ preViewChatInfo }) => {
  const dispatch = useAppDispatch();
  const currentChatId = useAppSelector((state) => state.chatInfo.currentChatId);

  const getClassNames = (preViewChatId:string) => {
    if (currentChatId === preViewChatId) {
      return "userPreviewFormOnClick userPreviewForm";
    } else {
      return "userPreviewForm";
    }
  };

  return (
    <form
      key={preViewChatInfo.id}
      className={getClassNames(preViewChatInfo.id)}
      onClick={() => {
        dispatch(SetCurrentChatId({ id: preViewChatInfo.id }));
      }}
    >
      <img
        alt="user"
        src="/images/user.svg"
        style={{ width: "50px", height: "100%", marginRight: "10px" }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <h2 style={{ margin: 0 }}>{preViewChatInfo.userName}</h2>

        <div>{preViewChatInfo.message}</div>
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          paddingRight: "0px",
          top: 0,
          right: 0,
        }}
      >
        {preViewChatInfo.lastMessageTime}
      </div>
    </form>
  );
};

export default ItemUserChat;
