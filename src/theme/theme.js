// Central design tokens — matched to the existing 1Fi app's look
// (purple brand color, rounded white cards, light grey background)
// Keeping every color/spacing value in one place is what makes it easy
// for new screens (like Marketplace) to stay visually consistent.

export const colors = {
  primary: '#6C4FE0',       // 1Fi purple (buttons, active tab, links)
  primaryDark: '#4B2FBE',   // gradient end / pressed state
  accent: '#FFC93C',        // gold accent used for "0% interest" style badges
  background: '#F5F5F8',    // app background (light grey)
  surface: '#FFFFFF',       // card background
  text: '#1A1A2E',          // primary text
  textMuted: '#6B6B7B',     // secondary text (descriptions, meta)
  border: '#ECECF2',
  success: '#1FAA59',
  error: '#E5484D',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 999,
};

export const typography = {
  h1: { fontSize: 22, fontWeight: '700', color: colors.text },
  h2: { fontSize: 18, fontWeight: '700', color: colors.text },
  body: { fontSize: 14, fontWeight: '400', color: colors.text },
  bodyMuted: { fontSize: 13, fontWeight: '400', color: colors.textMuted },
  label: { fontSize: 12, fontWeight: '600', color: colors.textMuted },
  price: { fontSize: 18, fontWeight: '700', color: colors.text },
};

export default { colors, spacing, radius, typography };
