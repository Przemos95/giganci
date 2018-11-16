import React from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = dispatch => {
    return {
    };
};

const mapStateToProps = state => {
    return{
        isAuth: state.user.isAuth,
        group: state.user.user ? state.user.user.group : 0
    };
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Materials);