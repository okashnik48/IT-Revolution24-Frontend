import { Box, Typography } from "@mui/material";
import React from "react";

type Props = { message: string };

function UserMessage({ message }: Props) {
  return (
    <Box
      sx={{
        background: ({ palette }) => palette.info.main,
        padding: 1,
        width: "fit-content",
        borderRadius: "10px 10px 10px 0",
      }}
    >
      <Typography variant="body2" fontSize="12px" color="white">
        You
      </Typography>
      <Typography fontSize="16px" variant="body1" color="white">
        {message}
      </Typography>
    </Box>
  );
}

export default UserMessage;
