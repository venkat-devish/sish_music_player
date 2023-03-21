import { Box, LinearProgress } from "@mui/material";
import "../styles/loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <Box sx={{ height: "20rem" }}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default Loading;
