import * as React from "react";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';


import logo2 from "../images/img3.jpg";

export default function HomeBar() {
  return (
    <Box className="boxx" sx={{ flexGrow: 1 }}>
      <Paper elevation={3} >
        <h5>Our Capital , Your Expertise</h5>
          <h1>The Market Awaits You</h1>
            <Button variant="outlined"  href="/register">
              Start Now
            </Button>
            <Button color="secondary"  href="/about">
              learn More
            </Button>
          <h5>World Leading funded trading program</h5>
        </Paper>
      <div className="cont">
        <div className="c-cont" >
        <img src={logo2} alt="background" />
        <Paper elevation={3} >
        <div className="tex-el">
          <h1>Earn as a professional trader</h1>
          <h5>
            Our Prop Firm has multiple programs to start your journey as a Forex
            Funded Trader. Choose one of our funding programs and start trading,
            earn bonuses and profit-splits.
          </h5>
          <div className="buttonDiv">
            <Button variant="contained"  href="/register">
              Start Now
            </Button>

            <Button variant="contained" color="success" href="/login">
              Login
            </Button>
          </div>
        </div>
        </Paper>

        <Paper elevation={3} >
          <h2>Funded Forex Account Bonuses!</h2>
          <div className="paper-div">
          <Paper className="inner-paper" elevation={3} >
          <h4>Earn from Phase 1!</h4>
          <p>
          Get 2% of your trading profits by passing phase 1 and 4% of your trading profits by passing phase 2. Get paid on your journey to a forex funded account
          </p>
          
        </Paper>
        <Paper className="inner-paper" elevation={3} >
          <h4>More Than a refund!</h4>
          <p >
          We pay 112% refund when you reach your first profit split. Why settle for just a refund when you can get rewarded for reaching a new milestone!
          </p>
        </Paper>
          </div>
          <div className="buttonDiv">

          </div>
            <Button variant="outlined"  href="/register">
              Evaluation
            </Button>
            <Button color="secondary"  href="/about">
              Accelerated
            </Button>
          
        </Paper>
        </div>
        
      </div>
     

      {/* <img src={logo1} alt="background" /> */}
    </Box>
  );
}
