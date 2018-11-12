import React from 'react';
import _ from 'lodash';

import MainItem from '../../Materials/Presentational/MainItem';
import {MaterialTypes as types} from '../../common/constants';

class Program extends React.Component {
    constructor() {
        super();
        this.state = {
            groups: [types.Basic1, types.Basic2, types.Hacking1, types.Hacking2, types.Unity1]
        };
    }

    render() {
        let programBody = (
            this.state.groups.map((row, index) => (
                <MainItem 
                    key={_.uniqueId('programMainItem_')}
                    url={`/file/${row.val}`} 
                    text={row.text}/>
            ))
        );

        return(
            <div>
                {programBody}
            </div>
        );
    }
}

export default Program;