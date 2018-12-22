import React from 'react';
import _ from 'lodash';

import TableItem from './TableItem';
import {SummaryStyles} from './Styles';

const Summary = (props) => {
    return (
        <div style={SummaryStyles.container}>
            <div style={SummaryStyles.table}>
                Końcowa tabela:
                {props.clasification.map((row, index) => (
                    <TableItem 
                        key={_.uniqueId('tableItem_')}
                        position={row.position}
                        nick={row.nick}
                        points={row.points}
                        questions={row.questions}
                        isCurrent={row.isCurrent}
                    />
                ))}
            </div>
        </div>
    );
};

export default Summary;