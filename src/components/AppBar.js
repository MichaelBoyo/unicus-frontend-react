import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            style={{
              fontFamily: "cursive",
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "flex-start",
            }}
            href="/"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              UNICUS 
            </a>
          </Typography>

          <ButtonGroup
            variant="text"
            aria-label="outlined primary button group"
            
          >
             <Button href="/programs">
            Programs
          </Button>
          <Button  href="/faq">
            FAQ
          </Button>
          <Button  href="/about">
            About
          </Button>
          <Button  href="/blog">
            Blog
          </Button>
          <Button href="/contact">Contact</Button>     
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
