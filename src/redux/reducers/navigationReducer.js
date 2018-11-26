import { SET_ACTIVE_TAB } from '../types';

const INITIAL_STATE = {
    activeTab: '',
    tabs: [
        {
        key: 'browse',
        icon: 'md-heart',
        label: 'Browse',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        
        },
        {
        key: 'chat',
        icon: 'md-chatbubbles',
        label: 'Chat',
        barColor: '#B71C1C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
        key: 'profile',
        icon: 'md-person',
        label: 'Profile',
        barColor: '#E64A19',
        pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.payload };
        default:
        return state;
  }
};
