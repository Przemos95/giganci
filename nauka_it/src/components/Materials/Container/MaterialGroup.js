import React from 'react';
import _ from 'lodash';

import Document from '../Presentational/Document';

import {onGetMaterials, onGetMaterial} from '../../../store/Material';
import {downloadFromResponse} from '../../common/Helpers/FileDownloadHelper';

class MaterialGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            group: '',
            materials: []
        };
    }

    componentDidMount() {
        const {heading} = this.props.match.params;
        this.setState({group: heading});

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
                {groupBody}
            </div>
        );
    }
}

export default MaterialGroup;