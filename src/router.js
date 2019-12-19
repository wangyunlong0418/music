import React from 'react';
import {View} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {isIphoneX} from './utils';

import Recommend from './module/Recommend';
import Singer from './module/Singer';
import Rank from './module/Rank';

const MainNavigator = createMaterialTopTabNavigator(
  {
    recommend: {
      screen: Recommend,
      navigationOptions: {
        title: '推荐',
      },
    },
    singer: {
      screen: Singer,
      navigationOptions: {
        title: '歌手',
        //   tabBarIcon: ({tintColor}) => {
        //     return (
        //       <MaterialCommunityIcons name="music" color={tintColor} size={20} />
        //     );
        //   },
      },
    },
    rank: {
      screen: Rank,
      navigationOptions: {
        title: '排行榜',
        // tabBarIcon: ({tintColor}) => {
        //     return <Ionicons name="md-person" color={tintColor} size={20} />;
        // },
      },
    },
  },
  {
    initialRouteName: 'recommend',
    backBehavior: 'none', // back按键是否跳转到第一个页面
    tabBarOptions: {
      activeTintColor: '#f1f1f1',
      activeBackgroundColor: '#FFFEFF',
      inactiveTintColor: '#e4e4e4',
      inactiveBackgroundColor: '#FFFEFF',
      indicatorStyle: {
        backgroundColor: '#f1f1f1',
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '500',
      },
      tabStyle: {
        paddingBottom: 4,
        fontSize: 18,
      },
      style: {
        backgroundColor: '#d44439', //TabBar 的背景颜色
      },
    },
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigation = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
      navigationOptions: {
        header: isIphoneX ? (
          <View style={{paddingTop: 22, backgroundColor: '#d44439'}} />
        ) : null,
      },
    },
    //   Detail: {
    //     screen: Detail,
    //     navigationOptions: {},
    //   },
    //   Search: {
    //     screen: Search,
    //     navigationOptions: {
    //       header: null,
    //     },
    //   },
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(AppNavigation);

const Router = () => {
  return <AppContainer />;
};

export default Router;
