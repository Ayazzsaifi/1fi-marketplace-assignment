import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme/theme';

export default function PlaceholderScreen({ title, icon = 'construct-outline' }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Ionicons name={icon} size={36} color={colors.textMuted} />
        <Text style={[typography.h2, { marginTop: spacing.sm }]}>{title}</Text>
        <Text style={[typography.bodyMuted, { marginTop: 4, textAlign: 'center' }]}>
          Coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
});
