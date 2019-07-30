import React from 'react';

import MaterialStyles from '../Styles/MaterialStyles';
import Folder from '@material-ui/icons/Folder';
import {Link} from 'react-router-dom';

const MainItem = (props) => {
    return (
        <Link to={props.url} style={MaterialStyles.mainItem} className='materialMainItem'>
            {!props.icon
                ? <Folder
                        style={MaterialStyles.folder}/>
                : props.icon}
            
            <div style={{float: 'left'}}>
                <div style={{marginTop: '10px'}}>
                    {props.text}
                </div>
                <div style={{fontSize: '11px'}}>
                    {props.comment}
                </div>
            </div>
        </Link>
    );
};

export default MainItem;