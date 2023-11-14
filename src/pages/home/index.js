import axios from "axios"
import {useEffect, useState, createContext} from "react";
import {Grid, Paper, Typography,} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactModal from 'react-modal';
import {homeStyles} from "./style";
import {PortfolioTracker} from "../../components/portfolioTracker/portfolioTracker";
import {url_portfolio_list} from "../../config";
import {BarLoader, ClipLoader, MoonLoader} from "react-spinners";
import {PortfolioContext} from '../../contexts'


const Home = (props) => {

    const classes = homeStyles();

    const [addPortfolio, setAddPortfolio] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [openPortfolioModal, setOpenPortfolioModal] = useState(false)

    const [titlePortfolio, setTitlePortfolio] = useState(null)
    const [balancePortfolio, setBalancePortfolio] = useState(null)

    const [isLoadingAddBtnPortfolio, setIsLoadingAddBtnPortfolio] = useState(false)
    const [disableAddBtnPortfolio, setDisableAddBtnPortfolio] = useState(false)

    const [portfolioResult, setPortfolioResult] = useState(null)

    useEffect(  () => {

        axios({
            url: `${url_portfolio_list}`,
            method: "GET",
        }).then( res => {
            setIsLoading(false)
            if(res.status === 200){
                console.log('Home, portfolio: ', res.status)
                console.log('Home, portfolio: ', res.data)
                if(res.data?.length == 0){
                    setAddPortfolio(true)
                }
                setPortfolioResult(res.data[0])
            }
        }).catch( error => {
            setIsLoading(false)
            console.log('Home, portfolio error: ', error)
        })

    }, [])

    // useEffect( ()=>{
    //     console.log('titlePortfolio: ', titlePortfolio)
    // }, [titlePortfolio])

    const handleOpenPortfolioModal = (e) => {
        setOpenPortfolioModal(true)
    }
    const handleClosePortfolioModal=()=>{
        setOpenPortfolioModal(false)
    }

    const handleTitlePortfolioOnChange = (e) => {
        setTitlePortfolio(e.target.value)
    }
    const handleBalancePortfolioOnChange = (e) => {
        setBalancePortfolio(e.target.value)
    }

    const handleAddPortfolio = (e) => {
        console.log('Home, handleAddPortfolio, clicked ')
        console.log('Home, handleAddPortfolio, balancePortfolio: ', balancePortfolio)
        console.log(Number.isFinite(balancePortfolio))
        // if (Number.isFinite(balancePortfolio) && titlePortfolio !== null){
        if (balancePortfolio !== null && titlePortfolio !== null){
            console.log('Home, handleAddPortfolio, clicked, after if')
            setIsLoadingAddBtnPortfolio(true)
            setDisableAddBtnPortfolio(true)
            axios({
                url: `${url_portfolio_list}`,
                method: "POST",
                data: {
                    title: titlePortfolio,
                    balance: parseFloat(balancePortfolio),
                }

            }).then( res => {
                setIsLoadingAddBtnPortfolio(false)
                setDisableAddBtnPortfolio(false)
                // setIsLoading(false)
                if(res.status == 201){
                    // console.log('Home, portfolio: ', res.status)
                    console.log('Home, add portfolio: ', res.data)

                    setAddPortfolio(false)
                    setOpenPortfolioModal(false)

                    // if(res.data?.length == 0){
                    //     setAddPortfolio(true)
                    // }
                }
            }).catch( error => {
                setIsLoadingAddBtnPortfolio(false)
                setDisableAddBtnPortfolio(false)
                // setIsLoading(false)
                console.log('Home, portfolio error: ', error)
            })
        }
    }

    return (
        <>
            <div style={{marginTop:150 ,marginLeft:80,marginRight:80}}>


                <Grid container >
                    <Grid item xs={1} md={1} lg={1} xl={1} />

                    <Grid item xs={10} md={10} lg={10} xl={10}>
                        <Paper className={classes.homeBg} >
                            {/*<PortfolioTracker />*/}

                            {
                                isLoading ? (
                                    <>
                                        <div style={{backgroundColor:'#253344',}}>
                                            <Grid container >
                                                <Grid item xs={12} md={12} lg={12} xl={12}>
                                                    <h1>Loading</h1>
                                                    <BarLoader color="#36d7b7" width={400} height={4} />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </>
                                ):(
                                    addPortfolio ? (
                                        <>
                                            <div style={{backgroundColor:'#253344',}}>

                                                <Grid container >

                                                    <Grid item xs={12} md={12} lg={12} xl={12}>
                                                        <Paper className={classes.titleCard}>
                                                            <Typography className={classes.titleText}>
                                                                Your Portfolio Is Empty
                                                            </Typography>
                                                            <Typography className={classes.text}>
                                                                Create your Ticker portfolio tracker and keep track your Ticker holdings in real-time
                                                            </Typography>
                                                            <Button variant="contained" color="primary"
                                                                    style={{marginBottom:20, marginLeft:30}}
                                                                    onClick={handleOpenPortfolioModal}
                                                            >
                                                                Add Portfolio
                                                            </Button>
                                                        </Paper>
                                                    </Grid>
                                                </Grid>

                                            </div>
                                        </>
                                    ):(
                                        <PortfolioTracker />
                                    )
                                )
                            }

                        </Paper>
                    </Grid>

                    <Grid item xs={1} md={1} lg={1} xl={1} />

                </Grid>

            </div>

            <ReactModal
                isOpen={openPortfolioModal}
                onRequestClose={handleClosePortfolioModal}
                className="myModal"
                overlayClassName="modalOverlay"
                closeTimeoutMS={500}
                shouldCloseOnOverlayClick={false}
                style={{
                    content: {
                        // position: 'absolute',
                        // top: '40px',
                        // left: '40px',
                        // right: '40px',
                        // bottom: '40px',
                        border: '1px solid #ccc',
                        background: '#253344',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                <div style={{backgroundColor:'#253344',}}>
                    <Grid container >
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper className={classes.titleCard}>
                                <Typography className={classes.titleText}>
                                    Add Portfolio
                                </Typography>
                                {/*<form  noValidate autoComplete="off">*/}
                                <Grid container >
                                    <Grid item xs={12} md={12} lg={12} xl={12}>
                                        <TextField id="title" label="Title"
                                                   value={titlePortfolio}
                                                   onChange={handleTitlePortfolioOnChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12} xl={12}>
                                        <TextField id="balance" label="Balance"
                                                   value={balancePortfolio}
                                                   onChange={handleBalancePortfolioOnChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12} xl={12}>
                                        <Button variant="contained" color="primary"
                                                style={{marginBottom:20, marginLeft:30, marginTop:20}}
                                                onClick={handleAddPortfolio}
                                                disabled={disableAddBtnPortfolio}
                                        >
                                            {/*{isLoadingAddBtnPortfolio? <ClipLoader size={20} color="#36d7b7" />: null}*/}
                                            <ClipLoader size={20} color="#36d7b7" loading={isLoadingAddBtnPortfolio}/>
                                            <span style={{marginLeft:10}}>
                                                Add
                                            </span>
                                            {/*Add*/}
                                        </Button>
                                    </Grid>
                                </Grid>
                                {/*</form>*/}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </ReactModal>

        </>
    )
}

export {Home}