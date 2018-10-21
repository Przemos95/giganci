import React from 'react';
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {HeaderBarStyles} from '../Styles/HeaderStyles';

const MyMenuItem = (props) => {
    return(
        <Link to={props.url} style={{textDecoration: 'none'}}>
            <MenuItem>
                <ListItemIcon 
                    style={HeaderBarStyles.MenuItems}>
                    {props.icon}
                </ListItemIcon>
                <ListItemText 
                    primary={
                        <Typography 
                            style={HeaderBarStyles.MenuItems}>
                            {props.text}
                        </Typography>
                    } />
            </MenuItem>
        </Link>
    );
};

export default MyMenuItem;