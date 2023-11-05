import {Grid, Paper,} from "@material-ui/core";
import {homeStyles} from "./style";
import {PortfolioTracker} from "../../components/portfolioTracker/portfolioTracker";







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