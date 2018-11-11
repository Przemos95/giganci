import React from 'react';
import _ from 'lodash';

import MainItem from '../Presentational/MainItem';
import {MaterialTypes as types} from '../../common/constants';

class Materials extends React.Component {
    constructor() {
        super();
        this.state = {
            materialTypes: [types.Basic1, types.Basic2, types.Hacking1, types.Hacking2, types.Unity1]
        };
    }
    render() {
        let materialsBody = (
            this.state.materialTypes.map((row, index) => (
                <MainItem 
                    key={_.uniqueId('materiaMainItem_')}
                    url={`/doc/${row.val}`} 
                    text={row.text}/>
            ))
        );

        return(
            <div>
                {materialsBody}
                <div style={{clear: 'both'}} />
            </div>
        );
    }
}

export default Materials;