import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from '../theme/theme';
import { calculateEmi } from '../data/mockProducts';


export default function EmiPlanSelector({ plans, price, selectedPlanId, onSelect }) {
  return (
    <View>
      <Text style={typography.h2}>Choose EMI plan</Text>
      <View style={styles.list}>
        {plans.map((plan) => {
          const { perMonth } = calculateEmi(price, plan);
          const isSelected = plan.id === selectedPlanId;
          return (
            <TouchableOpacity
              key={plan.id}
              style={[styles.option, isSelected && styles.optionSelected]}
              onPress={() => onSelect(plan.id)}
              activeOpacity={0.8}
            >
              <View style={styles.radioOuter}>
                {isSelected && <View style={styles.radioInner} />}
              </View>
              <View style={styles.optionText}>
                <Text style={styles.optionLabel}>{plan.label}</Text>
                <Text style={styles.optionSub}>
                  {plan.interest ? `${plan.interest}% interest` : 'No-cost EMI'}
                </Text>
              </View>
              <Text style={styles.optionPrice}>₹{perMonth.toLocaleString('en-IN')}/mo</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: spacing.sm,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.sm,
    marginBottom: spacing.sm,
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: '#F8F6FE',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  optionText: {
    flex: 1,
  },
  optionLabel: {
    ...typography.body,
    fontWeight: '600',
  },
  optionSub: {
    ...typography.bodyMuted,
  },
  optionPrice: {
    ...typography.body,
    fontWeight: '700',
    color: colors.text,
  },
});
