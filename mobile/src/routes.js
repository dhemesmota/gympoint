import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';

import HelpOrder from './pages/HelpOrder';
import Answer from './pages/HelpOrder/Answer';
import New from './pages/HelpOrder/New';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            HelpOrder: {
              screen: createSwitchNavigator({
                HelpOrder,
                Answer,
                New,
              }),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="help-outline" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999',
              labelStyle: { fontSize: 14, paddingBottom: 10 },
              style: {
                backgroundColor: '#fff',
                borderTopColor: '#ddd',
                borderTopWidth: 1,
                height: 70,
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
