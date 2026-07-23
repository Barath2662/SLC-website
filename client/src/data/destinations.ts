import { DestinationItem } from '@/types';

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    slug: 'ooty',
    category: 'Hill Station',
    distanceFromCoimbatore: '86 km',
    travelTime: '2.5 - 3 Hours',
    bestTimeToVisit: 'October to June',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Queen of Hill Stations — Tea Gardens, Nilgiri Mountain Railway & Cool Climate',
    overview: 'Nestled in the Nilgiri Hills, Ooty is South India’s most beloved hill destination. Travel comfortably from Coimbatore via Mettupalayam ghat road with 36 scenic hairpin bends. Enjoy pleasant mountain weather, botanical gardens, pine forests, and tea estates.',
    attractions: [
      'Government Botanical Garden',
      'Ooty Lake & Boating',
      'Doddabetta Peak Viewpoint',
      'Nilgiri Mountain Railway (Toy Train)',
      'Pykara Lake & Waterfalls',
      'Tea Factory & Museum'
    ],
    travelTips: [
      'Depart Coimbatore early morning (around 6:00 AM) to avoid Mettupalayam ghat traffic.',
      'Carry warm woolens even in summer as evenings can be chilly.',
      'Book Toy Train tickets in advance through IRCTC for the scenic Coonoor-Ooty ride.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'Are your drivers experienced on the 36 hairpin bends of Ooty ghat road?',
        answer: 'Yes! All our hill station drivers are senior commercial drivers who regularly negotiate Nilgiri ghat roads safely.'
      },
      {
        question: 'Can we visit both Ooty and Coonoor in a single day cab trip?',
        answer: 'Yes, Coonoor is just 20 km before Ooty. We can easily customize a day itinerary covering Sim’s Park Coonoor and main Ooty spots.'
      }
    ]
  },
  {
    id: 'coonoor',
    name: 'Coonoor',
    slug: 'coonoor',
    category: 'Hill Station',
    distanceFromCoimbatore: '68 km',
    travelTime: '2 Hours',
    bestTimeToVisit: 'Year-round',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Quiet Nilgiri Paradise — Sim’s Park, Tea Estates & Dolphin’s Nose Viewpoint',
    overview: 'Located just below Ooty, Coonoor offers a peaceful, less crowded hill experience surrounded by rolling tea plantations. Famous for Sim’s Park botanical garden and panoramic views of Catherine Falls.',
    attractions: [
      'Sim’s Park Botanical Garden',
      'Dolphin’s Nose Viewpoint',
      'Lamb’s Rock View',
      'Catherine Falls Viewpoint',
      'Highfield Tea Factory'
    ],
    travelTips: [
      'Ideal for travellers seeking a quiet, relaxing nature break away from crowded tourist spots.',
      'Combine with an Ooty trip for a comprehensive 2-day Nilgiri tour.'
    ],
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller'],
    faqs: [
      {
        question: 'How far is Coonoor from Coimbatore Airport?',
        answer: 'Coonoor is approximately 68 km (around 2 hours drive) from Coimbatore International Airport.'
      }
    ]
  },
  {
    id: 'kotagiri',
    name: 'Kotagiri',
    slug: 'kotagiri',
    category: 'Hill Station',
    distanceFromCoimbatore: '65 km',
    travelTime: '2 Hours',
    bestTimeToVisit: 'December to May',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Oldest Nilgiri Hill Station — Kodanad Viewpoint & Catherine Falls Trek',
    overview: 'Kotagiri is the oldest of the three Nilgiri hill stations. Surrounded by lush tea estates and eucalyptus trees, it provides breathtaking vistas from Kodanad Viewpoint overlooking the Bhavanisagar reservoir.',
    attractions: [
      'Kodanad Viewpoint',
      'Catherine Falls',
      'Elk Falls',
      'Rangaswamy Peak & Pillar',
      'John Sullivan Memorial'
    ],
    travelTips: [
      'Visit Kodanad Viewpoint early morning for clear panoramic views before mist sets in.'
    ],
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller'],
    faqs: [
      {
        question: 'Is Kotagiri road less steep than Ooty ghat road?',
        answer: 'Yes, the Kotagiri route via Mettupalayam features smoother gradients and less heavy bus traffic.'
      }
    ]
  },
  {
    id: 'valparai',
    name: 'Valparai',
    slug: 'valparai',
    category: 'Hill Station',
    distanceFromCoimbatore: '104 km',
    travelTime: '3.5 Hours',
    bestTimeToVisit: 'September to March',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Unspoiled Anamalai Hills — 40 Hairpin Bends, Tea Estates & Wildlife Spotting',
    overview: 'Located in the Anamalai Tiger Reserve, Valparai is a pristine hill station world-famous for its 40 hairpin bends from Pollachi. Experience serene tea gardens, lion-tailed macaque spotting, and cool mountain air.',
    attractions: [
      '40 Hairpin Bends Drive',
      'Sholayar Dam (Second deepest in Asia)',
      'Aliyar Dam Park & Lake',
      'Nallamudi Poonjolai Viewpoint',
      'Monkey Falls',
      'Balaji Temple Valparai'
    ],
    travelTips: [
      'Stopover at Aliyar Dam at the foothills before climbing the 40 hairpin bends.',
      'Keep eyes peeled for wildlife like Nilgiri Tahr and Lion-tailed Macaques along forest stretches.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'Are your drivers skilled at navigating the 40 hairpin bends of Valparai?',
        answer: 'Yes, our Pollachi/Valparai route drivers are highly experienced in handling Anamalai forest ghat roads.'
      }
    ]
  },
  {
    id: 'munnar',
    name: 'Munnar (Kerala)',
    slug: 'munnar',
    category: 'Hill Station',
    distanceFromCoimbatore: '158 km',
    travelTime: '4.5 - 5 Hours',
    bestTimeToVisit: 'September to May',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    tagline: 'God’s Own Hill Station — Endless Tea Carpet, Anamudi Peak & Mattupetty Dam',
    overview: 'Munnar in Kerala is a paradise of tea plantations, misty valleys, and exotic flora. Travel from Coimbatore via Udumalpet and Chinnar Wildlife Sanctuary for an unforgettable cross-border hill holiday.',
    attractions: [
      'Eravikulam National Park (Nilgiri Tahr)',
      'Mattupetty Dam & Eco Point',
      'Tea Museum & Processing Unit',
      'Top Station Viewpoint',
      'Kundala Lake Boating',
      'Chinnar Wildlife Sanctuary Route'
    ],
    travelTips: [
      'We handle Kerala state tourist permits seamlessly for hassle-free border crossing.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'Do your cabs have Kerala inter-state permit for Munnar trips?',
        answer: 'Yes, all our outstation vehicles possess valid South India and Kerala tourist permits.'
      }
    ]
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    slug: 'kodaikanal',
    category: 'Hill Station',
    distanceFromCoimbatore: '172 km',
    travelTime: '4.5 Hours',
    bestTimeToVisit: 'September to May',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Princess of Hill Stations — Kodai Star Lake, Coaker’s Walk & Pillar Rocks',
    overview: 'Perched on the Palani Hills, Kodaikanal is famous for its star-shaped central lake, wooded forest trails, fruit orchards, and mist-covered viewpoints like Coaker’s Walk and Pillar Rocks.',
    attractions: [
      'Kodaikanal Lake Boating & Cycling',
      'Coaker’s Walk Viewpoint',
      'Pillar Rocks & Pine Forest',
      'Bryant Park Floral Display',
      'Silver Cascade Waterfalls',
      'Moir Point & Guna Caves'
    ],
    travelTips: [
      'Rent bicycles or tandem bikes around Kodai Lake for a memorable morning experience.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'How long does a cab take from Coimbatore to Kodaikanal?',
        answer: 'Around 4.5 hours via Dharapuram and Palani foothills road.'
      }
    ]
  },
  {
    id: 'mysore',
    name: 'Mysore (Mysuru)',
    slug: 'mysore',
    category: 'City / Outstation',
    distanceFromCoimbatore: '195 km',
    travelTime: '4.5 - 5 Hours',
    bestTimeToVisit: 'October to March',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Heritage City of Palaces — Amba Vilas Palace, Chamundi Hill & Brindavan Gardens',
    overview: 'Mysore in Karnataka is renowned for its royal heritage, grand palaces, silk sarees, and sandalwood. Travel from Coimbatore through the scenic Sathyamangalam forest or Chamarajanagar route.',
    attractions: [
      'Mysore Palace (Amba Vilas)',
      'Chamundeshwari Temple on Chamundi Hill',
      'Brindavan Gardens & Musical Fountains',
      'Mysore Zoo (Sri Chamarajendra Zoological Gardens)',
      'St. Philomena’s Cathedral'
    ],
    travelTips: [
      'Visit Mysore Palace on Sunday evening to see the grand 100,000 bulb illumination display.'
    ],
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller'],
    faqs: [
      {
        question: 'Do you provide Karnataka state permit for Coimbatore to Mysore cabs?',
        answer: 'Yes, our outstation cabs carry valid Karnataka tourist permits.'
      }
    ]
  },
  {
    id: 'isha-foundation',
    name: 'Isha Foundation (Adiyogi)',
    slug: 'isha-foundation',
    category: 'Pilgrimage',
    distanceFromCoimbatore: '30 km',
    travelTime: '45 - 60 Mins',
    bestTimeToVisit: 'Year-round',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Spiritual Center at Velliangiri Foothills — 112ft Adiyogi Shiva Statue & Dhyanalinga',
    overview: 'Located at the serene foothills of Velliangiri Mountains, Isha Yoga Center is world-renowned for the 112ft Adiyogi Shiva statue, Dhyanalinga, Linga Bhairavi, and the evening Divya Nethra laser projection show.',
    attractions: [
      '112-Foot Adiyogi Shiva Statue',
      'Dhyanalinga Meditative Space',
      'Linga Bhairavi Temple',
      'Suryakund & Chandrakund Holy Dip',
      'Adiyogi Divya Nethra 3D Laser Show (Evening)'
    ],
    travelTips: [
      'Plan your return trip after the 7:00 PM Adiyogi 3D Light Show for a complete experience.',
      'Dress modestly in comfortable traditional or casual clothing.'
    ],
    recommendedVehicles: ['Hatchback', 'Sedan', 'SUV', 'MVP'],
    faqs: [
      {
        question: 'Can we book a round-trip cab from Coimbatore to Isha Yoga Center with waiting time?',
        answer: 'Yes, we provide half-day and full-day cab packages with flexible waiting time at Isha Yoga Center.'
      }
    ]
  },
  {
    id: 'marudhamalai',
    name: 'Marudhamalai Murugan Temple',
    slug: 'marudhamalai',
    category: 'Pilgrimage',
    distanceFromCoimbatore: '15 km',
    travelTime: '30 Mins',
    bestTimeToVisit: 'Year-round',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Sacred Hilltop Abode of Lord Murugan — Panoramic City Views & Divine Blessings',
    overview: 'Perched on a scenic hillock of the Western Ghats, Marudhamalai is one of Tamil Nadu’s most revered Murugan temples. Known for its medicinal herbs, hill atmosphere, and spiritual tranquility.',
    attractions: [
      'Lord Murugan Hilltop Temple',
      'Pambatti Siddhar Cave',
      'Holy Springs & Medicinal Herb Trails',
      'Panoramic View of Coimbatore City'
    ],
    travelTips: [
      'Special hilltop cab permits allow driving straight up to temple steps for senior citizens.'
    ],
    recommendedVehicles: ['Hatchback', 'Sedan', 'SUV', 'MVP'],
    faqs: [
      {
        question: 'Can cabs drive all the way up Marudhamalai hill road?',
        answer: 'Yes, private cabs can drive up to the hilltop parking area near the main temple entrance.'
      }
    ]
  },
  {
    id: 'black-thunder',
    name: 'Black Thunder Theme Park',
    slug: 'black-thunder',
    category: 'Leisure & Theme Park',
    distanceFromCoimbatore: '40 km',
    travelTime: '1 Hour',
    bestTimeToVisit: 'March to October',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Asia’s Premier Water Theme Park at the Foothills of Nilgiris in Mettupalayam',
    overview: 'Spanning 75 acres near Mettupalayam at the foot of Ooty hills, Black Thunder offers over 40 thrilling water rides, wave pools, and adventure land games. A favorite day outing for families and student groups.',
    attractions: [
      'Wave Pool & Surf Hill',
      'Lazy River & Family Raft Ride',
      'Wild River Ride & Dash-N-Splash',
      'Dragon Coaster & Adventure Park'
    ],
    travelTips: [
      'Carry extra dry clothes, towels, and swimwear for water rides.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Mini Bus'],
    faqs: [
      {
        question: 'Do you offer round-trip day package cabs for Black Thunder?',
        answer: 'Yes, we provide round-trip day cabs with pickup from your location and evening return.'
      }
    ]
  },
  {
    id: 'palani',
    name: 'Palani Murugan Temple',
    slug: 'palani',
    category: 'Pilgrimage',
    distanceFromCoimbatore: '105 km',
    travelTime: '2.5 Hours',
    bestTimeToVisit: 'Year-round',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    tagline: 'One of the Six Abodes of Lord Murugan (Arupadai Veedu) — Winch & Rope Car',
    overview: 'Palani is one of the most sacred pilgrimage centers in South India, housing the ancient idol created by Siddhar Bhogar from Navapashanam. Accessible by steps, rope car, or funicular railway winch.',
    attractions: [
      'Palani Dhandayuthapani Swamy Temple',
      'Rope Car & Funicular Winch Ride',
      'Thiru Avinankudi Temple at Foothills',
      'Idumban Hill Shrine'
    ],
    travelTips: [
      'Book online special darshan tickets and rope car passes to save time during festival seasons.'
    ],
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller', 'Mini Bus'],
    faqs: [
      {
        question: 'Is Palani temple trip suitable for a 1-day family cab visit?',
        answer: 'Yes, a 1-day trip from Coimbatore to Palani and back takes around 8-9 hours total including darshan.'
      }
    ]
  },
  {
    id: 'madurai',
    name: 'Madurai',
    slug: 'madurai',
    category: 'City / Outstation',
    distanceFromCoimbatore: '215 km',
    travelTime: '4 - 4.5 Hours',
    bestTimeToVisit: 'October to March',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Cultural Capital of Tamil Nadu — Meenakshi Amman Temple & Thirumalai Nayakkar Palace',
    overview: 'Known as the Lotus City and City of Sleepless Nights (Thoonga Nagaram), Madurai is steeped in 2,500 years of Sangam history. Famous for the soaring gopurams of Meenakshi Amman Temple and famous street food.',
    attractions: [
      'Meenakshi Amman Temple',
      'Thirumalai Nayakkar Mahal Palace',
      'Gandhi Memorial Museum',
      'Alagar Kovil & Kallazhagar Temple',
      'Famous Madurai Jigarthanda & Street Food'
    ],
    travelTips: [
      'Dress in traditional attire for Meenakshi Temple entry. Mobile phones are not allowed inside main inner prakarams.'
    ],
    recommendedVehicles: ['Sedan', 'SUV', 'MVP', 'Tempo Traveller'],
    faqs: [
      {
        question: 'Can we combine Madurai and Rameswaram into a 3-day cab package?',
        answer: 'Yes! Our Coimbatore-Madurai-Rameswaram round trip package is extremely popular for families.'
      }
    ]
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    slug: 'rameswaram',
    category: 'Pilgrimage',
    distanceFromCoimbatore: '380 km',
    travelTime: '7 - 8 Hours',
    bestTimeToVisit: 'October to April',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Sacred Island Shrine — Ramanathaswamy Temple 22 Wells & Pamban Bridge',
    overview: 'Located on Pamban Island, Rameswaram is one of the holiest Char Dham pilgrimage sites. Famous for the longest temple corridor in India, 22 holy teertham wells, and the iconic sea-crossing Pamban Bridge.',
    attractions: [
      'Ramanathaswamy Temple & 22 Holy Wells Dip',
      'Pamban Sea Bridge Viewpoint',
      'Dhanushkodi Ghost Town & Land’s End Point',
      'APJ Abdul Kalam National Memorial',
      'Agni Theertham Holy Beach'
    ],
    travelTips: [
      'Hire a local 4x4 jeep or local mini bus for the sandy stretch to Dhanushkodi beach point.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'How many days are recommended for a Coimbatore to Rameswaram tour?',
        answer: 'We recommend a 3-day round trip covering Madurai and Rameswaram comfortably.'
      }
    ]
  },
  {
    id: 'topslip',
    name: 'Topslip (Anamalai Tiger Reserve)',
    slug: 'topslip',
    category: 'Hill Station',
    distanceFromCoimbatore: '75 km',
    travelTime: '2 Hours',
    bestTimeToVisit: 'November to May',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Ecotourism Wildlife Sanctuary — Elephant Camp, Jungle Safari & Teak Forests',
    overview: 'Situated in the Anamalai Hills near Pollachi, Topslip is a rich wildlife habitat known for elephant camps, jungle safaris, medicinal plant gardens, and dense teak forests.',
    attractions: [
      'Kozhikamuthi Elephant Camp',
      'Forest Department Jungle Bus Safari',
      'Medicinal Plant Garden & Interpretive Center',
      'Sethumadai & Parambikulam Tiger Reserve Border'
    ],
    travelTips: [
      'Forest entry closes by 4:00 PM; start early from Pollachi foothills.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller'],
    faqs: [
      {
        question: 'Do your cabs have forest department entry permits for Topslip?',
        answer: 'Entry permits are issued at the Sethumadai forest check post. Our drivers assist with vehicle toll clearance.'
      }
    ]
  },
  {
    id: 'wayanad',
    name: 'Wayanad (Kerala)',
    slug: 'wayanad',
    category: 'Hill Station',
    distanceFromCoimbatore: '210 km',
    travelTime: '5.5 Hours',
    bestTimeToVisit: 'October to May',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Green Paradise of Kerala — Banasura Sagar Dam, Edakkal Caves & Chembra Peak',
    overview: 'Wayanad offers mist-clad mountains, spice plantations, prehistoric cave etchings at Edakkal, and India’s largest earthen dam at Banasura Sagar.',
    attractions: [
      'Banasura Sagar Earthen Dam',
      'Edakkal Caves (Prehistoric petroglyphs)',
      'Chembra Peak Heart-Shaped Lake',
      'Soochipara & Meenmutty Waterfalls',
      'Muthanga Wildlife Sanctuary'
    ],
    travelTips: [
      'Wear sturdy shoes if planning the trek up to Edakkal Caves or Chembra Peak.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'Can we book a 3-day outstation trip to Wayanad from Coimbatore?',
        answer: 'Yes, we provide full 3-day and 4-day Wayanad custom tour itineraries.'
      }
    ]
  },
  {
    id: 'coorg',
    name: 'Coorg (Madikeri, Karnataka)',
    slug: 'coorg',
    category: 'Hill Station',
    distanceFromCoimbatore: '310 km',
    travelTime: '7 Hours',
    bestTimeToVisit: 'October to April',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Scotland of India — Coffee Plantations, Abbey Falls & Dubare Elephant Camp',
    overview: 'Famed for aromatic coffee estates, Kodava culture, cascading waterfalls, and lush misty slopes, Coorg is Karnataka’s premier hill getaway.',
    attractions: [
      'Abbey Falls & Iruppu Falls',
      'Raja’s Seat Sunset Viewpoint',
      'Dubare Elephant Camp & River Rafting',
      'Namdroling Nyingmapa Monastery (Golden Temple Bylakuppe)',
      'Madikeri Fort & Omkareshwara Temple'
    ],
    travelTips: [
      'Stop over at Bylakuppe Golden Tibetan Monastery on the way to Madikeri.'
    ],
    recommendedVehicles: ['SUV', 'MVP', 'Tempo Traveller', 'Force Urbania'],
    faqs: [
      {
        question: 'Do your vehicles carry Karnataka inter-state permit for Coorg?',
        answer: 'Yes, all our outstation vehicles carry valid Karnataka permits.'
      }
    ]
  }
];
