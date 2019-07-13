import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TableItem from './TableItem';
import {SummaryStyles} from './Styles';

class Summary extends React.Component {
    render() {
        return (
            <div style={SummaryStyles.container}>
                <div style={SummaryStyles.table}>
                    Końcowa tabela:
                    {this.props.classification.map((row, index) => (
                        <TableItem 
                            key={_.uniqueId('tableItem_')}
                            position={index + 1}
                            nick={row.username}
                            points={row.score}
                            questions={`${row.goodAnswers}/${row.allAnswers}`}
                            isCurrent={row.isCurrent}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        classification: state.quiz.classification
    };
};

export default connect(mapStateToProps, () => {return{}})(Summary);