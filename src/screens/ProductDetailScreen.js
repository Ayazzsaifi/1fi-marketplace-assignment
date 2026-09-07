import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import EmiPlanSelector from '../components/EmiPlanSelector';
import { fetchProductById } from '../data/api';
import { calculateEmi } from '../data/mockProducts';
import { colors, spacing, radius, typography } from '../theme/theme';

export default function ProductDetailScreen({ route, navigation }) {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const load = useCallback(() => {
    setStatus('loading');
    fetchProductById(productId)
      .then((data) => {
        setProduct(data);
        setSelectedVariantId(data.variants[0].id);
        setSelectedPlanId(data.emiPlans[0].id);
        setStatus('success');
      })
      .catch((err) => {
        setErrorMessage(err.message || 'Failed to load product.');
        setStatus('error');
      });
  }, [productId]);

  useEffect(() => {
    load();
  }, [load]);

  const selectedVariant = useMemo(
    () => product?.variants.find((v) => v.id === selectedVariantId),
    [product, selectedVariantId]
  );
  const selectedPlan = useMemo(
    () => product?.emiPlans.find((p) => p.id === selectedPlanId),
    [product, selectedPlanId]
  );
  const emi = useMemo(() => {
    if (!selectedVariant || !selectedPlan) return null;
    return calculateEmi(selectedVariant.price, selectedPlan);
  }, [selectedVariant, selectedPlan]);

  if (status === 'loading') {
    return <LoadingState message="Loading product..." />;
  }
  if (status === 'error') {
    return <ErrorState message={errorMessage} onRetry={load} />;
  }

  const handleProceed = () => {
    Alert.alert(
      'Plan selected',
      `${product.name} (${selectedVariant.label})\n${selectedPlan.label} — ₹${emi.perMonth.toLocaleString(
        'en-IN'
      )}/mo`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={12}>
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>
          {product.name}
        </Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <Text style={typography.label}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>
          ₹{selectedVariant.price.toLocaleString('en-IN')}
        </Text>

        <Text style={styles.description}>{product.description}</Text>

        <Text style={typography.h2}>Select variant</Text>
        <View style={styles.variantRow}>
          {product.variants.map((variant) => {
            const isSelected = variant.id === selectedVariantId;
            return (
              <TouchableOpacity
                key={variant.id}
                style={[styles.variantChip, isSelected && styles.variantChipSelected]}
                onPress={() => setSelectedVariantId(variant.id)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.variantChipText,
                    isSelected && styles.variantChipTextSelected,
                  ]}
                >
                  {variant.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ marginTop: spacing.md }}>
          <EmiPlanSelector
            plans={product.emiPlans}
            price={selectedVariant.price}
            selectedPlanId={selectedPlanId}
            onSelect={setSelectedPlanId}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={typography.bodyMuted}>Total payable</Text>
          <Text style={styles.footerPrice}>
            ₹{emi.totalPayable.toLocaleString('en-IN')}
          </Text>
        </View>
        <TouchableOpacity style={styles.cta} onPress={handleProceed} activeOpacity={0.85}>
          <Text style={styles.ctaText}>Proceed with this plan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  navTitle: {
    ...typography.h2,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: spacing.sm,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    marginBottom: spacing.md,
  },
  name: {
    ...typography.h1,
    marginBottom: 4,
  },
  price: {
    ...typography.price,
    fontSize: 22,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.bodyMuted,
    marginBottom: spacing.lg,
    lineHeight: 20,
  },
  variantRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  variantChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
  },
  variantChipSelected: {
    borderColor: colors.primary,
    backgroundColor: '#F1EDFC',
  },
  variantChipText: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '600',
  },
  variantChipTextSelected: {
    color: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerPrice: {
    ...typography.h2,
  },
  cta: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
  },
  ctaText: {
    color: colors.white,
    fontWeight: '700',
  },
});
