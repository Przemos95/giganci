import React from 'react';
import ReactDOM from 'react-dom';

import {StartStyles} from './Styles';

const Start = (props) => {

    let tick = () => {
        let startDate = props.startDate
        let current = Date.now();
        let timespan = Math.abs(startDate - current) / 1000;
        let element = <span>{timespan.toString().split('.')[0]}</span>
        
        if (timespan < 1 || current > startDate) {
            clearInterval(tickInterval);
            element = <div style={StartStyles.button} onClick={() => props.onStartClick()}>Start</div>;
        }
        
        ReactDOM.render(
            element,
            document.getElementById('tick')
        );
    }

    var tickInterval = setInterval(tick, 1000);

    return (
        <div style={StartStyles.container}>
            <div>
                <div style={StartStyles.center}>
                    <h2>Twój nick: {props.nick}</h2>
                    <div>Czekaj na rozpoczęcie gry.</div>
                    <div id='tick'></div>
                </div>
            </div>
        </div>
    );
};

export default Start;