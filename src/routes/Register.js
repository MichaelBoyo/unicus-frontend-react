import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';

export default function FormPropsTextFields() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setConfirmPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  
  const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = (event) => {
    const user = {
      firstName,
      lastName,
      email,
      phoneNumber
,
      password,
      repeat_password,
      day,
      month,
      year,
      imageUrl
    };
    const h6El = document.querySelector(".error");

    console.log(user);

    fetch("http://127.0.0.1:8080/api/v1/user/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.text().then((x) => {
            const userResp = JSON.parse(x);
            console.log(userResp);
          });
          h6El.style.color = "blue";
          window.location.href = "/userpage"
        } else {
          h6El.style.color = "red";
          res.text().then((x) => {
            console.log(x);
            h6El.innerHTML = x;
          });
        }
      })
      .then((data) => console.log("data -> ", data))
      .catch((err) => console.log("err->", err));
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
       <h3>Registeration Form</h3>
      <div>
        <TextField
          style={{
            width: "25%",
          }}
          required
          id="fullWidth"
          
          label="First Name"
          name="firstName"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          required
          style={{
            width: "25%",
          }}
          id="outlined-number"
          label="Last Name"
          name="lastName"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br/>
        
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
        <br/>
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
        <TextField
          required
          style={{
            width: "25%",
           
          }}
          id="outlined-number"
          label="confirm password"
          name="repeat_password"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={repeat_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br/>
        <TextField
          required
          style={{
            width: "15%",
          }}
          id="outlined-number"
          label="day of birth"
          name="day"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <TextField
          required
          style={{
            width: "25%",
          }}
          id="outlined-number"
          label="month of birth"
          name="month"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <TextField
          required
          style={{
            width: "15%",
          }}
          id="outlined-number"
          label="year of birth"
          name="year"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br/>
        <TextField
          required
          style={{
            width: "25%",
          }}
          id="outlined-number"
          label="Phone Number"
          name="phoneNumber
    "
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={phoneNumber
    }
          onChange={(e) => setPhone(e.target.value)}
        />
         <TextField
          required
          style={{
            width: "25%",
          }}
          id="outlined-number"
          label="image url"
          name="imageUrl"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />


      </div>
      <h6 className="error" />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
      <h4>
        Already have an account? <Button color="success" href="/login" >Login</Button>
      </h4>
        </Paper>
    </Box>
  );
}
