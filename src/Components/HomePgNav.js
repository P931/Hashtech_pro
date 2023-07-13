import React from 'react'
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Typography } from '@mui/material';

const useStyles = makeStyles({
  userNavbar: {
    position: "sticky",
    top: "0",
    zIndex: "3",
    padding: "16px 22px",
    "&>div": {
      display: "flex",
      justifyContent: "space-between",
      "&>div": {
        "&>p": {
          fontWeight: "bold",
        }
      }
    }
  }
})

const HomePgNav = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const handUserLogout = () => {
    navigate('/')
  }

  return (
    <>
      <Paper className={classes.userNavbar}>
        <Grid>
          <Grid>
            <Typography>Hashtechy</Typography>
          </Grid>
          <Grid>
            <Button
              variant="text"
              onClick={() => handUserLogout()}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default HomePgNav