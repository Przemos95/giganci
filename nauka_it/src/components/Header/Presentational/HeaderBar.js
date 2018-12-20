import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import Apps from '@material-ui/icons/Apps';
import Folder from '@material-ui/icons/Folder';
import Archive from '@material-ui/icons/Archive';
import MyMenuItem from './MyMenuItem';
import CheckBox from '@material-ui/icons/CheckBox';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import {Link} from 'react-router-dom';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

import {PL, url} from '../../common/translations';
import {HeaderBarStyles} from '../Styles/HeaderStyles';

export const HeaderBar = (props) => {
    
    return(
        <div style={HeaderBarStyles.Root}>
            <AppBar 
                position="absolute"
                style={HeaderBarStyles.AppBar}>
                <Toolbar>
                    <Typography 
                        variant="title" 
                        color="inherit" 
                        style={{flex: 1}}>
                        {PL.title}
                    </Typography>
                    {props.isAuth
                    ? 
                        <div style={HeaderBarStyles.logoutBtn} title={PL.login.logout} onClick={() => props.onLogoutClick()}>
                            <div style={HeaderBarStyles.userName}>
                                {props.name}
                            </div>
                            <PowerSettingsNew 
                                title={PL.login.logout} 
                                style={HeaderBarStyles.logoutPowerBtn} />
                        </div>
                    :
                        <Link to={url.login}
                            style={HeaderBarStyles.loginBtn}>
                            {PL.headerBar.loginBtn}
                        </Link>
                    }
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                style={HeaderBarStyles.Drawer}
                >
                <span style={{height: 64}}></span>
                <MenuList>
                    <MyMenuItem 
                        text={PL.leftMenu.news}
                        icon={<Apps />}
                        url={url.home}
                        />
                    <MyMenuItem 
                        text={PL.leftMenu.materials}
                        icon={<Folder />}
                        url={url.materials}
                        />
                    <MyMenuItem 
                        text={PL.leftMenu.programs}
                        icon={<Archive />}
                        url={url.programs}
                        />
                    <MyMenuItem 
                        text={PL.leftMenu.quiz}
                        icon={<CheckBox />}
                        url={url.quiz}
                        />
                    <Divider />
                    <MyMenuItem 
                        text={PL.leftMenu.email}
                        icon={<AlternateEmail />}
                        url={url.email}
                        />
                </MenuList>

            </Drawer>
        </div>
    );
};

export default HeaderBar;