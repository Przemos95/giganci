import {Colors} from '../common/colors';

export const ArticleStyles = {
    container: {
        width: '70%',
        margin: '20px auto',
        backgroundColor: 'white',
        boxShadow: '10px 10px 20px #222',
        padding: '25px',
        fontFamily: '"Proxima Nova Soft", "Helvetica Neue", sans-serif',
        fontWeight: '800',
        textAlign: 'justify'
    },
    line: {
        width: '100%',
        height: '4px',
        backgroundColor: Colors.orange
    },
    shortcut: {
        fontWeight: '700',
        margin: '10px 0',
        display: 'inline'
    },
    description: {
        fontWeight: '500'
    },
    image: {
        maxWidth: '300px',
        maxHeight: '200px',
        float: 'right'
    }
};