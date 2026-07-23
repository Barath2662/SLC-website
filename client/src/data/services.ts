import { ServiceItem } from '@/types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Transfers',
    slug: 'airport-transfer',
    subtitle: 'Punctual 24x7 Flight-Tracked Pickups & Drops at Coimbatore International Airport (CJB)',
    shortDescription: 'Reliable 24x7 airport taxi service connecting Coimbatore Airport with Singanallur, Gandhipuram, Peelamedu, Tiruppur, Pollachi, and all South India locations.',
    fullDescription: 'Never miss a flight or wait at terminal exits. Srii Lakshmi Cab provides 24x7 scheduled and instant airport transfers at Coimbatore International Airport (CJB). Our commercial drivers track your flight status in real time to adjust pickup timing for delays or early arrivals. Enjoy clean AC sedans, SUVs, and Urbanias with generous luggage capacity.',
    iconName: 'Plane',
    imageUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    keyBenefits: [
      '24x7 Flight Tracking for On-Time Pickups',
      'Zero Flight Delay Surge Charges',
      'Spacious Boot Space for Airline Luggage',
      'Driver Waiting with Name Board at Terminal'
    ],
    faqs: [
      {
        question: 'What if my flight arrives late at night at Coimbatore Airport?',
        answer: 'Our airport transfer service operates 24x7. We track flight arrival times continuously, so your driver will be waiting at the terminal regardless of delays.'
      },
      {
        question: 'Can I book an airport taxi for outstation travel directly from CJB?',
        answer: 'Yes, we provide direct airport pickups for outstation destinations like Ooty, Coonoor, Valparai, Tiruppur, Palani, and Kerala.'
      }
    ]
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Trips & Round Trips',
    slug: 'outstation-taxi',
    tagline: 'Smooth Highway Travel Across Tamil Nadu, Kerala, Karnataka & Andhra Pradesh',
    subtitle: 'Hassle-Free Intercity Cab Rentals for Family Holidays & Outstation Journeys',
    shortDescription: 'Comfortable one-way and round-trip outstation cabs to Ooty, Munnar, Kodaikanal, Mysore, Bangalore, Chennai, and Madurai.',
    fullDescription: 'Embark on relaxing highway journeys with experienced commercial drivers who know South Indian highways and hill routes intimately. Whether planning a weekend getaway to Ooty or a multi-state road trip across Tamil Nadu, Kerala, and Karnataka, our well-maintained AC fleet ensures safety and comfort.',
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    keyBenefits: [
      'Experienced Senior Highway Drivers',
      'Inter-State Permit Assistance Included',
      'Clean Vehicles Sanitized Before Departure',
      'Transparent Custom Itineraries'
    ],
    faqs: [
      {
        question: 'Are toll fees and state permits included in outstation quotes?',
        answer: 'Our travel desk provides transparent trip estimates clearly specifying driver allowance, toll, parking, and permit details.'
      }
    ]
  },
  {
    id: 'corporate-travel',
    title: 'Corporate & Executive Travel',
    slug: 'corporate-travel',
    subtitle: 'Punctual Executive Transportation & Delegation Logistics in Coimbatore',
    shortDescription: 'Dedicated business mobility solutions for corporate executives, textile summits, IT park delegates, and VIP guests in Coimbatore.',
    fullDescription: 'Impress visiting executives and maintain flawless business schedules with Srii Lakshmi Cab’s corporate transportation desk. We serve TIDEL Park Coimbatore, Coimbatore IT Park, SIDCO Industrial Estates, and textile summits with premium sedans, SUVs, and luxury Force Urbania vans.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller', 'Mini Bus'],
    keyBenefits: [
      'GST Invoice & Corporate Billing Support',
      'Punctual Professional Uniformed Drivers',
      'Luxury Force Urbania for VIP Delegation',
      'Dedicated Account Manager for Bulk Bookings'
    ],
    faqs: [
      {
        question: 'Do you offer monthly corporate billing and GST invoices?',
        answer: 'Yes, we provide official GST invoices and flexible corporate billing accounts for companies and IT organizations.'
      }
    ]
  },
  {
    id: 'wedding-transportation',
    title: 'Wedding Guest Logistics',
    slug: 'wedding-transportation',
    subtitle: 'Coordinated Guest Transportation & Luxury Convoy Rentals for Weddings',
    shortDescription: 'Seamless guest transportation logistics from airports and railway stations to marriage halls, resorts, and reception venues.',
    fullDescription: 'Make your special day stress-free with customized wedding fleet management. We coordinate arrival shuttles for guests landing at Coimbatore Airport or Junction, managing luxury sedans for bride/groom families, Tempo Travellers for relatives, and AC buses for venue shuttles.',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania', 'Coach', 'Bus'],
    keyBenefits: [
      'Coordinated Arrival & Venue Shuttles',
      'Decorated Luxury Wedding Cars Available',
      'Fleet Manager to Coordinate Guest Movement',
      '24x7 On-Call Driver Availability'
    ],
    faqs: [
      {
        question: 'Can you assign a dedicated fleet coordinator for our wedding day?',
        answer: 'Yes, for multi-vehicle wedding bookings, we provide an on-site fleet coordinator to handle guest pick-ups and venue shuttles smoothly.'
      }
    ]
  },
  {
    id: 'temple-tours',
    title: 'Temple & Pilgrimage Tours',
    slug: 'temple-tours',
    subtitle: 'Spiritual Journeys to Sacred Shrines Across Tamil Nadu & South India',
    shortDescription: 'Custom pilgrimage tour packages from Coimbatore to Palani, Marudhamalai, Isha Foundation, Madurai, Rameswaram, Chidambaram, and Tirupati.',
    fullDescription: 'Experience peaceful spiritual tours with respectful, courteous drivers familiar with temple timings, pooja schedules, dress codes, and Senior Citizen access points. Travel comfortably in pushback AC Tempo Travellers or spacious SUVs.',
    iconName: 'Landmark',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller', 'Coach', 'Bus'],
    keyBenefits: [
      'Drivers Aware of Temple Timings & Parking',
      'Elderly-Friendly Vehicles with Easy Access',
      'Custom Multi-Temple Circuit Itineraries',
      'Flexible Meal & Darshan Stopovers'
    ],
    faqs: [
      {
        question: 'Can we customize a 3-day temple circuit covering Palani, Madurai, and Rameswaram?',
        answer: 'Absolutely! Our travel desk designs customized pilgrimage itineraries tailored to your family’s preferred darshan schedule.'
      }
    ]
  },
  {
    id: 'family-tours',
    title: 'Family Vacation Tours',
    slug: 'family-tours',
    subtitle: 'Memorable Hill Station & Leisure Holidays for Families',
    shortDescription: 'Tailor-made family vacation tour packages to Ooty, Coonoor, Kodaikanal, Munnar, Valparai, Wayanad, and Mysore with sightseeing cabs.',
    fullDescription: 'Create lasting family memories with our outstation holiday packages. Our drivers double as local route guides, taking your family safely through hill station hairpin bends to botanical gardens, tea estates, waterfalls, and scenic viewpoints.',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    keyBenefits: [
      'Safe Drivers Certified for Hill Ghat Roads',
      'Roof Carriers for Extra Luggage Volume',
      'Kid & Senior Citizen Friendly Stops',
      'Flexible Departure & Sightseeing Timings'
    ],
    faqs: [
      {
        question: 'Which vehicle is best for a family of 6 going to Ooty?',
        answer: 'We recommend an SUV (Innova Crysta) or MVP for a family of 6, offering comfortable seating and ample luggage space.'
      }
    ]
  },
  {
    id: 'employee-transport',
    title: 'Employee Transport Services',
    slug: 'employee-transport',
    subtitle: 'Safe, Punctual Daily Commute Solutions for IT Parks, Factories & Corporate Offices',
    shortDescription: 'Contractual employee transport services for companies in Saravanampatti, Peelamedu, Singanallur, and Tiruppur industrial belts.',
    fullDescription: 'Keep your workforce punctual and safe with reliable daily commute routes. We provide contract-based employee transportation using speed-governed, sanitized Mini Buses, Tempo Travellers, and sedans.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Tempo Traveller', 'Coach', 'Mini Bus', 'Bus'],
    keyBenefits: [
      'GPS Tracked Vehicles & Route Optimization',
      'Speed-Governed Safety Compliant Fleet',
      '24x7 Shift Pickup & Drop Capabilities',
      'Verified Commercial Drivers with Background Checks'
    ],
    faqs: [
      {
        question: 'Do you provide daily shift transport for IT night shifts?',
        answer: 'Yes, we operate 24x7 shift pick-up and drop routes with female employee safety protocols and GPS tracking.'
      }
    ]
  },
  {
    id: 'industrial-visits',
    title: 'Industrial Visits & Educational Trips',
    slug: 'industrial-visits',
    subtitle: 'Safe & Economical Student Transport for Colleges, Universities & Schools',
    shortDescription: 'Industrial visit bus rentals for engineering, textile, and management college students in Coimbatore visiting factories across Tamil Nadu and Karnataka.',
    fullDescription: 'Coimbatore is an educational hub. Srii Lakshmi Cab supports colleges, polytechnics, and schools with audited, speed-governed Mini Buses and Large Buses for industrial exposure trips to textile mills, pump manufacturing units, and IT hubs.',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Tempo Traveller', 'Coach', 'Mini Bus', 'Bus'],
    keyBenefits: [
      'Safety Audited Speed-Governed Buses',
      'Experienced Senior Highway Crew',
      'Generous Under-Floor Storage Bags Space',
      'Affordable Institution Package Rates'
    ],
    faqs: [
      {
        question: 'Are your buses compliant with RTO safety norms for college trips?',
        answer: 'Yes, all our buses feature valid fitness certificates, speed governors, first aid kits, emergency exits, and full insurance.'
      }
    ]
  },
  {
    id: 'school-college-trips',
    title: 'School & College Excursions',
    slug: 'school-college-trips',
    subtitle: 'Fun & Secure Outing Buses for School Picnics & Educational Tours',
    shortDescription: 'High-capacity tourist bus rentals for school annual picnics, science center outings, and college sports meets.',
    fullDescription: 'Planning an annual picnic or sports event for students? Our 35-seater and 50-seater tourist buses feature air-suspension comfort, PA audio systems for announcements, and experienced drivers prioritized for student safety.',
    iconName: 'Building',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Tempo Traveller', 'Coach', 'Mini Bus', 'Bus'],
    keyBenefits: [
      'Air-Suspension Comfort for Long Journeys',
      'PA System & LED Screen Entertainment',
      'Courteous Drivers Prioritizing Safety',
      'Custom Pickup Points Across Coimbatore'
    ],
    faqs: [
      {
        question: 'Can we book a 50-seater bus for a day trip to Black Thunder theme park?',
        answer: 'Yes! We frequently arrange student group trips to Black Thunder (Mettupalayam) and local amusement centers.'
      }
    ]
  },
  {
    id: 'local-sightseeing',
    title: 'Local Coimbatore Sightseeing',
    slug: 'local-sightseeing',
    subtitle: 'Full-Day & Half-Day City Taxi Packages for Tourists & Business Visitors',
    shortDescription: 'Customized local city cab tours covering Marudhamalai Temple, Isha Adiyogi, GD Naidu Museum, VOC Park, and Siruvani Waterfalls.',
    fullDescription: 'Explore the Textile Capital of South India at your own pace. Hire a dedicated AC cab for 8 Hours / 80 KM or custom local packages to visit famous landmarks, textile shopping streets, and temples in comfort.',
    iconName: 'MapPin',
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
    recommendedVehicles: ['Hatchback', 'Sedan', 'SUV', 'MVP'],
    keyBenefits: [
      'Flexible Hourly & KM City Packages',
      'Drivers Knowledgeable About Local Markets',
      'Doorstep Pickup from Hotel or Railway Station',
      'Clean Air-Conditioned Comfort'
    ],
    faqs: [
      {
        question: 'What local places can we cover in an 8-hour Coimbatore city cab package?',
        answer: 'You can easily cover GD Naidu Museum, Marudhamalai Temple, Cross Cut Road Shopping, and VOC Park within 8 hours.'
      }
    ]
  }
];
