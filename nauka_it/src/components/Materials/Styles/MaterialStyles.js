import {Colors} from '../../common/colors';

const MaterialStyles = {
    mainItem: {
        width: '23%',
        margin: '20px 3%',
        backgroundColor: 'white',
        boxShadow: '10px 10px 20px #222',
        padding: '25px',
        fontFamily: '"Proxima Nova Soft", "Helvetica Neue", sans-serif',
        fontWeight: '500',
        float: 'left',
        textDecoration: 'none',
        color: Colors.orange,
        fontSize: '120%'
    },
    folder: {
        fontSize: '200%', 
        float: 'left'
    },
    document: {
        width: '40%',
        margin: '10px 3%',
        backgroundColor: 'white',
        boxShadow: '10px 10px 20px #222',
        padding: '25px',
        fontFamily: '"Proxima Nova Soft", "Helvetica Neue", sans-serif',
        fontWeight: '500',
        float: 'left',
        textDecoration: 'none',
        color: Colors.orange,
        fontSize: '120%',
        cursor: 'pointer'
    },
    documentText: { 
        float: 'left',
        marginTop: '10px'
    },
    documentAttachment: {
        fontSize: '200%', 
        float: 'right'
    },
    head: {
        margin: '10px 5% 0 3%',
        backgroundColor: 'white',
        boxShadow: '10px 10px 20px #222',
        color: Colors.orange,
        fontSize: '120%',
        textAlign: 'center',
        padding: '10px'
    }
}

export default MaterialStyles;