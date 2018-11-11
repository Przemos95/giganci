import React from 'react';

import MaterialStyles from '../Styles/MaterialStyles';
import Folder from '@material-ui/icons/Folder';
import {Link} from 'react-router-dom';

const MainItem = (props) => {
    return (
        <Link to={props.url} style={MaterialStyles.mainItem} className='materialMainItem'>
            <Folder
                style={MaterialStyles.folder} />
            
            <div style={{marginTop: '10px'}}>
                {props.text}
            </div>
        </Link>
    );
};

export default MainItem;