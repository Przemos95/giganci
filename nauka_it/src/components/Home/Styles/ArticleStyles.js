import {Colors} from '../../common/colors';

const ArticleStyles = {
    container: {
        width: '29%',
        margin: '20px 0%',
        backgroundColor: 'white',
        boxShadow: '10px 10px 20px #222',
        padding: '25px',
        fontFamily: '"Proxima Nova Soft", "Helvetica Neue", sans-serif',
        fontWeight: '500',
        float: 'left',
        textDecoration: 'none',
        color: 'black',
        textAlign: 'justify'
    },
    header: {
        fontSize: '20px'
    },
    image: {
        width: '100%',
        height: '200px'
    },
    description: {
        padding: '10px'
    },
    line: {
        width: '60%',
        height: '2px',
        backgroundColor: Colors.orange
    }
}

export default ArticleStyles;