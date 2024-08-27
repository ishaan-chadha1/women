import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="panic-mode"
        options={{
          title: 'Panic Mode',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'alert' : 'alert-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trust-network"
        options={{
          title: 'Trust Network',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="virtual-guardian"
        options={{
          title: 'Virtual Guardian',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'shield' : 'shield-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="safe-route-planner"
        options={{
          title: 'Safe Route Planner',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'map' : 'map-outline'} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
