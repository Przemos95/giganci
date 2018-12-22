import React from 'react';
import _ from 'lodash';

import TableItem from './TableItem';
import {TableStyles} from './Styles';

const tableId = 'clasificationTable';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clasification: []
        };
    }

    componentDidMount() {
        this.getClasification();
    };

    getClasification() {
        let newClasification = [
            {position: 1, nick: 'Mateusz L', points: 654, questions: '3/3', isCurrent: false},
            {position: 2, nick: 'Łukasz F', points: 564, questions: '2/3', isCurrent: false},
            {position: 3, nick: 'Mariusz K', points: 323, questions: '2/3', isCurrent: false},
            {position: 4, nick: 'Jurek S', points: 34, questions: '1/3', isCurrent: true},
            {position: 5, nick: 'Marian A', points: 0, questions: '0/2', isCurrent: false},
            {position: 6, nick: 'Pawel L', points: 0, questions: '0/2', isCurrent: false}
        ];

        this.setState({clasification: newClasification});
    };

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
                    {this.state.clasification.map((row, index) => (
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
};

export default Table;