import React from 'react';

import {GameConsts} from './QuizGameConsts'
import {QuestionStyles} from './Styles';

const Question = (props) => {
    return(
        <div style={QuestionStyles.container}>
            <div style={QuestionStyles.progressBar}>
                {props.progressBar.map((row, index) =>(
                    row === GameConsts.PORGRESS_BAR.SUCCESS ? <div style={QuestionStyles.progressGreen} /> : <div style={QuestionStyles.progressRed} />
                ))}
            </div>
            <div style={QuestionStyles.question}>
                {props.question}
            </div>
            <div style={QuestionStyles.answers}>
                <div style={{...QuestionStyles.ans, backgroundColor: '#ba84c8'}} onClick={() => props.onAnswerClick(props.answers[0].id)}><span style={QuestionStyles.ansSpan}>{props.answers[0].text}</span></div>
                <div style={{...QuestionStyles.ans, backgroundColor: '#73cbe1'}} onClick={() => props.onAnswerClick(props.answers[1].id)}><span style={QuestionStyles.ansSpan}>{props.answers[1].text}</span></div>
                <div style={{...QuestionStyles.ans, backgroundColor: '#ddb544'}} onClick={() => props.onAnswerClick(props.answers[2].id)}><span style={QuestionStyles.ansSpan}>{props.answers[2].text}</span></div>
                <div style={{...QuestionStyles.ans, backgroundColor: '#00FF7F'}} onClick={() => props.onAnswerClick(props.answers[3].id)}><span style={QuestionStyles.ansSpan}>{props.answers[3].text}</span></div>
                <div style={{clear: 'both'}} />
            </div>
        </div>
    );
};

export default Question;