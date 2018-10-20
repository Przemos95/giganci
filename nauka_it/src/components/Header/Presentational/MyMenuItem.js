import React from 'react';
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import {HeaderBarStyles} from '../Styles/HeaderStyles';

const MyMenuItem = (props) => {
    return(
        <MenuItem 
            onClick={props.onClick}>
            <ListItemIcon 
                style={HeaderBarStyles.MenuItems}>
                {props.Icon}
            </ListItemIcon>
            <ListItemText 
                primary={
                    <Typography 
                        style={HeaderBarStyles.MenuItems}>
                        {props.Text}
                    </Typography>
                } />
        </MenuItem>
    );
};

export default MyMenuItem;