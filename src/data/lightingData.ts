import { ProductCategory, ProductItem, ProjectCaseStudy, SolutionService, IndustryItem } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'interior',
    number: '01',
    name: 'Interior Lighting',
    shortTitle: 'Interior',
    headline: 'Atmospheres defined by subtleness.',
    description: 'Recessed architectural downlights, 48V low-voltage magnetic tracks, seamless cove grazing, and micro-linear systems with museum-grade color rendering.',
    detailedOverview: 'Precision architectural luminaires crafted for seamless ceiling integration, minimal glare (UGR < 10), and flawless visual comfort in luxury residential, corporate headquarters, and high-end hospitality.',
    tags: ['Architectural', 'Interior', 'CRI 98+', 'Micro-Optics'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    applications: ['Luxury Villas', 'Boutique Hotels', 'Art Galleries', 'Corporate Atriums'],
    typicalOptics: '12° Narrow Spot, 24° Medium, 38° Flood, Wallwasher asymmetric'
  },
  {
    id: 'exterior',
    number: '02',
    name: 'Exterior Lighting',
    shortTitle: 'Exterior',
    headline: 'Sculpting surfaces beyond sunset.',
    description: 'Inground drive-over uplights, architectural bollards with dark-sky cutoffs, step luminaires, and marine-grade anodized wall fixtures designed for UAE climate resilience.',
    detailedOverview: 'Engineered to withstand extreme ambient temperatures (+55°C) and coastal salinity, our exterior range balances robust IP67/IP68 engineering with refined architectural design.',
    tags: ['Exterior', 'IP67 Weatherproof', 'Dark-Sky', 'Marine Grade'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    applications: ['Private Estates', 'Hotel Terraces', 'Plazas', 'Waterfront Promenades'],
    typicalOptics: 'Asymmetric 360° cutoff, Inground tiltable 8°-45°'
  },
  {
    id: 'industrial',
    number: '03',
    name: 'Industrial Lighting',
    shortTitle: 'Industrial',
    headline: 'High-performance engineering at scale.',
    description: 'High-bay optical systems, explosion-proof ATEX luminaires, vapor-tight enclosures, and smart logistics lighting engineered for zero maintenance in harsh industrial environments.',
    detailedOverview: 'Delivering up to 180 lm/W system efficacy with advanced heat dissipation fins, transient surge protection (10kV), and automated DALI-2 daylight harvesting controls.',
    tags: ['Industrial', 'High-Bay', '180 lm/W', 'ATEX Certified'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    applications: ['Logistics Hubs', 'Aviation Hangars', 'Pharma Cleanrooms', 'Manufacturing Plants'],
    typicalOptics: '60° Concentrated, 90° Wide, 120° Diffuse, Aisle distribution'
  },
  {
    id: 'landscape',
    number: '04',
    name: 'Landscape Lighting',
    shortTitle: 'Landscape',
    headline: 'Botanical forms brought to life after dusk.',
    description: 'Sub-canopy projector spots, underwater IP68 fountain luminaires, tree-strap micro-accents, and low-glare pathway delineation creating layered outdoor experiences.',
    detailedOverview: 'Illuminating living nature requires sensitivity to vegetative growth, circadian rhythms of fauna, and precision beam masking to keep the night sky naturally intact.',
    tags: ['Landscape', 'Botanical', 'IP68 Submersible', 'Honeycomb Louver'],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    applications: ['Desert Resorts', 'Urban Botanical Gardens', 'Villa Courtyards', 'Reflection Pools'],
    typicalOptics: 'Narrow 6° pencil beam, elliptical 15°x40°, submerged wide flood'
  },
  {
    id: 'facade',
    number: '05',
    name: 'Facade Lighting',
    shortTitle: 'Facade',
    headline: 'Architecture after dark.',
    description: 'Precision linear grazing systems, dynamic RGBW/RGBA pixel matrices, high-power column spotlights, and custom brackets transforming building envelopes into visual landmarks.',
    detailedOverview: 'From the iconic skyscrapers of Dubai to cultural museums in Abu Dhabi, LUMELEX facade solutions integrate invisibly into architectural mullions while delivering breathtaking nocturnal presence.',
    tags: ['Architectural', 'Exterior', 'LED', 'Facade', 'DMX512 / RDM'],
    imageUrl: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80',
    applications: ['Commercial Towers', 'Iconic Bridges', 'Cultural Venues', 'Luxury Hospitality Towers'],
    typicalOptics: '8°x45° Linear wall-grazer, 3.5° ultra-narrow column shooter'
  },
  {
    id: 'road',
    number: '06',
    name: 'Road Lighting',
    shortTitle: 'Road',
    headline: 'Visual acuity and safety along urban arteries.',
    description: 'Aerodynamic smart street luminaires, adaptive highway poles, pedestrian boulevard fixtures, and IoT-connected lighting nodes compliant with UAE municipal standards.',
    detailedOverview: 'Engineered according to CIE 115 and UAE federal highway specifications, minimizing glare and upward light ratio while providing uniform luminance across multi-lane expressways.',
    tags: ['Smart City', 'Roadway', 'IoT Connected', 'CIE Standards'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    applications: ['Intercity Expressways', 'Urban Boulevards', 'Airport Ring Roads', 'Master Developments'],
    typicalOptics: 'Type II Medium, Type III Short, Batwing pedestrian'
  },
  {
    id: 'stadium',
    number: '07',
    name: 'Stadium Lighting',
    shortTitle: 'Stadium',
    headline: 'FIFA and Olympic broadcast precision.',
    description: 'Ultra-high-output sports floodlights with flicker-free technology for 4K/8K ultra-slow-motion broadcasting, TLCI > 90, and advanced glare cutoff shields for athlete visual comfort.',
    detailedOverview: 'Meeting strict international sports governing standards, including FIFA Class V and Olympic committee criteria, with instant restrike and integrated entertainment dynamic DMX show modes.',
    tags: ['Stadium', '4K Broadcast', 'Flicker-Free', 'High Lux'],
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1600&q=80',
    applications: ['Multi-Purpose Stadiums', 'Cricket Arenas', 'Equestrian Tracks', 'Tennis Academies'],
    typicalOptics: '10° Precision sports reflector, 20° asymmetrical stadium throw'
  },
  {
    id: 'solar',
    number: '08',
    name: 'Solar Lighting',
    shortTitle: 'Solar',
    headline: 'Independent, sustainable luminescence.',
    description: 'Autonomous architectural solar columns, integrated bifacial PV systems, MPPT smart charge governors, and durable LiFePO4 energy storage designed for GCC solar conditions.',
    detailedOverview: 'Harnessing the abundant UAE solar irradiance with aesthetic cylindrical solar poles that eliminate civil trenching, providing 100% reliable illumination through multiple cloudy/dust storm days.',
    tags: ['Solar PV', 'Zero Emissions', 'Autonomous', 'LiFePO4 Storage'],
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    applications: ['Desert Highway Rest Stops', 'Eco-Tourism Resorts', 'Remote Infrastructure', 'Private Islands'],
    typicalOptics: 'Forward-throw roadway, 360° area pathway'
  },
  {
    id: 'lamps',
    number: '09',
    name: 'Lamps & Specialty Optics',
    shortTitle: 'Lamps',
    headline: 'High-efficacy retrofit engines and precision modules.',
    description: 'Architectural LED modules, AR111 & MR16 replacement engines, ultra-warm dim-to-warm filaments, and custom custom optical accessories including snoots and honeycombs.',
    detailedOverview: 'For heritage renovations, custom hospitality pendants, or precision art gallery upgrades where the luminaire fixture housing is preserved while modernizing the optical engine.',
    tags: ['Retrofit', 'Dim-to-Warm', 'Specialty Optics', 'AR111 / MR16'],
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80',
    applications: ['Art Museums', 'Luxury Retail Displays', 'Custom Chandeliers', 'Heritage Renovations'],
    typicalOptics: 'Interchangeable TIR lenses 10° to 60°, Hexagonal micro-louvers'
  }
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'lumebeam-f258',
    name: 'LumeBeam F258',
    category: 'Facade Lighting',
    categoryId: 'facade',
    descriptor: 'High-output linear wall grazer with micro-baffle glare cutoff and precision tilt mounting.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    lumens: '3,800 lm/m',
    cct: '2700K - 4000K / RGBW',
    cri: 'Ra > 92',
    beamAngle: '10° × 45° Graze',
    ipRating: 'IP67 / IK09',
    control: 'DMX512 / RDM / DALI-2',
    tagline: 'Sculptural facade texture reveals after dark.',
    isFeatured: true
  },
  {
    id: 'lumestl-x',
    name: 'LumeSTL X',
    category: 'Road Lighting',
    categoryId: 'road',
    descriptor: 'Aerodynamic smart urban spine luminaire with aerodynamic wind mitigation and Zhaga D4i socket.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    lumens: '14,500 - 32,000 lm',
    cct: '3000K / 4000K',
    cri: 'Ra > 75 (Dark Sky Approved)',
    beamAngle: 'Type II / Type III Batwing',
    ipRating: 'IP66 / IK10',
    control: 'Zhaga IoT / 0-10V / DALI',
    tagline: 'Engineered highway luminance with zero light pollution.',
    isFeatured: true
  },
  {
    id: 'lumebldp-sm',
    name: 'LumeBLDP S/M',
    category: 'Exterior Lighting',
    categoryId: 'exterior',
    descriptor: 'Cast architectural bollard with 360° downward glare-free optical louvers and marine-grade finish.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    lumens: '1,250 lm',
    cct: '2700K / 3000K',
    cri: 'Ra > 90',
    beamAngle: '360° Dark-Sky Cutoff',
    ipRating: 'IP67 / Salt Spray 1000h',
    control: 'Phase Cut / 1-10V',
    tagline: 'Quiet, tactile ground guidance for luxury environments.',
    isFeatured: true
  },
  {
    id: 'lumecob-digital',
    name: 'LumeCOB Digital',
    category: 'Interior Lighting',
    categoryId: 'interior',
    descriptor: 'Tunable architectural deep-recessed downlight with interchangeable bezels and zero visible flicker.',
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80',
    lumens: '950 - 2,400 lm',
    cct: '1800K - 4000K Tunable White',
    cri: 'Ra 98 / R9 > 95',
    beamAngle: '15° / 24° / 36° / 50°',
    ipRating: 'IP44 / IP54 options',
    control: 'DALI-2 Type 8 / Bluetooth Mesh',
    tagline: 'Circadian rhythm harmony with museum-grade color rendering.',
    isFeatured: true
  },
  {
    id: 'lumehiled-t',
    name: 'LumeHILED T',
    category: 'Stadium Lighting',
    categoryId: 'stadium',
    descriptor: 'Modular sports & arena floodlight with asymmetric precision reflector and 8K broadcast compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    lumens: '180,000 lm',
    cct: '5700K (TLCI > 92)',
    cri: 'Ra > 90',
    beamAngle: '12° / 20° Asymmetric Throw',
    ipRating: 'IP66 / Wind tested 60m/s',
    control: 'DMX / ArtNet / Fiber Optic',
    tagline: 'Broadcast perfection that puts every millisecond in crisp focus.',
    isFeatured: true
  },
  {
    id: 'track-light-48v',
    name: 'LumeTrack 48V',
    category: 'Interior Lighting',
    categoryId: 'interior',
    descriptor: 'Low-voltage magnetic architectural track system with interchangeable linear, spot, and wall-wash modules.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    lumens: 'Modular (up to 3,200 lm/m)',
    cct: '2700K / 3000K / Dim-to-Warm',
    cri: 'Ra > 95',
    beamAngle: 'Modular (Magnetic snap-in)',
    ipRating: 'IP20',
    control: 'Casambi / DALI / 0-10V',
    tagline: 'Infinite spatial agility on a razor-thin 18mm magnetic profile.',
    isFeatured: true
  },
  // Additional catalog fixtures
  {
    id: 'lume-solar-arch',
    name: 'LumeSolar Axis',
    category: 'Solar Lighting',
    categoryId: 'solar',
    descriptor: 'Vertical cylindrical solar photovoltaic pole with integrated battery and intelligent sensor.',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    lumens: '6,400 lm',
    cct: '3000K / 4000K',
    cri: 'Ra > 80',
    beamAngle: 'Asymmetric forward throw',
    ipRating: 'IP67',
    control: 'Autonomous MPPT / IoT remote',
    tagline: 'Self-sustaining energy architecture for untouched landscapes.',
    isFeatured: false
  },
  {
    id: 'lume-spike-micro',
    name: 'LumeSpike S9',
    category: 'Landscape Lighting',
    categoryId: 'landscape',
    descriptor: 'Machined 316L stainless steel micro-ground projector with interchangeable honeycomb snoot.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    lumens: '650 lm',
    cct: '2400K / 2700K / 3000K',
    cri: 'Ra > 95',
    beamAngle: '10° / 20° / Oval',
    ipRating: 'IP68 Submersible 2m',
    control: '24V DC PWM / 0-10V',
    tagline: 'Concealed pinpoint foliage drama.',
    isFeatured: false
  },
  {
    id: 'lume-ind-bay',
    name: 'LumeBay Max 240',
    category: 'Industrial Lighting',
    categoryId: 'industrial',
    descriptor: 'Forged aluminum heavy industrial high-bay with thermal heat pipe dissipation and glass lens.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    lumens: '43,200 lm',
    cct: '4000K / 5000K',
    cri: 'Ra > 80',
    beamAngle: '60° / 90° Precision Lens',
    ipRating: 'IP66 / IK10',
    control: 'PIR Sensor / Microwave / DALI-2',
    tagline: 'Resolute durability under intense ambient thermal loads.',
    isFeatured: false
  }
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'jumeirah-bay-resort',
    number: '01',
    title: 'Luxury Hospitality Resort',
    category: 'Hospitality',
    location: 'Jumeirah Bay Island, Dubai, UAE',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    scope: 'Master Lighting Design, Custom Fixture Manufacturing, Supply, Site Supervision & Commissioning',
    projectType: 'Ultra-Luxury 5-Star Hotel & Private Villas',
    lightingApplications: ['Exterior Facade', 'Landscape Pathways', 'Cove Systems', 'Restaurant Dining Lighting', 'Beachside Delineation'],
    challenge: 'The architectural vision demanded that no light source be directly visible to hotel guests from any vantage point. Furthermore, coastal salt spray and ambient temperatures reaching 52°C required bespoke marine-grade fixtures with passive cooling.',
    solution: 'LUMELEX engineered customized micro-downlights with 45° physical cutoffs and anti-glare louvers. For the palm-lined beachfront, underwater IP68 fixtures were synchronized with the tidal water level, producing a soft nocturnal shimmer that emphasizes the Arabian Gulf horizon.',
    result: 'The resort achieved an intimate, residential luxury atmosphere with zero light trespass. The lighting energy density was measured at 38% below UAE Green Building Regulations while exceeding Forbes 5-Star visual comfort standards.',
    luminaireSelection: ['LumeCOB Digital (2400K Warm Dim)', 'LumeBLDP S/M Marine Anodized', 'LumeSpike S9 Submersible', 'Custom Grazing Coves']
  },
  {
    id: 'the-opus-tower-facade',
    number: '02',
    title: 'Architectural Facade Void',
    category: 'Facade',
    location: 'Business Bay, Dubai, UAE',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80'
    ],
    scope: 'Façade Engineering, Parametric Luminaire Customization, DMX Optical Programming',
    projectType: 'Iconic Architectural Commercial & Hotel Tower',
    lightingApplications: ['Curved Organic Void Grazing', 'Mullion Integration', 'DMX Synchronized Show System'],
    challenge: 'Illuminating a complex double-curved geometric glass void without reflections blinding occupants inside the residential suites or commercial offices facing the inner atrium.',
    solution: 'We developed custom narrow-beam (6° × 32°) linear LED grazers housed inside custom extruded aluminum profiles that perfectly match the facade mullion geometry. Optical snoots eliminate lateral spill.',
    result: 'By night, the iconic void transforms into a fluid sculpture of pure light, becoming one of the most photographed architectural landmarks in the UAE skyline.',
    luminaireSelection: ['LumeBeam F258 Custom Extrusions', 'Parametric DMX Controller Nodes', 'Micro-Shield Optics']
  },
  {
    id: 'khalifa-sports-arena',
    number: '03',
    title: 'Stadium & Sports Complex',
    category: 'Sports',
    location: 'Abu Dhabi, UAE',
    heroImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80'
    ],
    scope: 'Photometric Simulation, High-Mast Structural Supply, DMX Arena Control, FIFA Broadcast Certification',
    projectType: 'International Competition Arena',
    lightingApplications: ['Pitch Floodlighting', 'Spectator Concourses', 'Emergency Restrike', 'Architectural Catwalks'],
    challenge: 'Fulfill stringent FIFA Class V broadcast requirements with vertical illuminance > 2500 lux while keeping total connected electrical load below legacy HID thresholds and maintaining UGR < 40.',
    solution: 'Deployed LUMELEX LumeHILED T luminaires with precision anti-glare visors and optical TIR lenses. Configured dual independent fiber-optic networks for instantaneous restrike and entertainment pre-match shows.',
    result: 'Delivered flawless 8K broadcast capability with 0.1% flicker rate and a 42% reduction in operational energy consumption compared to previous sports complexes in the region.',
    luminaireSelection: ['LumeHILED T 180kW Array', 'Broadband Optical Concentrators', 'DMX Entertainment Node']
  },
  {
    id: 'al-barari-sanctuary',
    number: '04',
    title: 'Landscape After Dark',
    category: 'Landscape',
    location: 'Al Barari, Dubai, UAE',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    scope: 'Landscape Lighting Design, Horticultural Botanical Lighting, Water Feature Illumination',
    projectType: 'Exclusive Eco-Botanical Residential Sanctuary',
    lightingApplications: ['Sub-Canopy Tree Illumination', 'Living Waterfalls', 'Stealth Step Lighting', 'Garden Pavilions'],
    challenge: 'Preserve the tranquil desert oasis character without over-saturating the natural flora, and prevent disturbance to nocturnal birds and garden wildlife.',
    solution: 'Implemented ultra-warm 2400K custom spectral fixtures with micro honeycomb baffles tucked unobtrusively into ground foliage. Automated Astronomical clock programming adjusts intensity throughout the evening.',
    result: 'A poetic nocturnal garden path where light guides foot traffic with subtlety while leaving the mature canopy silhouetted organically against the star-filled desert sky.',
    luminaireSelection: ['LumeSpike S9', 'LumeBLDP S Miniature Path', 'Submersible Fountain Spot IP68']
  },
  {
    id: 'difc-gate-headquarters',
    number: '05',
    title: 'DIFC Financial Headquarters',
    category: 'Commercial',
    location: 'DIFC, Dubai, UAE',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80'
    ],
    scope: 'Circadian Workplace Lighting, Atrium Skylight Mimicry, DALI-2 Integration',
    projectType: 'Grade-A Commercial Atrium & Headquarters',
    lightingApplications: ['Circadian Tunable White', 'Executive Boardrooms', 'Central 14-Story Atrium'],
    challenge: 'Create an energizing daylight mimicry system across a deep corporate floor plate with limited natural perimeter glazing.',
    solution: 'Integrated dynamic spectral luminaires that transition from 5000K high-melanopic morning light to a calm 2700K afternoon ambiance, controlled by local presence and lux sensors.',
    result: 'Achieved WELL Gold Certification standard and reported significant improvements in employee alertness, visual comfort, and satisfaction.',
    luminaireSelection: ['LumeCOB Tunable Matrix', 'Micro-Magnetic 48V Track', 'Continuous Linear Wall Grazer']
  },
  {
    id: 'emirates-hills-villa',
    number: '06',
    title: 'Emirates Hills Private Estate',
    category: 'Residential',
    location: 'Emirates Hills, Dubai, UAE',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    scope: 'Full Estate Architecture & Interior Lighting Design, Art Illumination, Smart Home KNX Integration',
    projectType: 'High-End Contemporary Villa (35,000 sq ft)',
    lightingApplications: ['Museum-Grade Art Framing', 'Wine Cellar Backlit Onyx', 'Infinity Pool Delineation'],
    challenge: 'The client possessed a world-class collection of contemporary oil paintings and sculptures that required zero UV/IR degradation and pinpoint framing without visible ceiling clutter.',
    solution: 'Utilized frameless plaster-in micro-optical downlights with adjustable framing shutters that clip exactly to the canvas margins, alongside indirect warm plaster coves.',
    result: 'An understated sanctuary where architecture and art take center stage, entirely controllable via a minimalist touch interface.',
    luminaireSelection: ['LumeCOB Art Shutter Spotlight', 'LumeTrack 48V Concealed', 'Warm Grazing IP67 Ribbon']
  },
  {
    id: 'dubai-canal-crossing',
    number: '07',
    title: 'Dubai Canal Pedestrian Bridge',
    category: 'Infrastructure',
    location: 'Dubai Water Canal, Dubai, UAE',
    heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [],
    scope: 'Structural Lighting Concept, Marine Engineering, Underside Ripple Optics',
    projectType: 'Civic Urban Infrastructure Crossing',
    lightingApplications: ['Tension Cable Uplighting', 'Deck Handrail Concealed LEDs', 'Water Wave Reflection Optics'],
    challenge: 'Provide pedestrian safety illumination while protecting navigability for marine craft along the canal with zero direct downward glare into boat captain eyelines.',
    solution: 'Engineered continuous 316L stainless steel handrail profiles with integrated asymmetrical optics, paired with submerged pontoon projectors that gently reveal the bridge curvature from afar.',
    result: 'A signature night-time crossing recognized as a hallmark of Dubai civic design and maritime safety.',
    luminaireSelection: ['Custom Handrail Extrusion IP66', 'LumeBeam F258 Marine Coated', 'Navigational Safeguards']
  },
  {
    id: 'saadiyat-promenade',
    number: '08',
    title: 'Saadiyat Cultural Promenade',
    category: 'Commercial',
    location: 'Saadiyat Island, Abu Dhabi, UAE',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [],
    scope: 'Urban Masterplan Public Realm Lighting, Custom Architectural Columns',
    projectType: 'Cultural District Public Realm',
    lightingApplications: ['Pedestrian Plaza Poles', 'Shaded Canopy Inground Uplighting', 'Cafe Terrace Mood Lighting'],
    challenge: 'Coordinate lighting aesthetics adjacent to world-renowned museums, demanding an elevated, timeless architectural language without bulky poles.',
    solution: 'Designed slender 6-meter architectural columns with multiple independently aimable micro-projector modules concealed within the shaft.',
    result: 'Harmonious public illumination that complements the world-class cultural institutions flanking the boulevard.',
    luminaireSelection: ['LumeSTL X Pedestrian Variant', 'Inground Tiltable 316L Uplights', 'Concealed Step Accents']
  }
];

export const SOLUTIONS_SERVICES: SolutionService[] = [
  {
    id: 'consultancy',
    number: '01',
    title: 'Lighting Consultancy',
    shortDesc: 'Strategic advisory, feasibility studies, and regulatory compliance.',
    fullDesc: 'We partner with developers, lead consultants, and government entities from project inception. We formulate comprehensive lighting masterplans, energy benchmark assessments, and aesthetic vision documents tailored to the GCC regulatory landscape.',
    deliverables: ['Lighting Masterplanning', 'Feasibility & ROI Studies', 'Regulatory Compliance (Estidama / Al Sa\'fat)', 'Dark-Sky Environmental Audits'],
    specs: 'Aligns with UAE Ministry of Energy, Dubai Municipality, and ADQ standards.'
  },
  {
    id: 'design',
    number: '02',
    title: 'Lighting Design & Calculations',
    shortDesc: 'Concept development, 3D visualizations, and photometric calculations.',
    fullDesc: 'Translating architectural concepts into luminous reality. Our certified lighting designers utilize advanced software (DIALux EVO, Relux, AGI32) to model exact lux levels, uniformity ratios, and UGR glare indices before a single fixture is ordered.',
    deliverables: ['Photometric DIALux EVO Reports', '3D Photorealistic Night Renders', 'Luminaire Schedule & Specifications', 'Detailed CAD / BIM Revit Models'],
    specs: 'Precision calculations matching CIE 115, CIBSE LG, and IESNA guides.'
  },
  {
    id: 'specification',
    number: '03',
    title: 'Product Specification',
    shortDesc: 'Curated fixture selection matching budget, aesthetics, and thermal longevity.',
    fullDesc: 'With thousands of engineered fixtures in the LUMELEX portfolio and premier European/global technology partners, we select luminaires engineered specifically for Middle Eastern environmental extremes—high heat, dust ingress, and UV radiation.',
    deliverables: ['Detailed Cut-Sheets & Data Files', 'IES / LDT Photometric Photometry', 'Sample Mockups & Bench Testing', 'Value Engineering Options'],
    specs: 'Tested up to 55°C ambient with IP66/IP67/IP68 and IK08-IK10 ratings.'
  },
  {
    id: 'procurement',
    number: '04',
    title: 'Supply & Procurement',
    shortDesc: 'Rigorous manufacturing quality control, logistics, and milestone delivery.',
    fullDesc: 'From factory floor to on-site delivery in Dubai, Abu Dhabi, or across the GCC, LUMELEX oversees every step of manufacturing, factory acceptance testing (FAT), and air/sea freight logistics with complete project traceability.',
    deliverables: ['Milestone Delivery Scheduling', 'Factory Acceptance Test (FAT) Reports', 'Batch Color Consistency Guarantee (MacAdam ≤ 2)', 'Custom Finishes (RAL / Anodized)'],
    specs: 'Direct supply chain with 5 to 10 year manufacturer-backed project warranties.'
  },
  {
    id: 'installation',
    number: '05',
    title: 'Expert Installation',
    shortDesc: 'Certified site supervision and specialized technical installation.',
    fullDesc: 'Our engineering teams provide dedicated on-site technical supervision, ensuring that cable runs, driver remote enclosures, IP junction sealing, and mechanical fixings comply strictly with specification drawings and safety standards.',
    deliverables: ['Site Supervision & Quality Audits', 'Mounting Bracket Engineering', 'Driver & Enclosure Management', 'Cabling & IP Sealing Certification'],
    specs: 'Compliant with DEWA, ADDC, and civil defense electrical regulations.'
  },
  {
    id: 'commissioning',
    number: '06',
    title: 'Testing & Commissioning',
    shortDesc: 'Final aiming, optical adjustment, DMX/DALI scene programming, and handover.',
    fullDesc: 'A lighting scheme only succeeds when every angle is focused with artistic precision. Our commissioning engineers aim optics, adjust glare honeycombs, program dynamic control sequences, and conduct on-site lux verification before official client handover.',
    deliverables: ['On-Site Lux Verification Testing', 'DMX / DALI Scene Architecture', 'As-Built Documentation & Manuals', 'Client Maintenance Training'],
    specs: 'Calibrated Minolta lux meters and calibrated spectral colorimeters.'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Resorts, 5-star hotels, luxury spas, and fine dining where atmospheric lighting drives guest loyalty and tranquility.',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'Jumeirah Bay, Palm Jumeirah luxury hotels'
  },
  {
    id: 'residential',
    name: 'Residential',
    description: 'Bespoke private estates, luxury penthouses, and signature villas seeking timeless, glare-free architectural elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'Emirates Hills, Dubai Hills mansions'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Grade-A corporate headquarters, mixed-use towers, and executive atriums built for focus, well-being, and brand prestige.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'DIFC, Business Bay commercial towers'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'High-bay logistics centers, aviation maintenance facilities, and pharma cleanrooms demanding high efficiency and reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'JAFZA logistics parks, Dubai South warehouses'
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'International stadiums, racing circuits, and athletic arenas meeting FIFA 4K broadcast and Olympic glare cutoff criteria.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'UAE national sports facilities & equestrian clubs'
  },
  {
    id: 'landscape',
    name: 'Landscape',
    description: 'Public parks, botanical gardens, and desert oasis pathways creating layered nocturnal journeys with subtle nature reverence.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'Al Barari, Saadiyat cultural public realms'
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'High-jewelry boutiques, flagship fashion houses, and luxury automotive showrooms where color rendering defines desire.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'Dubai Mall luxury avenues, Galleria Abu Dhabi'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'Iconic bridges, smart expressways, maritime canal crossings, and airport terminals demanding 24/7 continuous performance.',
    imageUrl: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    keyProjects: 'Dubai Canal, UAE federal highway networks'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'DISCOVER',
    headline: 'Understand the space, requirements and vision.',
    description: 'Detailed analysis of architectural plans, interior geometry, daylight studies, and operational objectives in close collaboration with the project stakeholders.'
  },
  {
    number: '02',
    name: 'DESIGN',
    headline: 'Develop the lighting concept and technical solution.',
    description: 'Photometric modeling, lux calculations, optical beam simulations, and aesthetic concepts engineered to elevate the architectural form.'
  },
  {
    number: '03',
    name: 'SPECIFY',
    headline: 'Select products according to performance and application.',
    description: 'Rigorous selection of luminaires, drivers, optics, and smart control protocols engineered for thermal endurance and energy efficiency.'
  },
  {
    number: '04',
    name: 'SUPPLY',
    headline: 'Coordinate sourcing and project delivery.',
    description: 'Precise manufacturing oversight, quality control testing, and synchronized logistics to meet construction phase milestones.'
  },
  {
    number: '05',
    name: 'INSTALL',
    headline: 'Professional implementation on site.',
    description: 'Specialized site supervision, mounting guidance, thermal verification, and rigorous electrical safety checks.'
  },
  {
    number: '06',
    name: 'COMMISSION',
    headline: 'Test, fine-tune and hand over.',
    description: 'Artistic optical aiming, DALI/DMX scene programming, lux level verification audits, and comprehensive handover documentation.'
  }
];
