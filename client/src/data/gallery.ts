export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fleet' | 'Customer Trips' | 'Destinations' | 'Wedding Travel' | 'Corporate Travel';
  imageUrl: string;
  caption: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Force Urbania Executive Transport',
    category: 'Fleet',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    caption: 'Executive class Force Urbania fleet for VIP corporate delegates & wedding parties.',
    aspectRatio: 'wide'
  },
  {
    id: 'g2',
    title: 'Ooty Tea Garden Curves',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop',
    caption: 'Scenic Nilgiri tea estate roads during a family holiday trip to Ooty.',
    aspectRatio: 'tall'
  },
  {
    id: 'g3',
    title: 'Executive Sedan Airport Pickup',
    category: 'Fleet',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Clean executive Dzire sedan ready at Coimbatore International Airport terminal.',
    aspectRatio: 'square'
  },
  {
    id: 'g4',
    title: 'Isha Foundation 112ft Adiyogi',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
    caption: 'Evening Adiyogi Shiva Statue trip at the Velliangiri foothills.',
    aspectRatio: 'wide'
  },
  {
    id: 'g5',
    title: 'SUV Hill Expedition to Valparai',
    category: 'Customer Trips',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    caption: 'Comfortable Innova SUV navigating the 40 hairpin bends of Valparai.',
    aspectRatio: 'tall'
  },
  {
    id: 'g6',
    title: 'Wedding Guest Luxury Shuttles',
    category: 'Wedding Travel',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    caption: 'Coordinated guest transportation fleet for a grand wedding in Singanallur.',
    aspectRatio: 'square'
  },
  {
    id: 'g7',
    title: 'Tempo Traveller Group Outing',
    category: 'Fleet',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
    caption: '15-Seater pushback AC Tempo Traveller ready for an outstation tour.',
    aspectRatio: 'wide'
  },
  {
    id: 'g8',
    title: 'Munnar Misty Tea Hills',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    caption: '3-Day family holiday drive from Coimbatore to Munnar, Kerala.',
    aspectRatio: 'tall'
  },
  {
    id: 'g9',
    title: 'Corporate Delegation Movement',
    category: 'Corporate Travel',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    caption: 'Punctual corporate delegates travel for textile and IT summits.',
    aspectRatio: 'square'
  },
  {
    id: 'g10',
    title: 'Palani Murugan Temple Trip',
    category: 'Customer Trips',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    caption: 'Spiritual pilgrimage family trip from Coimbatore to Palani.',
    aspectRatio: 'wide'
  },
  {
    id: 'g11',
    title: 'Tourist Bus Excursion',
    category: 'Fleet',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    caption: '40+ Seater air-suspension luxury bus for college industrial visits.',
    aspectRatio: 'tall'
  },
  {
    id: 'g12',
    title: 'Kodaikanal Star Lake Vista',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Weekend outstation trip to Kodaikanal Kodai Lake viewpoint.',
    aspectRatio: 'wide'
  }
];
