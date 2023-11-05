import {makeStyles} from "@material-ui/core";

const portfolioStyles = makeStyles((theme) => ({
    paperCardDetails:{
        backgroundColor:'#253344',
        borderRadius: 0,
        boxShadow:'none',
        border: '1px solid #323E50',
        width:500,
        height:365,
        marginLeft:50,
        marginRight:20,
        marginTop:20,
        marginBottom:20
    },
    paperCardChart:{
        backgroundColor:'#253344',
        borderRadius: 0,
        width: 800,
        boxShadow:'none',
        border: '1px solid #323E50',
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        marginBottom:20
    },
    paperCardTable:{
        backgroundColor:'#253344',
        height: 400,
        width:'100%',
        // marginTop:80,
    },
    titleCard:{
        backgroundColor:'#253344',
        maxHeight: 150,
        width:'100%',
        // marginTop:80,
    },
    titleText:{
        fontSize:24,
        fontWeight: 'bold' ,
        color:'#fff',
        paddingLeft:30,
        paddingTop:30
    },
    text:{
        fontSize:16,
        color:'#fff',
        paddingLeft:30,
        paddingTop:30,
        paddingBottom:30
    },
    coinTitle:{
        fontSize:12,
        color:'#fff',
        paddingLeft:30,
        paddingTop:12,
        paddingBottom:12
    },
    table: {
        maxWidth: 1300,
        marginLeft:'5%',
        marginRight:'4%',
        boxShadow:'none',
        border: '1px solid #323E50',
        backgroundColor:'#253344',
        marginTop:50,
        color: '#fff !important',
    },
}))

export {portfolioStyles}