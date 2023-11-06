import axios from "axios"
import {useEffect, useState} from "react";
import {Grid, Paper, Typography,} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactModal from 'react-modal';
import {homeStyles} from "./style";
import {PortfolioTracker} from "../../components/portfolioTracker/portfolioTracker";
import {url_portfolio_list} from "../../config";
import {BarLoader, ClipLoader, MoonLoader} from "react-spinners";


const Home = (props) => {

    const classes = homeStyles();



    return (
        <>
            <div style={{marginTop:150 ,marginLeft:80,marginRight:80}}>


                <Grid container >
                    <Grid item xs={1} md={1} lg={1} xl={1} />

                    <Grid item xs={10} md={10} lg={10} xl={10}>
                        <Paper classname={classes.homeBg} >
                            <PortfolioTracker />
                        </Paper>
                    </Grid>

                    <Grid item xs={1} md={1} lg={1} xl={1} />

                </Grid>

            </div>

        </>
    )
}

export {Home}