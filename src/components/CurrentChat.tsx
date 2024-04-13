import React, { FC, useMemo, useState } from "react";
import { useAppSelector } from "../store/store-hooks";
import { ChatMessages } from "./ChatMessages";
import { CoreInput } from "../ui-kit/CoreInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchOutlined, SendOutlined } from "@ant-design/icons";
import "./styles/chat.css";

type Inputs = {
  newMessage: string;
};
type SearchMessage = {
  searchedText: string;
};

type ClearSearchInputProps = {
  reset: () => void;
};

const SendMessageButton: React.FC<ClearSearchInputProps> = ({ reset }) => {
  return (
    <SendOutlined type = "submit"
      onClick={() => {
        reset();
      }}
    />
  );
};

const ViewSearchButton: React.FC<any> = ({ SetIsSearchInChatIsVisible }) => {
  return (
    <SearchOutlined
      onClick={() => {
        SetIsSearchInChatIsVisible(true);
      }}
    />
  );
};

export const CurrentChat: FC = () => {
  const chatId = useAppSelector((state) => state.chatInfo);
  const UserInformationFromChatId = {
    name: "Andryha",
    lastSeen: "5 min ago",
  };
  const currentUser = "kolya";

  const { control, watch, getValues, reset, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      newMessage: "",
    },
  });

  const {
    control: searchControl,
    watch: searchWatch,
    getValues: searchGetValue,
    reset: searchReset,
  } = useForm<SearchMessage>({
    defaultValues: {
      searchedText: "",
    },
  });

  const [isSearchInChatIsVisible, SetIsSearchInChatIsVisible] =
    useState<boolean>(false);
  const searchStyle = useMemo(() =>{
    return isSearchInChatIsVisible? "search" : "searchNonVisable";
  }, [isSearchInChatIsVisible])
  const [chatMessages, setChatMessages] = useState([
    {
      message: "231257",
      fromUser: "kolya",
      sendedAt: "12:00",
    },
    {
      message: "23235",
      fromUser: "jenya",
      sendedAt: "12:15",
    },
    {
      message: "23654",
      fromUser: "vova",
      sendedAt: "12:20",
    },
    {
      message: "231",
      fromUser: "andr",
      sendedAt: "12:23",
    },
    {
      message: "23234",
      fromUser: "tolya",
      sendedAt: "15:12",
    },
  ]);
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
  };
  return (
    <div className="main">
      <header className="header">
        <div className="userInfo">
          <h2 className="userName">{UserInformationFromChatId.name}</h2>
          <div>{`Be able ${UserInformationFromChatId.lastSeen}`}</div>
        </div>
          <div className={searchStyle}>
            <CoreInput
              control={searchControl}
              size="large"
              label="Searched text"
              name="searchedText"
              placeholder="Write text"
              type="text"
              isAllowClear={true}
            />
          </div>
        <div className="findButton">
          <ViewSearchButton
            SetIsSearchInChatIsVisible={SetIsSearchInChatIsVisible}
          />
        </div>
      </header>
      <div className="messages">
      <ChatMessages chatMessages={chatMessages} />
      </div>
      
      <form className="newMessageInput" onSubmit={handleSubmit(onSubmit)}>
          <CoreInput
            control={control}
            size="large"
            label="New message"
            name="newMessage"
            placeholder="Write new message"
            type="text"
            isAllowClear={true}
            addonAfter={<SendMessageButton reset={reset} />}
          />
      </form>
    </div>
  );
};
