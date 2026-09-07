import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing, typography } from '../theme/theme';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={typography.h1}>Home</Text>
      <Text style={[typography.bodyMuted, { marginTop: spacing.sm }]}>
        Placeholder — not part of this assignment.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
});
