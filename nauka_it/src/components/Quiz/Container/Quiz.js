import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';

import {onGetQuizzes} from '../../../actions/quiz';
import MainItem from '../../Materials/Presentational/MainItem';
import Timelapse from '@material-ui/icons/Timelapse';
import { MenuItem } from '@material-ui/core';

class Quiz extends React.Component {
    componentDidMount = () => {
        this.props.getQuizzes();
    };

    getComment = (quiz) => {
        let start = quiz.startDate.toString().replace('T', ' ').substring(0, 16);
        let end = quiz.endDate.toString().replace('T', ' ').substring(0, 16);
        if (quiz.isBlocked)
            return (
                <div>
                    Start: {start}.
                    <br />
                    Koniec: {end}.
                    <br />
                    Quiz jest w tym momencie zablokowany.
                </div>
            );
        else
        return (
            <div>
                Start: {start}.
                <br />
                Koniec: {end}.
            </div>
        );
    };
    
    render() {
        let quizList = this.props.quizzes
            .map(q => {
                let comment = this.getComment(q);
                
                return (
                    <MainItem
                        key={_.uniqueId('quiz_')}
                        url={q.isBlocked ? window.location : `/quizgame/${q.id}`}
                        text={q.name}
                        comment={comment}
                        icon={<Timelapse
                                style={{ fontSize: '200%', float: 'left'}} />
                        }
                        />
                );
            });
        
        let noQuizzez = 
            (<MainItem
                key={_.uniqueId('quiz_')}
                url={window.location}
                text="Nie odnaleziono quizów dla danego użytkownika. Sprawdź czy jesteś zalogowany."
                icon={<Timelapse
                        style={{ fontSize: '200%', float: 'left'}} />
                }
                />);
                
        return(
            <div>
                {quizList.length > 0
                    ? quizList
                    : noQuizzez}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        quizzes: state.quiz.quizzes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuizzes: () => dispatch(onGetQuizzes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);