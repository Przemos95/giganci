import React from 'react';

import MaterialStyles from '../Styles/MaterialStyles';
import Attachment from '@material-ui/icons/Attachment';

const Document = (props) => {
    return (
        <div style={MaterialStyles.document} onClick={() => props.onMaterialClick(props.name)} className="document">
            <div style={MaterialStyles.documentText}>
                {props.name}
            </div>
            <Attachment 
                style={MaterialStyles.documentAttachment}/>
        </div>
    );
};

export default Document;