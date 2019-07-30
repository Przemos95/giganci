import React from 'react'
import { connect } from 'react-redux';
import Summary from '../../QuizGame/Summary';
import * as actionsCreators from '../../../actions/index';

class QuizTable extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({quizId: id});

        this.props.getClassification(id);
    }

    handleEndClick = () => {
        window.location = '/quiz';
    };

    render() {
        return(
            <Summary 
                onEndClick={this.handleEndClick}/>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClassification: (quizId) => dispatch(actionsCreators.onGetClassification(quizId))
    };
};

export default connect(() => {return{};}, mapDispatchToProps)(QuizTable);