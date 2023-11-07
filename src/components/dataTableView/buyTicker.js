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
        handleCloseBuyTicker()
    }

    const handlePriceOnChange = (e) => {
        setPrice(e.target.value)
    }

    const handleTransactionDateOnChange = (e) => {
        setTransactionDate(e.target.value)
    }


    const handleBuyStock = (e) => {

        console.log('BuyTicker, stockItemID: ', stockItemID)
        console.log('BuyTicker, transactionDate: ', transactionDate)
        console.log('BuyTicker, price: ', price)

        if (price !== null && transactionDate !== null){
            setIsLoadingBuyBtnStock(true)
            setDisableBuyBtnStock(true)
            axios({
                url: `${url_stock_item_buy}`,
                method: "POST",
                data: {
                    stock_item_id: stockItemID,
                    price: price,
                    transaction_date: transactionDate,
                }

            }).then( res => {
                setIsLoadingBuyBtnStock(false)
                setDisableBuyBtnStock(false)
                // setIsLoading(false)
                if(res.status == 200){
                    console.log('BuyTicker, stock-item: ', res.data)
                    // setPortfolioResult(res.data)

                    closeButtonHandler()

                }
            }).catch( error => {
                setIsLoadingBuyBtnStock(false)
                setDisableBuyBtnStock(false)
                // setIsLoading(false)
                console.log('BuyTicker, handleBuyStock error: ', error)
            })
        }
    }


    return(
        <>
            <Grid item  xs={12} md={12} lg={12} >

                <Grid container >
                    <Grid item lg={8}  >
                        <Typography  >
                            <strong>Buy Ticker</strong>
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

                <Grid container >
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <TextField id="price" label="Price"
                                   value={price}
                                   onChange={handlePriceOnChange}
                        />
                    </Grid>
                </Grid>

                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2023-10-24T10:30"
                    className={classes.dateTimeTextField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleTransactionDateOnChange}
                />

                <Button variant="contained" color="primary"
                        style={{marginBottom:20, marginLeft:30, marginTop:20}}
                        onClick={handleBuyStock}
                        disabled={disableBuyBtnStock}
                >
                    {/*{isLoadingAddBtnPortfolio? <ClipLoader size={20} color="#36d7b7" />: null}*/}
                    <ClipLoader size={20} color="#36d7b7" loading={isLoadingBuyBtnStock}/>
                    <span style={{marginLeft:10}}>
                        Buy
                    </span>
                </Button>

            </Grid>
        </>
    )
}