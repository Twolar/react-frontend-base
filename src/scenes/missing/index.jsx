import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Box m="0px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="404"
          subtitle="Sorry it looks like the content you were looking for does not exist"
        ></Header>
      </Box>

      <Box display="flex" justifyContent="start" mt="20px">
        <Button onClick={goBack} color="secondary" variant="contained">
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default Missing;
