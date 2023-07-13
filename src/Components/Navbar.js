import React from 'react'
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Typography } from '@mui/material';

const useStyles = makeStyles({
  userNavbar: {
    position: "sticky",
    top: "0",
    zIndex: "3",
    padding: "16px 22px",
    "&>div": {
      "&>p": {
        fontWeight: "bold",
      }
    }
  }
})

const Navbar = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Paper className={classes.userNavbar}>
        <Grid>
          <Typography>Hashtechy</Typography>
        </Grid>
      </Paper>
    </>
  )
}

export default Navbar