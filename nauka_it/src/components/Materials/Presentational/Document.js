import React from 'react';

import MaterialStyles from '../Styles/MaterialStyles';

const Document = (props) => {
    return (
        <div style={MaterialStyles.document} onClick={() => props.onMaterialClick(props.name)}>
            {props.name}
        </div>
    );
};

export default Document;