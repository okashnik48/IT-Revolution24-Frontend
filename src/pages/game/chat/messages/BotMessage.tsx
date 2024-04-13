import { Box, Typography } from "@mui/material";

type Props = {
  message: string;
};

function BotMessage({ message }: Props) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-end">
      <Box
        sx={{
          background: ({ palette }) => palette.warning.main,
          padding: 1,
          textAlign: "right",
          width: "fit-content",
          borderRadius: "0 10px 10px 10px",
        }}
      >
        <Typography variant="body2" fontSize="12px" color="white">
          Aqualya
        </Typography>
        <Typography variant="body1" color="white">
          {message}
        </Typography>
      </Box>
    </Box>
  );
}

export default BotMessage;
