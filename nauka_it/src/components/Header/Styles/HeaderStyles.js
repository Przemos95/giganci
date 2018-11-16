import {Colors} from '../../common/colors';

export const HeaderBarStyles = {
    loginBtn: {
        color: 'white',
        fontWeight: '700',
        textDecoration: 'none'
    },
    AppBar: {
        height: '64px',
        zIndex: 1201,
        backgroundColor: Colors.orange
    },
    Root: {
        flexGrow: 1,
        height: 64,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    Drawer : {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        paddingTop: 64
    },
    MenuItems: {
        color: Colors.blue,
        fontSize: '120%'
    },
    logoutBtn: {
        padding: '2px 5px',
        cursor: 'pointer'
    },
    userName: {
        float: 'left', 
        marginTop: '10px',
        marginRight: '5px'
    },
    logoutPowerBtn: {
        marginLeft: '5px', 
        marginTop: '10px'
    }
};