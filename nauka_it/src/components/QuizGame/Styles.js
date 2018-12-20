export const QuestionStyles = {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#31122F',
        textAlign: 'center',
        color: 'white',
        fontFamily: "'Acme', sans-serif"
    },
    progressBar: {
        height: '4%',
        width: '100%'
    },
    progressGreen: {
        height: '100%',
        width: 'calc(10% - 3px)',
        backgroundColor: 'green',
        borderRight: '3px solid white',
        float: 'left'
    },
    progressRed: {
        height: '100%',
        width: 'calc(10% - 3px)',
        backgroundColor: 'red',
        borderRight: '3px solid white' ,
        float: 'left'   
    },
    question: {
        width: '100%',
        paddingTop: '3%',
        height: '25%',
        fontSize: '40px'
    },
    answers: {
        height: '60%',
        width: '100%',
        fontSize: '25px'
    },
    ans: {
        float: 'left',
        width: '48%',
        margin: '1% 1%',
        height: '46%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '25px',
        cursor: 'pointer'
    },
    ansSpan: {
        width: '100%', 
        textAlign: 'center'
    }
};

export const StartStyles = {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#B18904',
        color: 'white',
        textAlign: 'center'
    },
    center: {
        paddingTop: '15%',
        fontSize: '40px'
    },
    button: {
        borderRadius: '25px',
        cursor: 'pointer',
        backgroundColor: '#906702',
        margin: '0 40%'
    }
};