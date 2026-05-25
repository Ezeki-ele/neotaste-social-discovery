export type SignalType = 'friend' | 'community' | 'occasion' | 'momentum';

export type SocialSignal = {
  type: SignalType;
  text: string;
};

export type Deal = {
  id: string;
  title: string;
  avgPrice: string;
  validDays: string;
  description: string;
  signal: SocialSignal | null;
};

export type Restaurant = {
  id: string;
  name: string;
  shortName: string;
  cuisine: string;
  tags: string[];
  priceRange: string;
  rating: number;
  reviewCount: number;
  distance: string;
  district: string;
  hours: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  cardSignal: SocialSignal | null;
  deals: Deal[];
  isNew?: boolean;
  redemptions?: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 'otto-burger',
    name: "Otto's Burger – Schanzenviertel",
    shortName: "Otto's Burger",
    cuisine: 'Burger, Meat',
    tags: ['Burger', 'Meat'],
    priceRange: '€€',
    rating: 4.9,
    reviewCount: 940,
    distance: '4.5 km',
    district: 'Mitte',
    hours: 'Closes at 22:00',
    image: '/images/otto-burger.jpg',
    gradientFrom: '#7c2d12',
    gradientTo: '#3b0f05',
    redemptions: '3.4k+',
    cardSignal: { type: 'friend', text: 'Jack visited · last week' },
    deals: [
      {
        id: 'otto-1',
        title: '2for1 Burger',
        avgPrice: '∅ €18',
        validDays: '⏱ 60 days',
        description: 'Order two burgers of your choice and pay for one. The cheaper burger is free.',
        signal: { type: 'friend', text: 'Jack redeemed · last week' },
      },
      {
        id: 'otto-2',
        title: 'Free Drink',
        avgPrice: '∅ €8',
        validDays: '⏱ 90 days',
        description: 'Get a free drink of your choice with your order. Alcohol not included.',
        signal: { type: 'community', text: '24 redemptions in the last 7 days' },
      },
    ],
  },
  {
    id: 'quan19',
    name: 'Quan 19 Rothbaum',
    shortName: 'Quan 19',
    cuisine: 'Asian, Vegetarian',
    tags: ['Asian'],
    priceRange: '€€',
    rating: 4.9,
    reviewCount: 940,
    distance: '4.5 km',
    district: 'Rotherbaum',
    hours: 'Closes at 21:30',
    image: '/images/quan19.jpg',
    gradientFrom: '#14532d',
    gradientTo: '#052e16',
    redemptions: '3.4k+',
    cardSignal: { type: 'community', text: '14 people in your area this week' },
    deals: [
      {
        id: 'quan-1',
        title: 'FREE Drink',
        avgPrice: '∅ €6',
        validDays: '⏱ 90 days',
        description: 'A free drink of your choice with your order.',
        signal: { type: 'community', text: '18 redemptions in the last 7 days' },
      },
      {
        id: 'quan-2',
        title: '1€ Side Dish',
        avgPrice: '∅ €4',
        validDays: '⏱ 30 days',
        description: 'A side dish of your choice for just €1 with your order.',
        signal: null,
      },
    ],
  },
  {
    id: 'dudes-coffee',
    name: "Dude's Coffee & Cake",
    shortName: "Dude's Coffee",
    cuisine: 'Breakfast, Coffee',
    tags: ['Breakfast', 'Coffee'],
    priceRange: '€€',
    rating: 4.8,
    reviewCount: 143,
    distance: '4.5 km',
    district: 'Prenzlauer Berg',
    hours: 'Closes at 18:00',
    image: '/images/dudes-coffee.jpg',
    gradientFrom: '#451a03',
    gradientTo: '#1c0a03',
    cardSignal: { type: 'friend', text: 'Jack visited · last week' },
    deals: [
      {
        id: 'dudes-1',
        title: '2for1 Beverage',
        avgPrice: '∅ €7',
        validDays: '⏱ 90 days',
        description: 'Two beverages of your choice for the price of one. Valid for all hot drinks.',
        signal: { type: 'friend', text: 'Jack redeemed · last week' },
      },
      {
        id: 'dudes-2',
        title: '2for1 Espresso',
        avgPrice: '∅ €4',
        validDays: '⏱ 60 days',
        description: 'Two espressos for the price of one. Valid all day.',
        signal: null,
      },
    ],
  },
  {
    id: 'peter-pane',
    name: 'Peter Pane Burgergrill & Bar – Tamara-Danz-Str.',
    shortName: 'Peter Pane',
    cuisine: 'Burger, Pizza',
    tags: ['Burger', 'Pizza'],
    priceRange: '€€€€',
    rating: 4.7,
    reviewCount: 144,
    distance: '1.3 km',
    district: 'Friedrichshain',
    hours: 'Closes at 20:00',
    image: '/images/peter-pane.jpg',
    gradientFrom: '#1e3a2f',
    gradientTo: '#0a1a12',
    cardSignal: { type: 'occasion', text: 'Popular for date nights · 23 visits' },
    deals: [
      {
        id: 'peter-1',
        title: '2for1 Coffee-Dessert Bundle',
        avgPrice: '∅ Avg €25',
        validDays: '⏱ 90 days',
        description: 'Order 2 Coffee-Dessert Bundles of your choice and get the cheaper one free. Lorem ipsum dolor sit amet.',
        signal: { type: 'friend', text: 'Jack redeemed · last week' },
      },
      {
        id: 'peter-2',
        title: '2for1 Bowl',
        avgPrice: '∅ Avg €25',
        validDays: '⏱ 30 days',
        description: 'Order 2 bowls of your choice and get the cheaper one free. Lorem ipsum dolor sit amet.',
        signal: { type: 'community', text: '24 redemptions in the last 7 days' },
      },
    ],
  },
  {
    id: 'camping-coffee',
    name: 'Camping Coffee im Kaufmannshaus',
    shortName: 'Camping Coffee',
    cuisine: 'Coffee, Drinks',
    tags: ['Coffee'],
    priceRange: '€€',
    rating: 4.8,
    reviewCount: 143,
    distance: '4.5 km',
    district: 'Mitte',
    hours: 'Closes at 19:00',
    image: '/images/camping-coffee.jpg',
    gradientFrom: '#3b1f0a',
    gradientTo: '#1a0d05',
    cardSignal: null,
    deals: [
      {
        id: 'camping-1',
        title: '2for1 Coffee',
        avgPrice: '∅ €5',
        validDays: '⏱ 90 days',
        description: 'Two coffees for the price of one. Valid for all hot drinks all day.',
        signal: null,
      },
      {
        id: 'camping-2',
        title: 'Free Drink',
        avgPrice: '∅ €4',
        validDays: '⏱ 60 days',
        description: 'A free soft drink with your order.',
        signal: null,
      },
    ],
  },
  {
    id: 'capos-coffee',
    name: "Capo's Coffee Hafencity",
    shortName: "Capo's Coffee",
    cuisine: 'Breakfast, Coffee',
    tags: ['Breakfast', 'Coffee'],
    priceRange: '€',
    rating: 4.8,
    reviewCount: 143,
    distance: '4.5 km',
    district: 'HafenCity',
    hours: 'Closes at 17:00',
    image: '/images/capos-coffee.jpg',
    gradientFrom: '#1c1917',
    gradientTo: '#0c0a09',
    isNew: true,
    cardSignal: { type: 'occasion', text: 'Best date nights · 23 visits · this week' },
    deals: [
      {
        id: 'capos-1',
        title: '2for1 Coffee & Cake',
        avgPrice: '∅ €8',
        validDays: '⏱ 90 days',
        description: 'Two Coffee & Cake combos for the price of one.',
        signal: null,
      },
      {
        id: 'capos-2',
        title: '2for1 Matcha',
        avgPrice: '∅ €6',
        validDays: '⏱ 60 days',
        description: 'Two matcha drinks for the price of one.',
        signal: null,
      },
    ],
  },
  {
    id: 'the-spot',
    name: 'The Spot',
    shortName: 'The Spot',
    cuisine: 'International',
    tags: ['International'],
    priceRange: '€€€',
    rating: 4.6,
    reviewCount: 87,
    distance: '0.8 km',
    district: 'Mitte',
    hours: 'Closes at 23:00',
    image: '/images/the-spot.jpg',
    gradientFrom: '#1e1b4b',
    gradientTo: '#0f0a2e',
    cardSignal: null,
    deals: [
      {
        id: 'spot-1',
        title: 'Menu Upgrade',
        avgPrice: '∅ €45',
        validDays: '⏱ 30 days',
        description: 'Get a 6-course menu for the price of a 5-course menu.',
        signal: null,
      },
    ],
  },
];

export const dinnerPickIds = ['otto-burger', 'quan19'];
export const discoverIds = ['dudes-coffee', 'camping-coffee', 'quan19', 'capos-coffee'];

export function getRestaurant(id: string): Restaurant | undefined {
  return restaurants.find(r => r.id === id);
}
