import React, {useState, useEffect} from "react";
import './style.css'
import ReactModal from 'react-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import {portfolioStyles} from "../portfolioTracker/style";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import {BuyTicker} from "./buyTicker";
import axios from "axios";
import {url_stock_item_list} from "../../config";
import {BarLoader} from "react-spinners";
import Button from "@material-ui/core/Button";
import {Grid} from "@mui/material";
import {AddStock} from "./addStock";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {SellTicker} from "./sellTicker";


export const DataTableView = (props) =>{

    const classes = portfolioStyles()

    const [openBuyTicker, setOpenBuyTicker] = useState(false)
    const [openSellTicker, setOpenSellTicker] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isStockItemEmpty, setIsStockItemEmpty] = useState(false)

    const [openAddStockModal, setOpenAddStockModal] = useState(false)
    const [stockItemList, setStockItemList] = useState([])
    const [stockItemID, setStockItemID] = useState(null)

    useEffect(  () => {

        axios({
            url: `${url_stock_item_list}`,
            method: "GET",
        }).then( res => {
            setIsLoading(false)
            if(res.status === 200){
                console.log('DataTableView, stock_item: ', res.status)
                console.log('DataTableView, stock_item: ', res.data)
                setStockItemList(res.data)
                if(res.data?.length == 0){
                    // setAddPortfolio(true)
                    setIsStockItemEmpty(true)
                }
                // setPortfolioResult(res.data[0])
            }
        }).catch( error => {
            setIsLoading(false)
            console.log('DataTableView, stock_item error: ', error)
        })

    }, [])


//----------------- open add Close modal ------------------------ //

    const handleOpenBuyTicker = (e, stock_item_id)=>{
        console.log('DataTableView, handleOpenBuyTicker, stock_item_id: ', stock_item_id)
        setOpenBuyTicker(true)
        setStockItemID(stock_item_id)
    }
    const handleCloseBuyTicker=()=>{
        setOpenBuyTicker(false)
    }

    const handleOpenSellTicker = (e, stock_item_id)=>{
        console.log('DataTableView, handleOpenBuyTicker, stock_item_id: ', stock_item_id)
        setOpenSellTicker(true)
        setStockItemID(stock_item_id)
    }
    const handleCloseSellTicker=()=>{
        setOpenSellTicker(false)
    }
//----------------- handlers ------------------------ //
    const handleAddStock = (e) => {
        setOpenAddStockModal(true)
    }
    const handleAddStockClose = (e) => {
        setOpenAddStockModal(false)
    }

    return(
        <>
            {
                isLoading ? (
                    <BarLoader color="#36d7b7" width={'100%'} height={4} />
                ):(
                    isStockItemEmpty ? (
                        <>
                            <Grid container >
                                <Grid item xs={12} md={12} lg={12} xl={12} style={{display:"flex" , justifyContent:"center", alignItems:"center", }}>
                                    <Button variant="contained" color="primary"
                                            style={{marginTop:30, width:"25%"}}
                                            onClick={handleAddStock}
                                    >
                                        + Add Stock
                                    </Button>
                                </Grid>
                            </Grid>

                        </>
                    ):(
                        <>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">

                                    <TableHead >
                                        <TableRow>
                                            <TableCell> </TableCell>
                                            <TableCell style={{color:'#fff'}} align="right">NAME</TableCell>
                                            <TableCell style={{color:'#fff'}} align="right">AMOUNT</TableCell>
                                            <TableCell style={{color:'#fff'}} align="right">STOCK</TableCell>
                                            <TableCell style={{color:'#fff'}} align="right">BUY</TableCell>
                                            <TableCell style={{color:'#fff'}} align="right">SELL</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                        <TableRow >
                            <TableCell style={{color:'#fff'}} component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell style={{color:'#fff'}} align="right">BTC</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">$ 28,176 </TableCell>
                            <TableCell style={{color:'#fff'}} align="right">1</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">89.87%</TableCell>
                            <TableCell style={{color:'#81a94e'}} align="right">$ 1,285.67</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">$ 28,176 </TableCell>
                            <TableCell style={{color:'#84ad51'}} align="right">4.78%</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">
                                <IconButton onClick={handleOpenEditTicker}>
                                    <EditIcon  style={{color:'#fff'}} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <ReactModal
                isOpen={openEditTicker}
                onRequestClose={handleCloseEditTicker}
                className="myModal"
                overlayClassName="modalOverlay"
                closeTimeoutMS={500}
            >
                <EditTicker
                    handleCloseEditTicker={handleCloseEditTicker}
                />
            </ReactModal>
        </>
    )
}