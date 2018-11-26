import { SET_ACTIVE_TAB } from '../types';

export const setActiveTab = activeTab => ({
    type: SET_ACTIVE_TAB,
    payload: activeTab
});
