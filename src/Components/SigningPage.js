import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const useStyles = makeStyles({
  mainPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "246px",
    position: "absolute",
    top: "37%",
    left: "40%",
    margin: "-25px 0px 0px -85px",
    padding: "18px 70px",
  },
  userContainer: {
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "center",
    alignItems: "center",
    "&>div:nth-child(1)": {
      fontWeight: "bold",
      fontSize: "x-large",
    }
  },
  userTextfield: {
    "&>div": {
      marginTop: "10px",
      "&>div": {
        width: "291px"
      }
    }
  },
  userSubmit: {
    margin: "16px 4px",
    "&>button": {
      width: "193px"
    }
  }
})

const SigningPage = () => {

  const classes = useStyles();

  const navigate = useNavigate();

  const EmailReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const PasswordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,20}$/
  // one LowerCaseletter,one UpperCaseletter,one SpecialCharacter,one Number

  const [userData, setUserData] = useState({
    Email: "",
    Password: ""
  })

  const handlUserData = (e) => {

    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handlUserSubmit = () => {

    if (EmailReg.test(userData.Email) && PasswordReg.test(userData.Password)) {
      setUserData({
        Email: "",
        Password: ""
      })
      navigate('/home')
    }
  }

  return (
    <>
      <Navbar />
      <Paper className={classes.mainPaper}>
        <Grid className={classes.userContainer}>
          <Grid>
            Login
          </Grid>
          <Grid className={classes.userTextfield}>
            <Grid>
              <TextField
                error={EmailReg.test(userData.Email) ? "" : "Invalid Email"}
                helperText={EmailReg.test(userData.Email) ? "" : "Invalid Email"}
                name='Email'
                label="Email"
                variant="standard"
                value={userData.Email}
                onChange={(e) => handlUserData(e)}
              />
            </Grid>
            <Grid>
              <TextField
                error={PasswordReg.test(userData.Password) ? "" : "Invalid Password"}
                helperText={PasswordReg.test(userData.Password) ? "" : "Invalid Password"}
                name="Password"
                label="Password"
                variant="standard"
                value={userData.Password}
                onChange={(e) => handlUserData(e)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.userSubmit}>
            <Button
              variant="outlined"
              onClick={() => handlUserSubmit()}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default SigningPage