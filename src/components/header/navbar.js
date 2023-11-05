import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Logo from './../../assets/img/logo.png'
import Logo from './../../assets/img/mammutlogo.png'
import {Divider, Grid, withStyles} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';


const drawerWidth = 250;

const navStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden'
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        background:'#0C131C'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 10px',
        ...theme.mixins.toolbar,
        border:'none !important',
        background:'#fff',
        borderColor: theme.palette.primary.main,
        boxShadow:"none"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        backgroundColor : '#fff',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,

        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    menuButton:{
        marginRight:50
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    tooltipStyle:{
        backgroundColor:'red'
    },
    grid:{
        display:'flex',
    },
    hIcon :{
        color: '#b2b2b4',
    },
    iconStyles :{
        color : "whitesmoke",
        fontSize:30
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        // direction: 'ltr',
        '&:focus': {
            backgroundColor: "#BDBDBD",
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '#6b6868',
            },
        },
    },
}))(MenuItem);


export const Navbar = () => {

    const classes = navStyles();

    const [anchorEl, setAnchorEl] = useState(null);

//----------------------- navbar handlers  -----------------------//
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

//-------------------------------------------------------------------//
    return(
        <>
            <AppBar position="fixed" className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolbar}>
                    <div>
                        <img src={Logo} alt="logo" style={{maxWidth:120,marginRight:20}} />
                    </div>

                    <div className={classes.title} />

                    <div>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleOpenMenu}
                            className={clsx(classes.menuButton)}
                        >
                            <MenuIcon className={classes.hIcon}/>
                        </IconButton>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                        >
                            <Grid item lg={12} md={12} xs={12} style={{marginBottom: 20 ,width:200}}>
                                <Grid container>
                                    <Grid item xs={12} md={12} lg={12} xl={12}>
                                        <div style={{paddingTop: 10}}>
                                            <img src={Logo} alt="Wpo" style={{maxWidth:120,marginRight:'25%',marginLeft:'25%'}} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider />
                            <StyledMenuItem>
                                <ListItemIcon  >
                                    <ImportantDevicesIcon  fontSize="small" />
                                </ListItemIcon>
                                <ListItemText  primary="نصب"  />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon  >
                                    <ExitToAppIcon  fontSize="small" />
                                </ListItemIcon>
                                <ListItemText style={{direction:'ltr',float:'right'}}  primary="خروج" />
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}