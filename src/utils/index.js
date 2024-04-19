
import { DEFAULTPROFILES } from './constants';

export { getIcon, getToolbarIcon } from './imageUtils';

export const getLastIndex = (profiles) => {
    return Math.max(...profiles.map(profile => profile.id))
}

export const getProfilePosition = (profiles, active) => {
    return profiles.findIndex(profile => profile.id === active);
}

export const getActiveProfile = (profiles, active) => {
    return profiles.find(profile => profile.id === active);
}

export const getIsDefault = (active) => {
    return DEFAULTPROFILES.some(profile => profile.id === active);
}

export const swap = (array, index, newIndex) => {
    const swapItem = array[index];
    array[index] = array[newIndex];
    array[newIndex] = swapItem;
    return array;
}

let timeout;
export const debounce = (callback) => {
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(callback, 3000);
    return timeout;
}