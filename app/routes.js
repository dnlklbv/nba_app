import React from 'react';
import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// SCREENS

import SignIn from './components/auth';
import News from './components/news';
import Article from './components/news/article';
import Games from './components/games';
import GameArticle from './components/games/article';

import Logo from './utils/logo';

const headerConf = {
  headerTitleAlign: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#001338',
    },
    headerTintColor: 'white',
    headerTitle: Logo,
  },
};

const NewsStack = createStackNavigator(
  {
    News,
    Article,
  },
  headerConf,
);

const GamesStack = createStackNavigator(
  {
    Games,
    Article: GameArticle,
  },
  headerConf,
);

const AppStack = createBottomTabNavigator(
  {
    News: {
      screen: NewsStack,
      navigationOptions: {
        tabBarIcon: <Ionicons name="ios-basketball" size={25} color="#fff" />,
      },
    },
    Games: {
      screen: GamesStack,
      navigationOptions: {
        tabBarIcon: <Ionicons name="md-tv" size={25} color="#fff" />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      showLabel: false,
      activeBackgroundColor: '#00194b',
      inactiveBackgroundColor: '#001338',
      style: {
        backgroundColor: '#001338',
      },
      initialRouteName: 'News',
    },
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn,
  },
  {
    headerMode: 'none',
  },
);

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'Auth',
      },
    ),
  );
};
