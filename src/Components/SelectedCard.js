import React from 'react'
import { makeStyles } from '@mui/styles'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Card, Grid, Paper } from '@mui/material';
import { decreCardQuantity, increCardQuantity } from '../action';
import HomePgNav from './HomePgNav';

const useStyles = makeStyles({
  userSelectedCard: {
    "&>div": {
      "&>table": {
        margin: "4px 163px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px",
        "&>thead": {
          "&>tr": {
            "&>div": {
              "&>th": {
                padding: "42px",
                cursor: "pointer",
              }
            }
          }
        }
      }
    }
  },
  userSelectedCardItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 23px",
    height: "5rem",
    "&:hover": {
      boxShadow: "3px 4px 7px 2px grey",
    },
    "&>img": {
      height: "60px",
      position: "absolute",
      marginRight: "18%",
    },
    "&>div:nth-child(1)": {
      position: "absolute",
      marginRight: "34%",
    },
  },
  userCardDetails: {
    margin: "10px 20px",
    padding: "2px 30px",
    display: "flex",
    "&>div:nth-child(1)": {
      position: "relative",
      right: "1rem",
      cursor: "pointer",
    },
    "&>div:nth-child(2)": {
      position: "absolute",
      cursor: "pointer",
      right: "41%",
    }
  },
  userSetQuantity: {
    marginTop: "0px",
    display: "flex",
    position: "absolute",
    marginLeft: "14%",
    marginTop: "-12px",
    "&>div": {
      margin: "11px 21px 15px 21px",
    }
  },
  userSelectedCardPrice: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "17rem",
    margin: "10px 2pc",
    padding: "20px 10px",
    fontFamily: "sans-serif",
    cursor: "pointer",
  }
})

const SelectedCard = ({ user, addUserCard, totalCardPrice, setRemoveQuantity, setAddQuantity }) => {

  const classes = useStyles()
  const navigate = useNavigate();

  const handleRemoveItemandDecrequan = (addItem) => {
    setRemoveQuantity(addItem)
  }

  const handldeAddCartandIncrequan = (addItem) => {
    setAddQuantity(addItem)
  }

  return (
    <>
      <HomePgNav />
      <Grid className={classes.userSelectedCard}>
        <Grid>
          <table className={classes.userTableHead}>
            <thead>
              <tr>
                <Card>
                  <th>Id</th>
                  <th>Image</th>
                  <th>FirstName</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </Card>
              </tr>
            </thead>
          </table>
          {addUserCard.map((addItem, id) => {
            return (
              <Card className={classes.userSelectedCardItem} key={id}>
                <Grid>{id}</Grid>
                <img
                  src={addItem.image}
                  alt=""
                />
                <Grid className={classes.userCardDetails}>
                  <Grid>{addItem.firstName}</Grid>
                  <Grid>${addItem.price}</Grid>
                  <Grid className={classes.userSetQuantity}>
                    <Button
                      variant="outlined"
                      onClick={() => handleRemoveItemandDecrequan(addItem)}
                    >
                      -
                    </Button>
                    <Grid>{addItem.quantity}</Grid>
                    <Button
                      variant="outlined"
                      onClick={() => handldeAddCartandIncrequan(addItem)}
                    >
                      +
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
          <Paper className={classes.userSelectedCardPrice}>
            {`sum of total cart price  is   =  ${totalCardPrice}`}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProp = (state) => {
  console.log("state is :- ", state)
  return {
    user: state.useReducer.userCard,
    addUserCard: state.useReducer.userAddCard,
    totalCardPrice: state.useReducer.totalCardPrice
  }
}

const mapDispatchToProp = (dispatch) => ({
  setRemoveQuantity: (card) => {
    dispatch(decreCardQuantity(card))
  },
  setAddQuantity: (card) => {
    dispatch(increCardQuantity(card))
  },
})

export default connect(mapStateToProp, mapDispatchToProp)(SelectedCard)