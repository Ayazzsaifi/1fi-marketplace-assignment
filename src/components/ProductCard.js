import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from '../theme/theme';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{product.basePrice.toLocaleString('en-IN')}</Text>
        </View>
        <View style={styles.emiPill}>
          <Text style={styles.emiPillText}>0% interest EMI</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: '100%',
    height: 110,
    backgroundColor: colors.background,
  },
  info: {
    padding: spacing.sm,
  },
  brand: {
    ...typography.label,
    marginBottom: 2,
  },
  name: {
    ...typography.body,
    fontWeight: '600',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  price: {
    ...typography.price,
    fontSize: 15,
  },
  emiPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1EDFC',
    borderRadius: radius.pill,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  emiPillText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
  },
});
