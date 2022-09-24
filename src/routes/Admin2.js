import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import UserCard from "../components/Card";

import { Card, Paper } from "@mui/material";
const user = JSON.parse(localStorage.getItem("user"));

export default function Admin2() {
  const paperStyle = { paddin2: "50px 20px", width: 600, margin: "20px auto" };

  const [users, setUsers] = useState([]);
 

  const deleteUser =(id)=>{
    fetch(`http://127.0.0.1:8080/api/v1/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(user.email + ":" + user.password),
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
   
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/v1/user/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(user.email + ":" + user.password),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
      });
  }, []);
  

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
        <h3>Unicus Users</h3>
      </Box>
      <div className="users-paper" >
        {users.map((u) => (
          <div>
            <UserCard user={u}>
            </UserCard>
          </div>
          
        ))}
      </div>
    </Container>
  );
}
