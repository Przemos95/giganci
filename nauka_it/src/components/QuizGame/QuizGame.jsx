import React from 'react'
import Start from './Start';
import Question from './Question';
import Table from './Table';
import Summary from './Summary';

import {GameConsts} from './QuizGameConsts';

class QuizGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            questionListLength: 0,
            answers: [],
            currentQuestion: 0,
            score: 0,
            progressBar: [],
            screen: GameConsts.SCREEN.START
        }
    }

    componentDidMount() {
        this.getQuestionList();
    }

    getQuestionList = () => {
        let qList = [];

        qList.push({ question: 'Jaka część języka C# nadaje się do powtarzania czynności w nieskończoność?', 
                answer1: { id: 1, text: 'Niebieski'}, 
                answer2: { id: 2, text: 'Czerwony'}, 
                answer3: { id: 3, text: 'Zielony'}, 
                answer4: { id: 4, text: 'Biały' }, 
                correct: 1,
                id: 0});

                qList.push({ question: 'Jaka część języka C# nadaje się do przechowywania różnych wartości?', 
                answer1: { id: 1, text: 'Tablica'}, 
                answer2: { id: 2, text: 'Pętla'}, 
                answer3: { id: 3, text: 'Metoda'}, 
                answer4: { id: 4, text: 'Klasa' }, 
                correct: 1,
                id: 1});
                
        this.setState({questionList: qList, questionListLength: qList.length, answers: new Array(qList.length), progressBar: new Array(qList.length)});
    };

    handleStartClick = () => {
        this.setState({screen: GameConsts.SCREEN.QUESTION})
    };

    handleAnswerClick = (id) => {
        const currentQuestion = this.state.currentQuestion;
        const question = this.state.questionList[currentQuestion];
        let progressBarUpdate = this.state.progressBar.slice();
        let answersUpdate = this.state.answers.slice();

        if (id === question.correct)  {
            progressBarUpdate.push(GameConsts.PORGRESS_BAR.SUCCESS);
        }
        else { 
            progressBarUpdate.push(GameConsts.PORGRESS_BAR.FAIL);
        }
        answersUpdate[question.id] = id;
        
        this.setState({progressBar: progressBarUpdate, answers: answersUpdate, currentQuestion: currentQuestion + 1, screen: GameConsts.SCREEN.TABLE})
    };

    render() {
        let question;
        let answers = [];
        let screen = this.state.screen;

        if (screen === GameConsts.SCREEN.QUESTION) {
            if (this.state.currentQuestion === this.state.questionListLength) {
                screen = GameConsts.SCREEN.SUMMARY;
                this.setState({screen: GameConsts.SCREEN.SUMMARY});
            }
            else {
                question = this.state.questionList[this.state.currentQuestion];
                answers = [question.answer1, question.answer2, question.answer3, question.answer4];
            }
        }

        const startScreen = screen === GameConsts.SCREEN.START ? <Start 
                                                    nick='Lama'
                                                    startDate={new Date(2018, 11, 20, 10, 13, 0, 0)}
                                                    onStartClick={this.handleStartClick}/> 
                                                : null;
        
        const questionScreen = screen === GameConsts.SCREEN.QUESTION ? <Question
                                                            question={question.question}
                                                            answers={answers}
                                                            progressBar={this.state.progressBar}
                                                            onAnswerClick={this.handleAnswerClick}
                                                            /> : null;

        const tableScreen = screen === GameConsts.SCREEN.TABLE ? <Table /> : null;

        const summary = screen === GameConsts.SCREEN.SUMMARY ? <Summary /> : null;

        return(
            <div>
                {startScreen}
                {questionScreen}
                {tableScreen}
                {summary}
            </div>
        );
    }
}

export default QuizGame;