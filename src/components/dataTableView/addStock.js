import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {url_stock_item_add, url_stock_list} from "../../config";
import {Grid, Paper, Typography} from "@mui/material";
import {tableStyles } from './style'
import Button from "@material-ui/core/Button";
import {ClipLoader} from "react-spinners";
import {PortfolioContext} from "../../contexts";

export const AddStock = (props) => {

    const classes = tableStyles()

    const {handleAddStockClose} = props

    const [stockList, setStockList] = useState([])
    const [open, setOpen] = useState(false);

    const [stockSelect, setStockSelect] = useState(null);

    const [isLoadingAddBtnStock, setIsLoadingAddBtnStock] = useState(false)
    const [disableAddBtnStock, setDisableAddBtnStock] = useState(false)

    const portfolio = useContext(PortfolioContext);

    useEffect(  () => {

        axios({
            url: `${url_stock_list}`,
            method: "GET",
        }).then( res => {
            // setIsLoading(false)
            if(res.status === 200){
                console.log('AddStock, stock: ', res.status)
                console.log('AddStock, stock: ', res.data)
                if(res.data?.length > 0){
                    setStockList(res.data)
                    // setAddPortfolio(true)
                    // setIsStockItemEmpty(true)
                }
                // setPortfolioResult(res.data[0])
            }
        }).catch( error => {
            // setIsLoading(false)
            console.log('AddStock, stock error: ', error)
        })

    }, [])

    const handleChange = (event) => {
        // setAge(event.target.value);
        setStockSelect(event.target.value)
        console.log('AddStock, handleChange, value: ', event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleAddStock = (e) => {
        console.log('AddStock, handleAddStock, clicked, portfolio id: ', portfolio.id)
        console.log('AddStock, handleAddStock, clicked, stock select: ', stockSelect)
        if (stockSelect !== null && portfolio.id !== null){
            console.log('AddStock, handleAddStock, clicked, after if')
            setIsLoadingAddBtnStock(true)
            setDisableAddBtnStock(true)
            axios({
                url: `${url_stock_item_add}`,
                method: "POST",
                data: {
                    stock_id: stockSelect,
                    portfolio_id: portfolio.id,
                }

            }).then( res => {
                setIsLoadingAddBtnStock(false)
                setDisableAddBtnStock(false)
                // setIsLoading(false)
                if(res.status == 201){
                    console.log('AddStock, stock-item: ', res.data)
                    // setPortfolioResult(res.data)

                    // setAddPortfolio(false)
                    // setOpenPortfolioModal
                    handleAddStockClose()

                }
            }).catch( error => {
                setIsLoadingAddBtnStock(false)
                setDisableAddBtnStock(false)
                // setIsLoading(false)
                console.log('Home, portfolio error: ', error)
            })
        }
    }


    return(
        <>
            <div style={{backgroundColor:'#253344',}}>
                <Grid container >
                    <Grid item xs={12} md={12} lg={12} xl={12}>

                        <p>Add Stock Modal</p>

                        <Paper className={classes.titleCard}>
                            {/*<Typography className={classes.titleText}>*/}
                            {/*</Typography>*/}

                            <Grid container >
                                <Grid item xs={12} md={12} lg={12} xl={12}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="controlled-open-select-label">Stock</InputLabel>
                                        <Select
                                            labelId="controlled-open-select-label"
                                            id="controlled-open-select"
                                            open={open}
                                            onClose={handleClose}
                                            onOpen={handleOpen}
                                            // value={age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>Choose a Model</em>
                                            </MenuItem>
                                            {
                                                stockList?.map( (stock, index)=>(
                                                    <MenuItem key={index} value={stock.id}>{stock.title}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>

                                    <Button variant="contained" color="primary"
                                            style={{marginBottom:20, marginLeft:30, marginTop:20}}
                                            onClick={handleAddStock}
                                            disabled={disableAddBtnStock}
                                    >
                                        {/*{isLoadingAddBtnPortfolio? <ClipLoader size={20} color="#36d7b7" />: null}*/}
                                        <ClipLoader size={20} color="#36d7b7" loading={isLoadingAddBtnStock}/>
                                        <span style={{marginLeft:10}}>
                                                Add
                                            </span>
                                    </Button>


                                </Grid>
                            </Grid>

                        </Paper>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}