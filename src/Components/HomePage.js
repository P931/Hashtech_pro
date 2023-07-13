import React from 'react'
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux'
import { Button, Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { addUserCard } from '../action';
import HomePgNav from './HomePgNav';

const useStyles = makeStyles({
  userCardHeader: {
    margin: "11px 12px 17px 23px !important",
    fontWeight: "bold !important",
  },
  userCardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gridTemplateRows: "repeat(3, auto)",
    columnGap: "15px",
    rowGap: "15px",
    margin: "14px 9px 10px 8px",
    "&>div": {
      "&>button": {
        "&>img": {
          height: "180px"
        }
      }
    }
  },
  userCardPrice: {
    "&>P": {
      margin: "7px 14px 10px 19px",
      fontWeight: "bold",
    }
  },
  userAddToCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 10px 12px 10px",
    width: "100%",
    "&>button": {
      width: "100%"
    }
  }
})

const HomePage = ({ user, setAddCardItem }) => {

  const classes = useStyles()
  const navigate = useNavigate();

  const handlUserAddToCard = (item, id) => {

    navigate("/usercard", { state: { item } })
    setAddCardItem(item)
  }

  return (
    <>
      <HomePgNav />
      <Typography className={classes.userCardHeader}>
        All Products Listing
      </Typography>
      <Grid className={classes.userCardContainer}>
        {user?.map((item, id) => {
          return (
            <Card className={classes.userCard} key={id} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.firstName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid className={classes.userCardPrice}>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
              </Grid>
              <CardActions>
                <Grid className={classes.userAddToCard}>
                  <Button
                    variant="outlined"
                    onClick={() => handlUserAddToCard(item, id)}
                  >
                    Add To Card
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          )
        })}
      </Grid>
    </>
  )
}

const mapStateToProp = (state) => {
  console.log("state is :- ", state)
  return {
    user: state.useReducer.userCard
  }
}

const mapDispatchToProp = (dispatch) => ({
  setAddCardItem: (card) => (
    dispatch(addUserCard(card))
  )

})

export default connect(mapStateToProp, mapDispatchToProp)(HomePage)