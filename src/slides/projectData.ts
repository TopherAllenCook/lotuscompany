export interface TeamMember {
  name: string;
  title: string;
}

export interface UnitTier {
  ami: string;
  units: number;
  type: string;
}

export interface LotusWayPillar {
  label: string;
  heading: string;
  body: string;
  img: string;
}

export interface ProjectConfig {
  key: string;
  name: string;
  location: string;
  phase: string;
  units: number;
  irr: string;
  multiple: string;
  capital: string;
  cashFee: string;
  totalReturns: string;
  speOwnership: string;
  slideNumStart: number;
  sectionLabel: string;
  images: { hero: string; secondary: string; tertiary: string };
  team: [TeamMember, TeamMember];
  unitMix: UnitTier[];
  lotusWayPillars: LotusWayPillar[];
}

const STEELTON_IMGS = {
  hero:      "/steelton-village/Steelton I_4-corners_2026.03.26.jpg",
  secondary: "/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg",
  tertiary:  "/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg",
};

export const STEELTON: ProjectConfig = {
  key: "steelton",
  name: "steelton village",
  location: "dayton, ohio",
  phase: "phase i",
  units: 279,
  irr: "17.78%",
  multiple: "2.17x",
  capital: "$3,250,000",
  cashFee: "$291,053",
  totalReturns: "$7,049,874",
  speOwnership: "6.0%",
  slideNumStart: 20,
  sectionLabel: "steelton village",
  images: STEELTON_IMGS,
  team: [
    { name: "christian graf",  title: "senior development associate" },
    { name: "angie clarke",    title: "development analyst"          },
  ],
  unitMix: [
    { ami: "30% ami", units: 28,  type: "studio / 1br" },
    { ami: "50% ami", units: 84,  type: "1br / 2br"    },
    { ami: "60% ami", units: 139, type: "1br / 2br / 3br" },
    { ami: "80% ami", units: 28,  type: "2br / 3br"    },
  ],
  lotusWayPillars: [
    {
      label: "shelter and dignity",
      heading: "housing as a foundation",
      body: "steelton village provides 279 homes at rents families can sustain — anchoring stability across the full income spectrum from 30 to 80 percent ami.",
      img: "/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg",
    },
    {
      label: "place and beauty",
      heading: "design that earns respect",
      body: "six acres of public green space, a pedestrian promenade, and a full clubhouse signal that affordable housing can be the highest-quality building on the block.",
      img: "/steelton-village/Steelton I_North Park_2026.03.10.jpg",
    },
    {
      label: "knowledge and power",
      heading: "services built in, not bolted on",
      body: "on-site resident services — financial literacy, workforce partnerships, and health referrals — are embedded in the operating model from day one.",
      img: "/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg",
    },
  ],
};

export const FORGE: ProjectConfig = {
  key: "forge",
  name: "forge",
  location: "dayton, ohio",
  phase: "phase i",
  units: 193,
  irr: "17.52%",
  multiple: "2.32x",
  capital: "$2,250,000",
  cashFee: "$182,568",
  totalReturns: "$5,209,092",
  speOwnership: "—",
  slideNumStart: 27,
  sectionLabel: "forge",
  images: {
    hero:      "/steelton-village/Steelton I_4-corners_2026.03.26.jpg",
    secondary: "/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg",
    tertiary:  "/steelton-village/Steelton I_Water Detention_2026.03.26.jpg",
  },
  team: [
    { name: "christian graf", title: "senior development associate" },
    { name: "angie clarke",   title: "development analyst"          },
  ],
  unitMix: [
    { ami: "30% ami", units: 20,  type: "studio / 1br"    },
    { ami: "50% ami", units: 58,  type: "1br / 2br"       },
    { ami: "60% ami", units: 96,  type: "1br / 2br / 3br" },
    { ami: "80% ami", units: 19,  type: "2br / 3br"       },
  ],
  lotusWayPillars: [
    {
      label: "shelter and dignity",
      heading: "two buildings, one mission",
      body: "forge delivers 193 homes across two interconnected buildings, expanding affordable supply in a neighborhood shaped by generations of disinvestment.",
      img: "/steelton-village/Steelton I_4-corners_2026.03.26.jpg",
    },
    {
      label: "place and beauty",
      heading: "industrial heritage, renewed",
      body: "the forge design draws on the site's manufacturing history — brick, steel, and honest material choices that honor the neighborhood's working-class identity.",
      img: "/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg",
    },
    {
      label: "knowledge and power",
      heading: "resident programs from opening day",
      body: "service partners are identified pre-construction. residents move into a building with active programming, not a building waiting to add it later.",
      img: "/steelton-village/Steelton I_Water Detention_2026.03.26.jpg",
    },
  ],
};

export const UPARKWAY: ProjectConfig = {
  key: "uparkway",
  name: "university parkway",
  location: "dayton, ohio",
  phase: "phase i",
  units: 210,
  irr: "13.54%",
  multiple: "3.06x",
  capital: "$1,051,756",
  cashFee: "$739,527",
  totalReturns: "$13,783,993",
  speOwnership: "20%",
  slideNumStart: 34,
  sectionLabel: "university parkway",
  images: {
    hero:      "/steelton-village/Steelton I_North Park_2026.03.10.jpg",
    secondary: "/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg",
    tertiary:  "/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg",
  },
  team: [
    { name: "andrea palmer", title: "development associate" },
    { name: "emma brooks",   title: "development analyst"   },
  ],
  unitMix: [
    { ami: "30% ami", units: 21,  type: "1br"           },
    { ami: "50% ami", units: 63,  type: "1br / 2br"     },
    { ami: "60% ami", units: 105, type: "1br / 2br / 3br" },
    { ami: "80% ami", units: 21,  type: "2br / 3br"     },
  ],
  lotusWayPillars: [
    {
      label: "shelter and dignity",
      heading: "proximity to opportunity",
      body: "university parkway places 210 households within walking distance of dayton's university corridor — transit, healthcare, and employment in a single neighborhood.",
      img: "/steelton-village/Steelton I_North Park_2026.03.10.jpg",
    },
    {
      label: "place and beauty",
      heading: "campus-adjacent quality",
      body: "the design reflects the institutional character of the university district — landscaped setbacks, quality materials, and common spaces that invite community use.",
      img: "/steelton-village/Steelton I_Clubhouse_2026.03.10.jpg",
    },
    {
      label: "knowledge and power",
      heading: "education and workforce pipeline",
      body: "university partners provide residents with workforce training pathways, tutoring support, and continuing education access embedded in the resident services model.",
      img: "/steelton-village/Steelton I_Unit Rendering_2026.03.10.jpg",
    },
  ],
};

export const LOTUS_VALE: ProjectConfig = {
  key: "lotus-vale",
  name: "lotus vale",
  location: "dayton, ohio",
  phase: "phase i",
  units: 106,
  irr: "17.65%",
  multiple: "2.0x",
  capital: "$854,842",
  cashFee: "$84,608",
  totalReturns: "$772,917",
  speOwnership: "—",
  slideNumStart: 41,
  sectionLabel: "lotus vale",
  images: {
    hero:      "/steelton-village/Steelton I_Water Detention_2026.03.26.jpg",
    secondary: "/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg",
    tertiary:  "/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg",
  },
  team: [
    { name: "andrea palmer", title: "development associate" },
    { name: "angie clarke",  title: "development analyst"   },
  ],
  unitMix: [
    { ami: "30% ami", units: 11, type: "1br"           },
    { ami: "50% ami", units: 32, type: "1br / 2br"     },
    { ami: "60% ami", units: 53, type: "1br / 2br"     },
    { ami: "80% ami", units: 10, type: "2br"           },
  ],
  lotusWayPillars: [
    {
      label: "shelter and dignity",
      heading: "smaller scale, same standard",
      body: "lotus vale delivers 106 homes at the same design and service standard as lotus's larger projects — proving that the lotus model is not scale-dependent.",
      img: "/steelton-village/Steelton I_Water Detention_2026.03.26.jpg",
    },
    {
      label: "place and beauty",
      heading: "neighborhood-scaled design",
      body: "at 106 units, lotus vale integrates into its residential context without displacing the scale and character of the surrounding neighborhood.",
      img: "/steelton-village/Steelton I_Pedestrian Promenade_2026.03.10.jpg",
    },
    {
      label: "knowledge and power",
      heading: "concentrated resident support",
      body: "a focused service model — fewer units, higher touchpoint frequency — allows lotus vale to pilot intensive resident programs that inform platform-wide practice.",
      img: "/steelton-village/Steelton I_Updated Lobby_2026.04.02.jpg",
    },
  ],
};
