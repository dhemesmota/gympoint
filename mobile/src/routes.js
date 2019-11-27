/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

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
            Dashboard: {
              screen: createStackNavigator(
                { Dashboard },
                { headerLayoutPreset: 'center' },
              ),
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="check" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrder: {
              screen: createStackNavigator(
                {
                  HelpOrder,
                  Answer,
                  New,
                },
                { headerLayoutPreset: 'center' },
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="help-outline" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
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
