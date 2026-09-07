// Mock "database" for the 1Fi Marketplace.
export const PRODUCTS = [
  {
    id: 'p1',
    name: 'iPhone 15',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600',
    category: 'Electronics',
    basePrice: 79900,
    rating: 4.7,
    variants: [
      { id: 'v1', label: '128GB / Blue', price: 79900 },
      { id: 'v2', label: '256GB / Black', price: 89900 },
      { id: 'v3', label: '512GB / Pink', price: 109900 },
    ],
    emiPlans: [
      { id: 'e1', months: 3, interest: 0, label: '3 months' },
      { id: 'e2', months: 6, interest: 0, label: '6 months' },
      { id: 'e3', months: 12, interest: 0, label: '12 months' },
      { id: 'e4', months: 24, interest: 8, label: '24 months' },
    ],
    description:
      'The latest iPhone with a 48MP main camera, A16 Bionic chip, and USB-C. Backed by no-cost EMI through your mutual fund limit.',
  },
  {
    id: 'p2',
    name: 'MacBook Air M2',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600',
    category: 'Electronics',
    basePrice: 114900,
    rating: 4.8,
    variants: [
      { id: 'v1', label: '8GB / 256GB / Midnight', price: 114900 },
      { id: 'v2', label: '16GB / 512GB / Starlight', price: 134900 },
    ],
    emiPlans: [
      { id: 'e1', months: 6, interest: 0, label: '6 months' },
      { id: 'e2', months: 12, interest: 0, label: '12 months' },
      { id: 'e3', months: 24, interest: 0, label: '24 months' },
    ],
    description:
      'Thin, light, and fast — the M2 MacBook Air is built for everyday work backed by 0% interest EMI.',
  },
  {
    id: 'p3',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600',
    category: 'Electronics',
    basePrice: 29990,
    rating: 4.6,
    variants: [
      { id: 'v1', label: 'Black', price: 29990 },
      { id: 'v2', label: 'Silver', price: 29990 },
    ],
    emiPlans: [
      { id: 'e1', months: 3, interest: 0, label: '3 months' },
      { id: 'e2', months: 6, interest: 0, label: '6 months' },
    ],
    description:
      'Industry-leading noise cancellation with up to 30 hours of battery life.',
  },
  {
    id: 'p4',
    name: 'Wakefit Orthopedic Mattress',
    brand: 'Wakefit',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
    category: 'Home',
    basePrice: 18999,
    rating: 4.4,
    variants: [
      { id: 'v1', label: 'Queen / 6 inch', price: 18999 },
      { id: 'v2', label: 'King / 8 inch', price: 24999 },
    ],
    emiPlans: [
      { id: 'e1', months: 6, interest: 0, label: '6 months' },
      { id: 'e2', months: 12, interest: 0, label: '12 months' },
    ],
    description:
      'Dual comfort orthopedic mattress for a better night\u2019s sleep, on no-cost EMI.',
  },
  {
    id: 'p5',
    name: 'Air India Flight Voucher',
    brand: 'Air India',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
    category: 'Travel',
    basePrice: 5000,
    rating: 4.2,
    variants: [
      { id: 'v1', label: '\u20b95,000 voucher', price: 5000 },
      { id: 'v2', label: '\u20b910,000 voucher', price: 10000 },
    ],
    emiPlans: [
      { id: 'e1', months: 3, interest: 0, label: '3 months' },
      { id: 'e2', months: 6, interest: 0, label: '6 months' },
    ],
    description: 'Book flights now, pay later across no-cost EMI tenures.',
  },
];

export function calculateEmi(price, plan) {
  const totalInterest = plan.interest ? (price * plan.interest) / 100 : 0;
  const totalPayable = price + totalInterest;
  const perMonth = totalPayable / plan.months;
  return {
    perMonth: Math.round(perMonth),
    totalPayable: Math.round(totalPayable),
  };
}
