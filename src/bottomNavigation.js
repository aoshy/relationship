import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Browse from './view/browse/browse';
import Chat from './view/chat/chat';
import Profile from './view/profile/profile';
import { connect } from "react-redux";
import { setActiveTab } from './redux/actions/navigationActions';

import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation';

class BotNavigation extends React.Component {

    renderIcon = icon => ({ isActive }) => (
        <Icon size={isActive? 26 : 22} color={ isActive? '#FDFEFE' : '#BDC3C7' } name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
            
        />
    )

    conditionalRender(tabKey) {
        switch (tabKey) {
            case 'browse':
                return (
                    <Browse />
                )
            case 'chat':
                return (
                    <Chat />
                )
            case 'profile':
                return( 
                    <Profile /> 
                )
            default: 
                return (
                    <Browse />
                )
        }
    }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {this.conditionalRender(this.props.activeTab)}
            </View>
            <BottomNavigation
                onTabPress={ newTab => this.props.setActiveTab(newTab.key) }
                renderTab={this.renderTab}
                tabs={this.props.tabs}
                useLayoutAnimation={true}
                activeColor='red'
            />
        </View>
        )
    }
}

const mapStateToProps = state => ({
    activeTab: state.navigationReducer.activeTab,
    tabs: state.navigationReducer.tabs
});
  
export default connect( mapStateToProps, {setActiveTab} )(BotNavigation);