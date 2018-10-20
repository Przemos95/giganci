import {Colors} from '../../common/colors';

export const HeaderBarStyles = {
    loginBtn: {
        color: 'white',
        fontWeight: '700'
    },
    AppBar: {
        height: '64px',
        zIndex: 1201,
        backgroundColor: Colors.orange
    },
    Root: {
        flexGrow: 1,
        height: 440,
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
        color: Colors.orange,
        fontSize: '120%'
    }
};