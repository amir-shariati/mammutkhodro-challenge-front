//----------------------------- ports --------------------------------//

const PORT_SERVER = 8000
// const PORT_SERVER = 8080 // Docker port
// const PORT_SERVER = `${process.env.REACT_APP_SERVER_PORT}` // Docker port

//---------------------------- ip address ----------------------------//

const IP_ADDRESS = window.location.hostname
// const IP_ADDRESS = `${process.env.REACT_APP_SERVER_IP}`

//--------------------------- ivms Urls ------------------------------//

const SERVER_ADDRESS = `${IP_ADDRESS}:${PORT_SERVER}`

const SERVER_MEDIA = IP_ADDRESS

//---------------------------------------------------------------------//
export {
    PORT_SERVER,
    IP_ADDRESS,
    SERVER_ADDRESS,
    SERVER_MEDIA,
}
