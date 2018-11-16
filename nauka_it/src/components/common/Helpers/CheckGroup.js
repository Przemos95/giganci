import {MaterialTypes as types} from '../constants';

 export const CheckGroup = (heading, userGroup, isAdmin) => {
    if (isAdmin)
        return true;
    else if (heading === types.Basic1.val)
        return userGroup === 1;
    else if (heading === types.Basic2.val)
        return userGroup === 2;
    else if (heading === types.Hacking1.val)
        return userGroup === 3;
    else if (heading === types.Hacking2.val)
        return userGroup === 4;
    else if (heading === types.Unity1.val)
        return userGroup === 5;
    else return false;
 }