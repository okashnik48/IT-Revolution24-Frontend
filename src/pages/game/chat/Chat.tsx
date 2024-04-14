import React, { useEffect, useRef, useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  IconButton,
  FormControl,
  FormLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmsIcon from "@mui/icons-material/Sms";
import { bot_messages } from "./dummy_messages";
import BotMessage from "./messages/BotMessage";
import UserMessage from "./messages/UserMessage";

type ChatMessage = {
  message: string;
  owner: "user" | "bot";
};

export default function Chat() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const send = () => {
    const newMessage = { message, owner: "user" } as ChatMessage;
    const botResponse = {
      message: bot_messages[Math.floor(Math.random() * bot_messages.length)],
      owner: "bot",
    } as ChatMessage;

    setChatMessages((prev) => [...prev, newMessage]);
    setMessage("");

    setTimeout(() => {
      setChatMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setChatMessages(JSON.parse(savedMessages));
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
    }
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1} paddingY={1}>
        <SmsIcon fontSize="large" color="warning" />
        <Typography variant="h6" color="white">
          Aqualya Chat
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={{ overflowY: "auto", height: "500px", flexGrow: 1 }}
        spacing={2}
      >
        {chatMessages.map((chatMessage, index) =>
          chatMessage.owner === "bot" ? (
            <BotMessage key={index} message={chatMessage.message} />
          ) : (
            <UserMessage key={index} message={chatMessage.message} />
          )
        )}
        <div ref={messagesEndRef} />{" "}
        {/* Invisible div at the end of the messages */}
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <FormControl
          fullWidth
          sx={{
            background: "white",
            borderRadius: "10px",
            padding: "8px",
          }}
        >
          <FormLabel
            htmlFor="outlined-multiline-static"
            sx={{ color: "white" }}
          ></FormLabel>
          <TextField
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
            fullWidth
            variant="outlined"
            color="warning"
            id="outlined-multiline-static"
            label="Message"
            value={message}
            onChange={onChange}
            InputProps={{
              endAdornment: (
                <IconButton
                  color="warning"
                  aria-label="send-button"
                  onClick={send}
                >
                  <SendIcon />
                </IconButton>
              ),
            }}
            placeholder="Type a message"
          />
        </FormControl>
      </Stack>
    </>
  );
}
