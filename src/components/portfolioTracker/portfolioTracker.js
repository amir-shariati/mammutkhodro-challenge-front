import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import {portfolioStyles} from "./style.js";
import { DateTimeChart} from "../charts/dateTime/dateTimeChart";
import {DataTableView} from "../dataTableView/dataTableView";
import {DetailsCard} from "../detailsData/detailsCard";


export const PortfolioTracker = () => {

    const classes = portfolioStyles()

    return(
        <>
            <div style={{backgroundColor:'#253344',}}>
                <Grid container >

                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Paper className={classes.titleCard}>
                            <Typography className={classes.titleText}>
                                Ticker Portfolio Tracker
                            </Typography>
                            <Typography className={classes.text}>
                                Create your Ticker portfolio tracker and keep track your Ticker holdings in real-time
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12} xl={12} style={{backgroundColor:'#1C2837'}}>
                        <div style={{display:'flex',marginTop:10,marginBottom:10}} >
                            <div >
                                <Paper className={classes.paperCardDetails}>
                                    <DetailsCard />
                                </Paper>
                            </div>
                            <div >
                                <Paper className={classes.paperCardChart}>
                                    <DateTimeChart />
                                </Paper>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12} xl={12} >
                        <Paper className={classes.paperCardTable}>
                            <DataTableView />
                        </Paper>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}