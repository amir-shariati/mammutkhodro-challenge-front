import {makeStyles} from "@material-ui/core";
// import bg from '../../assets/img/back.webp'

const homeStyles = makeStyles((theme) => ({
    root: {
        // maxHeight: '100%',
        display: 'flex',
        width: '100%',
        backgroundColor:'#253344',

    },
    homeBg:{
        backgroundColor:'#253344',
    },
    boxCard: {
        borderRadius: 20,
        backgroundColor: '#d7d7d7',
        width:300,
        height:300,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    boxPaper:{
        display: 'flex',
        backgroundColor: '#e3e3e3',
        paddingRight: '10%',
        margin:10
    },
    img: {
        marginRight:50,
        marginLeft:50,
        marginTop:20
    },
    imgRemoveBack: {
        marginRight:50,
        marginLeft:50,
        marginTop:2
    },
    title: {
        fontFamily:'vazir',
        fontSize:25,
        fontWeight:500,
        marginRight:'35%',
        marginLeft:'30%',
        textShadow:'3px 3px #fff'
    } ,
    title2: {
        fontFamily:'vazir',
        fontSize:25,
        fontWeight:500,
        marginRight:'15%',
        marginLeft:'10%',
        textShadow:'3px 3px #fff'
    },
    title3: {
        fontFamily:'vazir',
        fontSize:25,
        fontWeight:500,
        marginRight:'12%',
        marginLeft:'10%',
        textShadow:'3px 3px #fff'
    },
    title4: {
        fontFamily:'vazir',
        fontSize:25,
        fontWeight:500,
        marginRight:'5%',
        marginLeft:'5%',
        textShadow:'3px 3px #fff'
    },
    titleCard:{
        backgroundColor:'#253344',
        maxHeight: 400,
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
    paperCard:{
        backgroundColor:'#253344',
        height: 300,
        width:'100%',
        marginTop:80,
    }
}))

export {homeStyles}