import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Document from '../../Materials/Presentational/Document';
import {CheckGroup} from '../../common/Helpers/CheckGroup';
import AccessFailed from '../../common/accessFailed';

import {onGetFile, onGetFiles} from '../../../store/File';
import {downloadFile} from '../../common/Helpers/FileDownloadHelper';
import MateriaStyles from '../../Materials/Styles/MaterialStyles';

class GroupFiles extends React.Component {
    constructor() {
        super();
        this.state = {
            group: '',
            files: [],
            hasPermission: false
        };
    }

    componentDidMount() {
        const {heading} = this.props.match.params;
        let permission = this.props.isAuth && CheckGroup(heading, this.props.group, false);
        this.setState({group: heading, hasPermission: permission});

        if (permission)
            onGetFiles(heading).then(response => {
                this.setState({files: response.data});
            });
    }

    handleFileClick = (name) => {
        onGetFile(this.state.group, name).then(response => {
            downloadFile(response);
        });
    };

    render() {
        let groupBody = (
            this.state.files.map((row, index) => (
                <Document 
                    key={_.uniqueId('file_')}
                    name={row.name}
                    onMaterialClick={this.handleFileClick}/>
            ))
        );

        return(
            <div>
                <div style={MateriaStyles.head}>Programy z zajęć</div>
                {!this.state.hasPermission
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
)(GroupFiles);