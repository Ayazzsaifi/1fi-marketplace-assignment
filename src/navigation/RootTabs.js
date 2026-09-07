import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ShopStack from './ShopStack';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import { colors } from '../theme/theme';

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: 'home-outline',
  Shop: 'storefront-outline',
  'EMI Dues': 'receipt-outline',
  Limit: 'trending-up-outline',
  Profile: 'person-outline',
};

// Mirrors the real 1Fi app's bottom navigation (Home, Shop, EMI Dues,
// Limit, Profile) so the Marketplace feature sits inside the same
// overall navigation shell it would in production.
export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={ICONS[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="EMI Dues">
        {() => <PlaceholderScreen title="EMI Dues" icon="receipt-outline" />}
      </Tab.Screen>
      <Tab.Screen name="Limit">
        {() => <PlaceholderScreen title="Limit" icon="trending-up-outline" />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {() => <PlaceholderScreen title="Profile" icon="person-outline" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
