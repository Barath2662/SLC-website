import { VehicleCategory } from '@/types';

export interface VehicleCategoryExtended extends VehicleCategory {
  idealTravelExperiences: string[];
}

export const FLEET_DATA: VehicleCategoryExtended[] = [
  {
    id: 'hatchback',
    name: 'Hatchback',
    slug: 'hatchback',
    tagline: 'Compact, Economical & Agile for City Journeys',
    passengerCapacity: 4,
    luggageCapacity: '2 Small Bags',
    idealUseCases: [
      'Local Coimbatore Sightseeing',
      'Short Outstation Trips',
      'Budget Family Travel',
      'Couples Travel'
    ],
    idealTravelExperiences: [
      'Local Sightseeing',
      'Short Trips',
      'Budget Travel',
      'Couples'
    ],
    features: [
      'Fuel-efficient AC cabin',
      'Compact size for smooth city navigation',
      'Experienced commercial driver',
      'Clean interior & comfortable seats',
      'Bluetooth audio system',
      'Ample legroom for 4 passengers'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop',
    overview: 'Ideal for small families and solo travellers seeking quick, budget-conscious transportation within Coimbatore or short outstation runs. Easy maneuverability makes city sightseeing effortless.',
    faqs: [
      {
        question: 'How many passengers fit comfortably in a Hatchback?',
        answer: 'Up to 4 passengers plus driver. Recommended for 3 adults or 2 adults + 2 children with small luggage.'
      },
      {
        question: 'Is a Hatchback suitable for Ooty hill trips?',
        answer: 'Yes, for small families with light luggage, our Hatchbacks easily handle Mettupalayam ghat road inclines.'
      }
    ]
  },
  {
    id: 'sedan',
    name: 'Sedan',
    slug: 'sedan',
    tagline: 'Executive Comfort & Smooth Highway Cruising',
    passengerCapacity: 4,
    luggageCapacity: '2 Large + 2 Small Suitcases',
    idealUseCases: [
      'Coimbatore Airport Transfers',
      'Corporate & Executive Travel',
      'Outstation Round Trips',
      'Couples & Small Family Vacations'
    ],
    idealTravelExperiences: [
      'Airport Transfers',
      'Business Travel',
      'Couples & Small Families',
      'Executive Travel'
    ],
    features: [
      'Spacious boot space for airport luggage',
      'Climate control air conditioning',
      'Ergonomic pushback seating',
      'Smooth suspension for long highways',
      'USB phone charging ports',
      'Uniformed commercial driver'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
    overview: 'Our executive Sedans (Swift Dzire, Etios) offer smooth highway stability, high boot space capacity, and executive polish. Perfect for airport drops, corporate delegation, and outstation trips.',
    faqs: [
      {
        question: 'How much luggage can a Sedan carry?',
        answer: 'Our Sedans feature deep boot space easily accommodating 2 large suitcases and 2 handbag carry-ons.'
      },
      {
        question: 'Can I book a Sedan for 24x7 Airport Transfer?',
        answer: 'Yes, we provide 24x7 flight-tracked airport pickups and drops to Coimbatore International Airport (CJB).'
      }
    ]
  },
  {
    id: 'suv',
    name: 'SUV',
    slug: 'suv',
    tagline: 'Powerful Performance & Superior Hill Station Comfort',
    passengerCapacity: 7,
    luggageCapacity: '3 Large + 2 Medium Bags',
    idealUseCases: [
      'Ooty & Valparai Hill Station Trips',
      'Family Vacations & Long Road Trips',
      'Interstate Outstation Tours',
      'Rough Terrain & Ghat Road Driving'
    ],
    idealTravelExperiences: [
      'Hill Stations',
      'Families',
      'Road Trips',
      'Weekend Getaways'
    ],
    features: [
      'High ground clearance for hilly terrain',
      'Dual blower rear AC vents',
      'Flexible 6-7 passenger seating layouts',
      'Roof carrier support for extra luggage',
      'Powerful diesel engine for steep inclines',
      'Senior driver with 10+ yrs hill experience'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    overview: 'Conquer Nilgiri hairpins and Anamalai tea garden slopes in comfort. Our SUVs (Innova, Innova Crysta) deliver high torque, high ground clearance, and spacious seating for family vacations.',
    faqs: [
      {
        question: 'Why choose an SUV for Ooty or Kodaikanal trips?',
        answer: 'SUVs provide superior engine power, stable hill cornering, higher seating visibility, and dedicated rear AC vents.'
      },
      {
        question: 'Is carrier available for extra bags?',
        answer: 'Yes, roof luggage carriers can be mounted upon request for multi-day outstation family tours.'
      }
    ]
  },
  {
    id: 'mvp',
    name: 'MVP',
    slug: 'mvp',
    tagline: 'Multi-Purpose Vehicle for Extended Family Travel & Temple Visits',
    passengerCapacity: 7,
    luggageCapacity: '3 Large Bags',
    idealUseCases: [
      'Family Temple Tours (Palani, Rameswaram, Madurai)',
      'Multi-Day South India Vacations',
      'Senior Citizen Comfort Travel',
      'Group Airport Transfers'
    ],
    idealTravelExperiences: [
      'Family Temple Tours',
      'Multi-Day Vacations',
      'Senior Citizen Comfort',
      'Airport Drops'
    ],
    features: [
      'Low step-in height for easy senior citizen access',
      'Reclining middle row captain seats',
      'Spacious legroom across all 3 rows',
      'Quiet, vibration-insulated cabin',
      'Rear AC controls for every row',
      'All-India tourist permit'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
    overview: 'MVPs offer the ideal combination of passenger seating and smooth ride quality. Whether taking senior citizens on temple tours to Palani and Rameswaram or heading out for a multi-day tour, our MVPs provide total peace of mind.',
    faqs: [
      {
        question: 'Is MVP suitable for temple tours with senior citizens?',
        answer: 'Yes, MVPs offer easy entry and exit, comfortable seating posture, and soft suspension ideal for elderly family members.'
      }
    ]
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    slug: 'tempo-traveller',
    tagline: 'Spacious Group Travel with Executive Pushback Recliners',
    passengerCapacity: 15,
    luggageCapacity: 'Separate Rear Luggage Boot (8-10 Bags)',
    idealUseCases: [
      'Large Family Outstation Trips',
      'Group Pilgrimage Tours',
      'Corporate Offsites & Outings',
      'School & College Excursions'
    ],
    idealTravelExperiences: [
      'Large Groups',
      'Tours',
      'Corporate',
      'School & College'
    ],
    features: [
      '12 / 14 / 15 / 18 / 20 Seater configurations',
      '2x1 luxury pushback leather recliners',
      'High roof ceiling allowing walk-through standing',
      'Individual AC ducts & reading lights',
      'LED TV with Surround Audio system',
      'Dedicated rear luggage compartment'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
    overview: 'Move your entire group together without splitting into multiple cabs. Featuring high standing headroom, pushback seats, and entertainment systems, Tempo Travellers make long outstation group travel memorable.',
    faqs: [
      {
        question: 'What Tempo Traveller seat configurations are available?',
        answer: 'We offer 12-seater, 14-seater, 15-seater, 18-seater, and 20-seater Tempo Travellers.'
      },
      {
        question: 'Can Tempo Travellers travel to Munnar and Kodaikanal?',
        answer: 'Yes, our experienced drivers regularly operate Tempo Travellers across all South Indian hill routes.'
      }
    ]
  },
  {
    id: 'force-urbania',
    name: 'Force Urbania',
    slug: 'force-urbania',
    tagline: 'Ultra-Luxury VIP Van with European Design & Monocoque Comfort',
    passengerCapacity: 17,
    luggageCapacity: 'Dedicated Deep Rear Luggage Bay',
    idealUseCases: [
      'VIP Executive Corporate Delegation',
      'Luxury Wedding Guest Transportation',
      'Premium South India Guided Tours',
      'Dignitary & Celebrity Logistics'
    ],
    idealTravelExperiences: [
      'Luxury Tours',
      'VIP Guests',
      'Corporate',
      'Wedding Guests'
    ],
    features: [
      'European monocoque body for whisper-quiet cabin',
      'Executive plush bucket seats with armrests',
      'Panoramic sealed glass windows for scenic views',
      'Individual USB-C fast charging ports',
      'Air suspension for smooth highway flight feel',
      'Advanced ABS, EBD & airbag safety systems'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    overview: 'Redefining group travel elegance. Force Urbania combines airline-first-class seating, panoramic sight-seeing glass, and monocoque road stability. Perfect for corporate leadership delegations and luxury wedding transportation.',
    faqs: [
      {
        question: 'How is Force Urbania different from a standard Tempo Traveller?',
        answer: 'Urbania features monocoque construction, air-suspension comfort, lower noise levels, individual AC control, and luxury bucket seating.'
      }
    ]
  },
  {
    id: 'coach',
    name: 'Executive Coach',
    slug: 'coach',
    tagline: 'Mid-Sized Luxury Transport for Conventions & Delegates',
    passengerCapacity: 21,
    luggageCapacity: 'Under-floor Luggage Bay',
    idealUseCases: [
      'Corporate Delegation Movement',
      'Group Pilgrimage Expeditions',
      'Industrial & College Excursions',
      'Wedding Guest Venue Shuttles'
    ],
    idealTravelExperiences: [
      'Corporate',
      'Group Tours',
      'Industrial Visits',
      'Wedding Transportation'
    ],
    features: [
      '21-Seater luxury layout',
      'Full climate control air conditioning',
      'Wide pushback seats with generous legroom',
      'High-capacity underfloor luggage belly',
      'PA System for tour guides and speech',
      'Commercial highway permit'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    overview: 'Mid-sized executive coaches bridging the gap between Tempo Travellers and large buses. Ideal for corporate delegations, wedding shuttles, and educational group tours.',
    faqs: [
      {
        question: 'Are coaches equipped with PA systems for tour guides?',
        answer: 'Yes, our coaches include microphone PA systems and TV monitors.'
      }
    ]
  },
  {
    id: 'mini-bus',
    name: 'Mini Bus',
    slug: 'mini-bus',
    tagline: 'Reliable Medium-Group Transport for Events & Industrial Visits',
    passengerCapacity: 35,
    luggageCapacity: 'Spacious Under-floor Luggage Hold',
    idealUseCases: [
      'School & College Field Trips',
      'Industrial Visits for Engineering & Textile Students',
      'Corporate Employee Shuttles',
      'Wedding Guest Event Transport'
    ],
    idealTravelExperiences: [
      'School & Industrial',
      'College',
      'Corporate',
      'Wedding Guests'
    ],
    features: [
      '29-Seater & 35-Seater options',
      'Comfortable 2x2 pushback seating',
      'Powerful roof-mounted AC units',
      'Speed-governor compliance for student safety',
      'Under-floor luggage storage bay',
      'Senior commercial driver & cleaner'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    overview: 'Designed for efficient medium-group logistics. Widely chosen by Coimbatore educational institutions for industrial visits and corporations for event shuttles.',
    faqs: [
      {
        question: 'Do Mini Buses meet safety standards for student trips?',
        answer: 'Yes, all our Mini Buses carry speed governors, first aid kits, emergency exits, and pass annual transport safety audits.'
      }
    ]
  },
  {
    id: 'bus',
    name: 'Luxury Tourist Bus',
    slug: 'bus',
    tagline: 'High-Capacity Air-Suspension Bus for Conventions & Large Groups',
    passengerCapacity: 50,
    luggageCapacity: 'High Volume Luggage Hold',
    idealUseCases: [
      'Grand Wedding Guest Transportation',
      'Large Group Pilgrimage Tours',
      'State-wide Tour Packages',
      'Corporate Annual Conferences'
    ],
    idealTravelExperiences: [
      'Large Events',
      'Temple Tours',
      'Tour Packages',
      'Corporate Transportation'
    ],
    features: [
      '40 / 45 / 50 Seater configurations',
      'Full air-suspension for vibration-free ride',
      'Reclining 2x2 luxury seats',
      'Dual LED monitors & surround sound audio',
      'Enormous under-floor luggage space',
      'Experienced interstate highway crew'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    overview: 'Our flagship 40-50 seater luxury buses provide smooth interstate group travel. Perfect for large wedding parties, temple package tours, and corporate conventions.',
    faqs: [
      {
        question: 'What is the seat capacity of your largest tourist bus?',
        answer: 'We provide 40-seater, 45-seater, and 50-seater air-suspension luxury buses.'
      }
    ]
  }
];
