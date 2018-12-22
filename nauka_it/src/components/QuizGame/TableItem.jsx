import React from 'react';

import {TableItemStyles} from './Styles';

const TableItem = (props) => {
    return (
        <div style={props.isCurrent ? TableItemStyles.currentPerson : TableItemStyles.person}>
            <div style={TableItemStyles.floatLeft}>{props.position}. {props.nick}</div>
            <div style={{...TableItemStyles.floatRight, ...TableItemStyles.startTable}}>{props.questions}</div>
            <div style={TableItemStyles.floatRight}>{props.points}</div>
            <div style={TableItemStyles.clearBoth} />
        </div>
    );
};

export default TableItem;