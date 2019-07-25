import React from 'react'
import { connect } from 'react-redux';
import Start from './Start';
import Question from './Question';
import Table from './Table';
import Summary from './Summary';
import * as actionsCreators from '../../actions/index';

import {GameConsts} from './QuizGameConsts';
import { RandomOrder } from '../common/Helpers/RadnomOrder';

class QuizGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            currentQuestion: 0,
            score: 0,
            progressBar: [],
            newQuestionStartTime: null,
            screen: GameConsts.SCREEN.START
        };
    }

    componentDidMount() {
        this.getQuestionList();
    }

    getQuestionList = () => {
        this.props.onCheckTime(this.props.quizId);
        this.props.onGetQuestions(this.props.quizId);
    };

    handleStartClick = () => {
        this.setState({screen: GameConsts.SCREEN.QUESTION, newQuestionStartTime: Date.now()})
    };

    handleAnswerClick = (answer) => {
        const currentQuestion = this.state.currentQuestion;
        const question = this.props.questions[currentQuestion];
        let progressBarUpdate = this.state.progressBar.slice();
        let answersUpdate = this.state.answers.slice();
        let answerClickedTime = Date.now();
        let seconds = Math.trunc((answerClickedTime - this.state.newQuestionStartTime) / 1000);
        this.props.onSetAnswer(question.id, answer, seconds, answersUpdate);

        if (answer === question.correct)  {
            progressBarUpdate.push(GameConsts.PORGRESS_BAR.SUCCESS);
        }
        else { 
            progressBarUpdate.push(GameConsts.PORGRESS_BAR.FAIL);
        }
        answersUpdate[question.id] = answer;
        
        this.setState({progressBar: progressBarUpdate, 
            answers: answersUpdate, 
            currentQuestion: currentQuestion + 1, 
            screen: GameConsts.SCREEN.TABLE
        });
    };

    handleTableUnload = () => {
        this.setState({screen: GameConsts.SCREEN.QUESTION, newQuestionStartTime: Date.now()});
    };

    handleEndClick = () => {
        window.location = '/quiz';
    };

    render() {
        let question;
        let answers = [];
        let screen = this.state.screen;

        if (screen === GameConsts.SCREEN.QUESTION) {
            if (this.state.currentQuestion === this.props.questions.length) {
                screen = GameConsts.SCREEN.SUMMARY;
                this.setState({screen: GameConsts.SCREEN.SUMMARY});
            }
            else {
                question = this.props.questions[this.state.currentQuestion];
                answers = [
                    {id: 'A', text: question.answerA}, 
                    {id: 'B', text: question.answerB},
                    {id: 'C', text: question.answerC}, 
                    {id: 'D', text: question.answerD}
                ];
                answers = RandomOrder(answers);
            }
        }

        const startScreen = screen === GameConsts.SCREEN.START ? <Start 
                                                    nick='Lama'
                                                    startDate={this.props.startTime}
                                                    onStartClick={this.handleStartClick}/> 
                                                : null;
        
        const questionScreen = screen === GameConsts.SCREEN.QUESTION ? <Question
                                                            question={question.text}
                                                            answers={answers}
                                                            progressBar={this.state.progressBar}
                                                            onAnswerClick={this.handleAnswerClick}
                                                            /> : null;

        const tableScreen = screen === GameConsts.SCREEN.TABLE ? <Table 
                                                                    onTableUnload={this.handleTableUnload}
                                                                /> : null;

        const summary = screen === GameConsts.SCREEN.SUMMARY ? <Summary 
                                                            onEndClick={this.handleEndClick}/> : null;

        return(
            <div>
                {startScreen}
                {questionScreen}
                {tableScreen}
                {summary}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { 
        quizId: state.quiz.quizId,
        startTime: state.quiz.startTime,
        questions: state.quiz.questions,
        classification: state.quiz.classification
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckTime: (quizId) => dispatch(actionsCreators.onCheckTime(quizId)),
        onGetQuestions: (quizId) => dispatch(actionsCreators.onGetQuestions(quizId)),
        onSetAnswer: (questionId, answer, seconds, answers) => dispatch(actionsCreators.onSetAnswer(questionId, answer, seconds, answers))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);