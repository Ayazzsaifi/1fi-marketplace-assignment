import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from '../screens/ShopScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

// A nested stack so tapping a product pushes a detail screen with a back
// button, while the bottom tab bar (defined in RootTabs) stays visible
// for the other tabs.
export default function ShopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShopHome" component={ShopScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}
