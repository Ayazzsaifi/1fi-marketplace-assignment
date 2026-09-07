import React , { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import PlaceholderScreen from './PlaceholderScreen';
import MarketplaceList from './MarketplaceList';
import { colors, spacing, radius, typography } from '../theme/theme';

const TABS = [
  { key: 'topBrands', label: 'Top Brands' },
  { key: 'nearbyStores', label: 'Nearby Stores' },
  { key: 'marketplace', label: '1Fi Marketplace' },
];


export default function ShopScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('marketplace');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Shop</Text>

      <View style={styles.segmentWrap}>
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.segment, isActive && styles.segmentActive]}
              onPress={() => setActiveTab(tab.key)}
              activeOpacity={0.8}
            >
              <Text style={[styles.segmentText, isActive && styles.segmentTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.content}>
        {activeTab === 'topBrands' && (
          <PlaceholderScreen title="Top Brands" icon="pricetags-outline" />
        )}
        {activeTab === 'nearbyStores' && (
          <PlaceholderScreen title="Nearby Stores" icon="location-outline" />
        )}
        {activeTab === 'marketplace' && <MarketplaceList navigation={navigation} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    ...typography.h1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  segmentWrap: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    margin: spacing.md,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radius.pill,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: colors.primary,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  segmentTextActive: {
    color: colors.white,
  },
  content: {
    flex: 1,
  },
});
