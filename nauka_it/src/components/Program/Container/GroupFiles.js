import React from 'react';
import _ from 'lodash';

import Document from '../../Materials/Presentational/Document';

import {onGetFile, onGetFiles} from '../../../store/File';
import {downloadFile} from '../../common/Helpers/FileDownloadHelper';
import MateriaStyles from '../../Materials/Styles/MaterialStyles';

class GroupFiles extends React.Component {
    constructor() {
        super();
        this.state = {
            group: '',
            files: []
        };
    }

    componentDidMount() {
        const {heading} = this.props.match.params;
        this.setState({group: heading});

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
                {groupBody}
            </div>
        );
    }
}

export default GroupFiles;