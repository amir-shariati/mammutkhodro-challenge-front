import React from 'react'
import {Divider, Grid, Typography} from "@mui/material";
import {portfolioStyles} from "../portfolioTracker/style";

export const DetailsCard =()=>{

    const classes = portfolioStyles()

    return(
        <>
            <Grid container >

                <Grid item xs={12} md={12} lg={12} xl={12}>
                   <Typography className={classes.coinTitle}>Holdings (2 coin)</Typography>
                    <Divider style={{backgroundColor:'#323E50',height:0.5}}/>
                    <Typography className={classes.text}>Holdings</Typography>
                    <Divider style={{height:0.2 ,marginRight:'5%',marginLeft:'5%',backgroundColor:'#212E3D'}}/>
                    <Typography className={classes.text}>Holdings</Typography>
                </Grid>
            </Grid>
        </>
    )
}