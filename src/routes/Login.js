import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';


export default function FormPropsTextFields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    const h6El =  document.querySelector(".error")
    const user = {
      email,
      password,
    }
   
    console.log("user -> ",user);
    localStorage.setItem("user", JSON.stringify(user));
    
    fetch("http://127.0.0.1:8080/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",   
        Authorization: "Basic " + btoa(user.email + ":" + user.password)
      },
    }).then((res) => {
      if (res.status === 200) { 
        res.text().then((x) => {
         const userResp = JSON.parse(x)
          
          console.log(userResp);
          if(userResp.roles.includes("ADMIN")){
            window.location.href = "/admin"
          }else{
            window.location.href = "/userpage"
          }
          h6El.innerHTML = x
        });
        h6El.style.color = "blue"
      // window.location.href = "/userpage"
      }else  {
        h6El.style.color = "red"
         res.text().then((x) => {
          console.log(x);
          h6El.innerHTML = x
        });
        
      }
        
    })
    .then((data) => console.log("data -> ",data))
    .catch((err) => console.log("err->",err));
  };
  return (
    <Box
      className="reg-form"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} >
      <h3>Login Form</h3>
      <div>
        <TextField
        style={{
          width: "25%",
         
        }}
          required
          id="outlined-number"
          label="email"
          name="email"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        style={{
          width: "25%",
         
        }}
          required
          id="outlined-number"
          label="password"
          name="password"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
      </div>
      <h6 className="error"/>
      <Button  onClick={handleSubmit} variant="contained">Submit</Button>
      <h4>
        Not yet Registered? <Button color="success" href="/register" >Sign Up</Button>
      </h4>
        </Paper>
     
    </Box>
  );
}
