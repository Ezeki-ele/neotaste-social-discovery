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
  gradientFrom: string;
  gradientTo: string;
  cardSignal: SocialSignal | null;
  deals: Deal[];
  isNew?: boolean;
};

export const restaurants: Restaurant[] = [
  {
    id: 'otto-burger',
    name: "Otto's Burger – Schanzenviertel",
    shortName: "Otto's Burger",
    cuisine: 'Burger, Fleisch',
    tags: ['Burger', 'Fleisch'],
    priceRange: '€€',
    rating: 4.9,
    reviewCount: 940,
    distance: '4,5 km',
    district: 'Mitte',
    hours: 'Schließt um 22:00',
    gradientFrom: '#7c2d12',
    gradientTo: '#3b0f05',
    cardSignal: { type: 'friend', text: 'Jack besucht · letzte Woche' },
    deals: [
      {
        id: 'otto-1',
        title: '2für1 Burger',
        avgPrice: '∅ 18€',
        validDays: '⏱ 60 Tage',
        description: 'Du bestellst zwei Burger deiner Wahl und bezahlst nur einen. Der günstigere Burger ist gratis.',
        signal: { type: 'friend', text: 'Jack eingelöst · letzte Woche' },
      },
      {
        id: 'otto-2',
        title: 'Free Drink',
        avgPrice: '∅ 8€',
        validDays: '⏱ 90 Tage',
        description: 'Ein kostenloses Getränk deiner Wahl zu deiner Bestellung. Alkohol nicht inbegriffen.',
        signal: { type: 'community', text: '24 Einlösungen in den letzten 7 Tagen' },
      },
    ],
  },
  {
    id: 'quan19',
    name: 'Quan 19 Rothbaum',
    shortName: 'Quan 19',
    cuisine: 'Asiatisch, Vegetarisch',
    tags: ['Asiatisch'],
    priceRange: '€€',
    rating: 4.9,
    reviewCount: 940,
    distance: '4,5 km',
    district: 'Rotherbaum',
    hours: 'Schließt um 21:30',
    gradientFrom: '#14532d',
    gradientTo: '#052e16',
    cardSignal: { type: 'community', text: '14 Personen diese Woche' },
    deals: [
      {
        id: 'quan-1',
        title: 'FREE Drink',
        avgPrice: '∅ 6€',
        validDays: '⏱ 90 Tage',
        description: 'Ein kostenloses Getränk deiner Wahl zu deiner Bestellung.',
        signal: { type: 'community', text: '18 Einlösungen in den letzten 7 Tagen' },
      },
      {
        id: 'quan-2',
        title: '1€ Side Dish',
        avgPrice: '∅ 4€',
        validDays: '⏱ 30 Tage',
        description: 'Eine Beilage deiner Wahl für nur 1€ zu deiner Bestellung.',
        signal: null,
      },
    ],
  },
  {
    id: 'dudes-coffee',
    name: "Dude's Coffee & Cake",
    shortName: "Dude's Coffee",
    cuisine: 'Frühstück, Café',
    tags: ['Frühstück', 'Café'],
    priceRange: '€€',
    rating: 4.8,
    reviewCount: 143,
    distance: '4,5 km',
    district: 'Prenzlauer Berg',
    hours: 'Schließt um 18:00',
    gradientFrom: '#451a03',
    gradientTo: '#1c0a03',
    cardSignal: { type: 'friend', text: 'Jack besucht · letzte Woche' },
    deals: [
      {
        id: 'dudes-1',
        title: '2für1 Getränke',
        avgPrice: '∅ 7€',
        validDays: '⏱ 90 Tage',
        description: 'Zwei Getränke deiner Wahl zum Preis von einem. Gilt für alle Heißgetränke.',
        signal: { type: 'friend', text: 'Jack eingelöst · letzte Woche' },
      },
      {
        id: 'dudes-2',
        title: '2für1 Espresso',
        avgPrice: '∅ 4€',
        validDays: '⏱ 60 Tage',
        description: 'Zwei Espresso zum Preis von einem.',
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
    distance: '1,3 km',
    district: 'Friedrichshain',
    hours: 'Schließt um 20:00',
    gradientFrom: '#1e3a2f',
    gradientTo: '#0a1a12',
    cardSignal: { type: 'occasion', text: 'Beliebt für Date Nights · 23 Besuche' },
    deals: [
      {
        id: 'peter-1',
        title: '2für1 Coffee-Dessert Bundle',
        avgPrice: '∅ Avg €25',
        validDays: '⏱ 90 Tage',
        description: 'Du bestellst 2 Coffee-Dessert Bundles deiner Wahl und erhältst das günstigere gratis. Lorem ipsum dolor sit amet.',
        signal: { type: 'friend', text: 'Jack eingelöst · letzte Woche' },
      },
      {
        id: 'peter-2',
        title: '2für1 Bowl',
        avgPrice: '∅ Avg €25',
        validDays: '⏱ 30 Tage',
        description: 'Du bestellst 2 Bowls deiner Wahl, die günstigere erhältst du gratis. Lorem ipsum dolor sit amet.',
        signal: { type: 'community', text: '24 Einlösungen in den letzten 7 Tagen' },
      },
    ],
  },
  {
    id: 'camping-coffee',
    name: 'Camping Coffee im Kaufmannshaus',
    shortName: 'Camping Coffee',
    cuisine: 'Café, Drinks',
    tags: ['Café'],
    priceRange: '€€',
    rating: 4.8,
    reviewCount: 143,
    distance: '4,5 km',
    district: 'Mitte',
    hours: 'Schließt um 19:00',
    gradientFrom: '#3b1f0a',
    gradientTo: '#1a0d05',
    cardSignal: null,
    deals: [
      {
        id: 'camping-1',
        title: '2für1 Coffee',
        avgPrice: '∅ 5€',
        validDays: '⏱ 90 Tage',
        description: 'Zwei Kaffees zum Preis von einem. Gilt für alle Heißgetränke den ganzen Tag.',
        signal: null,
      },
      {
        id: 'camping-2',
        title: 'Free Drink',
        avgPrice: '∅ 4€',
        validDays: '⏱ 60 Tage',
        description: 'Ein kostenloses Erfrischungsgetränk zu deiner Bestellung.',
        signal: null,
      },
    ],
  },
  {
    id: 'capos-coffee',
    name: "Capo's Coffee Hafencity",
    shortName: "Capo's Coffee",
    cuisine: 'Frühstück, Café',
    tags: ['Frühstück', 'Café'],
    priceRange: '€',
    rating: 4.8,
    reviewCount: 143,
    distance: '4,5 km',
    district: 'HafenCity',
    hours: 'Schließt um 17:00',
    gradientFrom: '#1c1917',
    gradientTo: '#0c0a09',
    isNew: true,
    cardSignal: { type: 'occasion', text: 'Best date nights · 23 Besuche · diese Woche' },
    deals: [
      {
        id: 'capos-1',
        title: '2für1 Coffee & Cake',
        avgPrice: '∅ 8€',
        validDays: '⏱ 90 Tage',
        description: 'Zwei Mal Coffee & Cake zum Preis von einem.',
        signal: null,
      },
      {
        id: 'capos-2',
        title: '2für1 Matcha',
        avgPrice: '∅ 6€',
        validDays: '⏱ 60 Tage',
        description: 'Zwei Matcha-Getränke zum Preis von einem.',
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
    distance: '0,8 km',
    district: 'Mitte',
    hours: 'Schließt um 23:00',
    gradientFrom: '#1e1b4b',
    gradientTo: '#0f0a2e',
    cardSignal: null,
    deals: [
      {
        id: 'spot-1',
        title: 'Menu Upgrade',
        avgPrice: '∅ 45€',
        validDays: '⏱ 30 Tage',
        description: 'Du erhältst ein 6-Gänge-Menü zum Preis von einem 5-Gänge-Menü.',
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
