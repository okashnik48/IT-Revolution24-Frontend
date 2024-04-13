import React, { FC, useMemo } from "react";
import ItemUserChat from "./ItemUserChat";
import { useForm } from "react-hook-form";
import { CoreInput } from "../ui-kit/CoreInput";
import { CloseOutlined } from "@ant-design/icons";

type Inputs = {
  searchText: string;
};


export const PreViewUsersChats: FC = () => {
  const { control, watch, getValues } =
    useForm<Inputs>({
        defaultValues: {
            searchText: ""
        }
    });

  const preViewChatsList = [
    {
      id: "1",
      image: "user1.jpg",
      userName: "User 1",
      message: "Hello!",
      lastMessageTime: "10:00 AM",
    },
    {
      id: "2",
      image: "user2.jpg",
      userName: "User 2",
      message: "Hi there!",
      lastMessageTime: "11:30 AM",
    },
    {
      id: "3",
      image: "user3.jpg",
      userName: "User 3",
      message: "Good morning!",
      lastMessageTime: "9:15 AM",
    },
    {
      id: "4",
      image: "user4.jpg",
      userName: "User 4",
      message: "How are you?",
      lastMessageTime: "3:00 PM",
    },
    {
      id: "5",
      image: "user5.jpg",
      userName: "User 5",
      message: "Nice to meet you!",
      lastMessageTime: "1:45 PM",
    },
  ];
  const searchedPosts = useMemo(() => {
    return preViewChatsList.filter((preViewChat) => {
      return preViewChat.userName
        ?.toLowerCase()
        .includes(getValues("searchText")?.toLowerCase());
    });
  }, [preViewChatsList, watch("searchText")]);
  return (
    <div style={{width: "20%"}}>
      <form style={{width: "100%"}}>
        <CoreInput
          control={control}
          size="large"
          label="Search user"
          name="searchText"
          placeholder="User name"
          type="text"
          isAllowClear = {true}
        />
      </form>
      {searchedPosts.map((preViewChat) => {
        return <ItemUserChat preViewChatInfo={preViewChat} />;
      })}
    </div>
  );
};
