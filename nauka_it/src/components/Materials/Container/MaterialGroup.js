import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Document from '../Presentational/Document';
import {CheckGroup} from '../../common/Helpers/CheckGroup';
import AccessFailed from '../../common/accessFailed';

import {onGetMaterials, onGetMaterial} from '../../../store/Material';
import {downloadFromResponse} from '../../common/Helpers/FileDownloadHelper';
import MateriaStyles from '../Styles/MaterialStyles';

class MaterialGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            group: '',
            materials: [],
            hasPermisson: false
        };
    }

    componentDidMount() {
        const {heading} = this.props.match.params;
        let permission = this.props.isAuth && CheckGroup(heading, this.props.group, false);
        this.setState({group: heading, hasPermisson: permission});

        if(permission)
            onGetMaterials(heading).then(response => {
                this.setState({materials: response.data});
            });
    }

    handleMaterialClick = (name) => {
        onGetMaterial(this.state.group, name).then(response => {
            downloadFromResponse(response);
        });
    };

    render() {
        let groupBody = (
            this.state.materials.map((row, index) => (
                <Document 
                    key={_.uniqueId('article_')}
                    name={row.name}
                    onMaterialClick={this.handleMaterialClick}/>
            ))
        );

        return(
            <div>
                <div style={MateriaStyles.head}>Materiały Powtórzeniowe</div>
                {!this.state.hasPermisson
                ? <AccessFailed />
                : <div>{groupBody}</div>
                }
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
)(MaterialGroup);