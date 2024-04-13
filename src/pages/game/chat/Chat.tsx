import React from "react";
import TextField from "@mui/material/TextField";
import {
  Stack,
  IconButton,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BotMessage from "./messages/BotMessage";
import UserMessage from "./messages/UserMessage";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SmsIcon from "@mui/icons-material/Sms";
type Props = {};

export default function Chat({}: Props) {
  const [message, setMessage] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const send = () => {
    console.log("send message", message);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1} paddingY={1}>
        <SmsIcon fontSize="large" color="warning" />
        <Typography variant="h5" color="white">
          Chat
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          overflowY: "hidden",
          height: "100%",
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Stack direction="column" overflow="auto" padding="25px">
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
          <BotMessage message="Hello" />

          <UserMessage message="Hello" />
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

            <FormHelperText></FormHelperText>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
}
