import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TableItem from './TableItem';
import {TableStyles} from './Styles';

const tableId = 'clasificationTable';

class Table extends React.Component {

    tableAnimationLoad() {
        var clasificationT = document.getElementById(tableId);

        function move() {
            let ctmarginLeft = clasificationT.style.marginLeft.replace('%', '');
            ctmarginLeft -= 0.5;
            clasificationT.style.marginLeft = ctmarginLeft + '%';
            clasificationT.style.opacity = parseFloat(clasificationT.style.opacity) + 0.025;

            if (ctmarginLeft > 20) {
                setTimeout(move, 25);
            }
        }
        if (clasificationT != null)
            move();
    }

    tableAnimationUnload() {
        var clasificationT = document.getElementById(tableId);

        function move() {
            let ctmarginLeft = clasificationT.style.marginLeft.replace('%', '');
            ctmarginLeft -= 0.5;
            clasificationT.style.marginLeft = ctmarginLeft + '%';
            clasificationT.style.opacity = parseFloat(clasificationT.style.opacity) - 0.025;
            if (ctmarginLeft > 0) {
                setTimeout(move, 25);
            }
        }
        if (clasificationT != null)
            move();
    }

    render () {
        setTimeout(this.tableAnimationLoad, 100);
        setTimeout(this.tableAnimationUnload, 3000);
        setTimeout(this.props.onTableUnload, 3500);
        return (
            <div style={TableStyles.container}>
                <div id={tableId} style={TableStyles.table}>
                    Aktualna klasyfikacja:
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
    };
};

const mapStateToProps = (state) => {
    return {
        classification: state.quiz.classification
    };
};

export default connect(mapStateToProps, () => {return{}})(Table);