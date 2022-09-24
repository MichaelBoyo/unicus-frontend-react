import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";

import { Paper } from "@mui/material";
const user = JSON.parse(localStorage.getItem("user"));

export default function FormPropsTextFields() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };

  return (
    <Container>
      <Box
        className="reg-form"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Admin Page</h3>
        <Button href="/admin2" variant="contained">
          get all users
        </Button>
      
      </Box>
      <Paper className="user-div" elevation={3} style={paperStyle}>
       
      </Paper>
    </Container>
  );
}
