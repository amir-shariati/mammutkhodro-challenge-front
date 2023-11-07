import React, {useState} from 'react'
import {Divider, Grid, Typography} from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import TextField from "@material-ui/core/TextField";
import {tableStyles} from "./style";
import Button from "@material-ui/core/Button";
import {ClipLoader} from "react-spinners";
import axios from "axios";
import {url_stock_item_buy} from "../../config";


export const BuyTicker =(props)=>{

    const {handleCloseBuyTicker, stockItemID} = props

    const classes = tableStyles()

    const [price, setPrice] = useState(null)
    const [transactionDate, setTransactionDate] = useState(null)

    const [isLoadingBuyBtnStock, setIsLoadingBuyBtnStock] = useState(false)
    const [disableBuyBtnStock, setDisableBuyBtnStock] = useState(false)

    const closeButtonHandler =()=>{
        handleCloseEditTicker()
    }
    return(
        <>
            <Grid item  xs={12} md={12} lg={12} >

                <Grid container >
                    <Grid item lg={8}  >
                        <Typography  >
                            <strong>Edit Coin</strong>
                        </Typography>

                    </Grid>
                    <Grid item lg={4}>
                        <IconButton
                            onClick={closeButtonHandler}
                            style={{float:'right' , marginRight:5,color:'#2962FF',width:30,height:30}}
                        >
                            <ClearIcon  style={{fontSize:20}}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
            </Grid>
        </>
    )
}