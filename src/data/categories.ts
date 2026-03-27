export interface CategoryData {
  slug: string;
  name: string;
  parent: string;
  description: string;
  signals: string[];
  whyEarly: string;
}

export const categories: CategoryData[] = [
  // Commercial
  {
    slug: "commercial",
    name: "Commercial",
    parent: "Commercial",
    description: "Commercial construction encompasses office buildings, retail centers, restaurants, hotels, and mixed-use developments designed for business operations. These projects range from single-tenant buildouts to multi-story complexes and typically involve significant planning, permitting, and stakeholder coordination before ground breaks.",
    signals: [
      "Commercial land acquisitions and title transfers",
      "Rezoning applications from residential to commercial use",
      "Site plan submissions and architectural filings",
      "Building permit applications for new commercial structures",
      "Tenant improvement permits indicating space reconfiguration",
      "Environmental impact assessments and traffic studies"
    ],
    whyEarly: "Commercial projects involve long planning cycles with multiple decision-makers. The window between land acquisition and contractor selection can span 12 to 24 months. Contractors and subcontractors who identify these projects at the land sale or rezoning stage can build relationships with developers and architects before the project ever hits a bid board."
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    parent: "Commercial",
    description: "Healthcare construction includes hospitals, medical office buildings, outpatient clinics, ambulatory surgery centers, urgent care facilities, rehabilitation centers, and specialized treatment facilities. These projects demand strict regulatory compliance, infection control considerations, and specialized MEP systems that set them apart from general commercial work.",
    signals: [
      "Certificate of Need (CON) applications filed with state health departments",
      "Medical facility rezoning and land use applications",
      "Healthcare system capital expenditure announcements",
      "Architectural submissions for medical-grade facilities",
      "Permit applications referencing healthcare or medical use",
      "Property acquisitions by hospital networks and health systems"
    ],
    whyEarly: "Healthcare projects have the longest pre-construction cycles in commercial work, often 18 to 36 months from planning to groundbreaking. Regulatory approvals, specialized design requirements, and multi-phase funding create extended timelines. Getting in early means positioning your firm as the go-to contractor before the owner even starts formal procurement."
  },
  {
    slug: "retail",
    name: "Retail",
    parent: "Commercial",
    description: "Retail construction covers shopping centers, standalone stores, restaurant buildouts, grocery stores, convenience stores, automotive dealerships, and entertainment venues. These projects are driven by consumer demand patterns, population growth, and retailer expansion strategies.",
    signals: [
      "Retail site plan submissions and conditional use permits",
      "Land acquisitions by national and regional retail developers",
      "Demolition permits for existing retail structures (indicating redevelopment)",
      "Tenant improvement permits in retail corridors",
      "Parking and traffic studies for new retail developments",
      "Fast-track permitting applications for restaurant and food service buildouts"
    ],
    whyEarly: "Retail construction moves fast once approved. National chains often work with preferred contractor lists, but regional and local retail developers are open to competitive bids. Identifying a retail project at the land acquisition stage gives you a 6 to 12 month head start on relationship-building with the developer and their design team."
  },
  {
    slug: "institutional",
    name: "Institutional",
    parent: "Commercial",
    description: "Institutional construction includes schools, universities, government buildings, courthouses, libraries, community centers, fire stations, police facilities, and religious buildings. These projects serve the public interest and typically involve public funding, bond measures, or institutional endowments.",
    signals: [
      "Bond measure approvals and capital improvement plans",
      "School district facility master plan updates",
      "Government RFQ and RFP postings for design services",
      "Land acquisitions by school districts, cities, and counties",
      "Architectural competition announcements",
      "Environmental and historical preservation reviews"
    ],
    whyEarly: "Institutional projects are publicly funded with transparent timelines, but the earliest signals appear years before formal procurement. Tracking bond measures, facility assessments, and master plan updates gives contractors the intelligence to position for these projects before the competition even knows they exist."
  },
  {
    slug: "office-buildings",
    name: "Office Buildings",
    parent: "Commercial",
    description: "Office building construction includes Class A, B, and C office towers, corporate campuses, coworking spaces, and professional service centers. The sector is evolving rapidly with hybrid work models driving demand for flexible, amenity-rich spaces and ground-up developments in suburban markets.",
    signals: [
      "Land acquisitions in central business districts and suburban office corridors",
      "Rezoning applications for office or mixed-use development",
      "Building permit applications for new office construction",
      "Renovation permits indicating major office repositioning",
      "Corporate campus expansion announcements",
      "Lease expiration clustering that signals redevelopment potential"
    ],
    whyEarly: "Office development decisions are made 18 to 24 months before construction starts. Developers and corporate occupiers begin site selection, design, and permitting long before they need a contractor. Early identification lets you engage during the design phase when project scope and contractor relationships are still being defined."
  },
  {
    slug: "tenant-improvements",
    name: "Tenant Improvements",
    parent: "Commercial",
    description: "Tenant improvement (TI) construction involves the interior buildout and renovation of leased commercial spaces. This includes office fit-outs, retail store buildouts, restaurant kitchen installations, medical suite configurations, and adaptive reuse projects. TI work is the bread and butter of many commercial contractors.",
    signals: [
      "Commercial lease transactions in target buildings",
      "Building permit applications for interior alterations",
      "Change of use permits indicating new tenant types",
      "Architectural submissions for interior reconfigurations",
      "Fire alarm and sprinkler modification permits",
      "ADA compliance upgrade permits"
    ],
    whyEarly: "Tenant improvements operate on compressed timelines once a lease is signed. The typical window from lease execution to construction start is 8 to 16 weeks. Contractors who know about a lease transaction before the tenant engages a buildout contractor have a significant competitive advantage in winning the work."
  },
  // Industrial
  {
    slug: "industrial",
    name: "Industrial",
    parent: "Industrial",
    description: "Industrial construction covers manufacturing plants, distribution centers, logistics hubs, processing facilities, and heavy industrial infrastructure. These projects are capital-intensive, driven by supply chain optimization, reshoring trends, and infrastructure investment.",
    signals: [
      "Industrial land acquisitions and option agreements",
      "Rezoning applications from agricultural or residential to industrial",
      "Environmental impact assessments for industrial use",
      "Rail spur and heavy infrastructure permit applications",
      "Utility capacity expansion requests from industrial developers",
      "State and local economic development incentive agreements"
    ],
    whyEarly: "Industrial projects have long entitlement and permitting cycles, often 12 to 18 months. The stakes are high as these are large-dollar projects with significant site work, structural steel, and MEP components. Early intelligence on land acquisitions and incentive deals gives contractors time to build relationships with developers and end users before the project goes to formal bid."
  },
  {
    slug: "data-centers",
    name: "Data Centers",
    parent: "Industrial",
    description: "Data center construction includes hyperscale facilities, colocation centers, edge computing installations, and enterprise server farms. This is one of the fastest-growing construction sectors, driven by cloud computing, AI workloads, and digital infrastructure demand. Data centers require specialized electrical, cooling, and structural systems.",
    signals: [
      "Large-scale land acquisitions near power substations and fiber corridors",
      "Utility interconnection applications for high-capacity power",
      "Rezoning applications with data center or technology campus designations",
      "Building permits referencing mission-critical or technology infrastructure",
      "Water rights applications for cooling systems",
      "Fiber optic conduit and telecommunications infrastructure permits"
    ],
    whyEarly: "Data center projects are massive, often $500M to $2B+, with 24 to 36 month construction timelines. The earliest signals are land acquisitions near power infrastructure and utility interconnection requests. Contractors who spot these signals first can position for the mechanical, electrical, and structural packages that make up the bulk of data center construction spend."
  },
  {
    slug: "light-industrial",
    name: "Light Industrial",
    parent: "Industrial",
    description: "Light industrial construction includes flex spaces, small warehouses, workshop facilities, maker spaces, self-storage, and light manufacturing buildings. These projects serve small to mid-size businesses and are often developed speculatively in industrial parks and suburban corridors.",
    signals: [
      "Land acquisitions in industrial parks and business corridors",
      "Site plan submissions for multi-unit flex and industrial buildings",
      "Building permits for warehouse and flex space construction",
      "Conditional use permits for light manufacturing",
      "Utility service requests for new industrial addresses",
      "Speculative development announcements by industrial REIT operators"
    ],
    whyEarly: "Light industrial projects move quickly from permitting to construction, often 6 to 12 months. They are frequently developed speculatively, meaning the contractor relationship is decided early in the planning process. Catching a land acquisition or site plan filing gives you the lead time to pitch the developer before they lock in their builder."
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    parent: "Industrial",
    description: "Warehousing and distribution center construction includes last-mile delivery hubs, cold storage facilities, fulfillment centers, and bulk distribution warehouses. E-commerce growth and supply chain reconfiguration continue to drive massive demand for new warehouse space across the country.",
    signals: [
      "Large parcel acquisitions along highway corridors and intermodal hubs",
      "Grading and site preparation permits for large footprint buildings",
      "Environmental clearances for wetlands mitigation and stormwater management",
      "Building permits for structures over 100,000 square feet",
      "Traffic impact studies for high-volume distribution facilities",
      "Cold storage and refrigeration system permits"
    ],
    whyEarly: "Warehousing projects are high-volume, competitive, and fast-moving. Major logistics developers often work with a short list of preferred contractors. Identifying a warehouse project at the land acquisition or grading permit stage gives you 6 to 12 months to build a relationship and demonstrate your capability before the developer finalizes their contractor selection."
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    parent: "Industrial",
    description: "Manufacturing construction includes automotive plants, semiconductor fabrication facilities, food processing plants, pharmaceutical manufacturing, aerospace facilities, and advanced manufacturing centers. These projects are driven by reshoring trends, federal incentives (CHIPS Act, IRA), and supply chain resilience strategies.",
    signals: [
      "Economic development incentive packages for manufacturing recruitment",
      "Large-scale industrial land acquisitions with specialized utility requirements",
      "Environmental permits for manufacturing emissions and waste handling",
      "Building permits referencing production, fabrication, or manufacturing use",
      "Rail and heavy transport infrastructure improvements",
      "State workforce development agreements tied to new facility construction"
    ],
    whyEarly: "Manufacturing projects are some of the largest and most complex in construction. A single semiconductor fab can cost $10B+. These projects have 2 to 4 year pre-construction cycles with multiple phases. Early signals like incentive announcements and land acquisitions give contractors years of lead time to position for major packages."
  },
  {
    slug: "treatment-plants",
    name: "Treatment Plants",
    parent: "Industrial",
    description: "Treatment plant construction includes water treatment facilities, wastewater treatment plants, desalination systems, water reclamation centers, and industrial process water systems. These projects are infrastructure-critical, often publicly funded, and require specialized environmental and civil engineering expertise.",
    signals: [
      "Municipal capital improvement plans including water infrastructure",
      "EPA and state environmental compliance orders",
      "Consent decree deadlines requiring facility upgrades",
      "Design-build RFQ postings from water utilities",
      "Land acquisitions by water districts and utilities",
      "Environmental impact reports for water treatment expansions"
    ],
    whyEarly: "Treatment plant projects are planned years in advance through municipal capital improvement programs and federal infrastructure funding. Early tracking of CIP budgets, consent decrees, and design RFQs gives contractors the lead time to form joint ventures, secure bonding, and position for these specialized, high-value projects."
  },
  // Multi-family
  {
    slug: "multi-family",
    name: "Multi-Family",
    parent: "Multi-Family",
    description: "Multi-family construction includes apartment complexes, condominiums, townhome communities, senior living facilities, student housing, and affordable housing developments. This sector is driven by housing demand, demographic shifts, and urban densification trends.",
    signals: [
      "Multi-family land acquisitions in growth corridors",
      "Rezoning applications from single-family or commercial to multi-family",
      "Density bonus and affordable housing entitlement applications",
      "Site plan submissions for residential developments over 10 units",
      "Building permits for multi-family residential structures",
      "Tax credit allocations (LIHTC) and HUD financing approvals"
    ],
    whyEarly: "Multi-family development has a 12 to 24 month pre-construction pipeline. Land acquisition, entitlement, and financing all happen before construction starts. Contractors who identify projects at the rezoning or land sale stage can build relationships with developers during design and financing, well before the project goes to bid."
  },
  {
    slug: "mixed-use",
    name: "Mixed Use",
    parent: "Multi-Family",
    description: "Mixed-use construction combines residential, commercial, retail, and sometimes hospitality components in a single development. These projects are increasingly common in urban and suburban settings as cities encourage walkable, transit-oriented development with diverse uses.",
    signals: [
      "Planned unit development (PUD) applications",
      "Mixed-use rezoning and overlay district applications",
      "Transit-oriented development incentive applications",
      "Large-scale site plan submissions with multiple building types",
      "Tax increment financing (TIF) district designations",
      "Public-private partnership announcements for mixed-use developments"
    ],
    whyEarly: "Mixed-use projects are among the most complex to plan, finance, and build. The entitlement process alone can take 12 to 24 months. Multiple stakeholders, phased construction, and diverse building systems create opportunities for contractors across specialties. Early tracking gives you time to position for the phase and scope that matches your capabilities."
  },
  {
    slug: "high-rise",
    name: "High-Rise",
    parent: "Multi-Family",
    description: "High-rise construction includes residential towers, luxury condominiums, and tall mixed-use buildings typically exceeding 7 stories. These projects demand specialized structural engineering, curtain wall systems, vertical transportation, and complex logistics for urban construction sites.",
    signals: [
      "High-rise development applications and height variance requests",
      "Deep foundation and pile driving permits",
      "Tower crane permits and vertical construction notifications",
      "FAA height obstruction evaluations",
      "Wind study and structural peer review submissions",
      "Luxury condominium pre-sale announcements and marketing launches"
    ],
    whyEarly: "High-rise projects have the longest lead times in residential construction, often 2 to 4 years from concept to completion. The structural and MEP packages are committed early in the process. Contractors who identify high-rise projects at the development application stage can engage with the development team during schematic design when key contractor relationships are formed."
  },
  {
    slug: "mid-rise",
    name: "Mid-Rise",
    parent: "Multi-Family",
    description: "Mid-rise construction includes residential buildings of 4 to 7 stories, often using wood-frame-over-podium or steel construction. Mid-rise is the dominant apartment construction type in growing suburban and urban markets, offering density without the cost and complexity of high-rise development.",
    signals: [
      "Multi-family site plan submissions for 4 to 7 story buildings",
      "Wood-frame and podium construction building permits",
      "Density bonus applications in transit corridors",
      "Affordable housing tax credit allocations (4% and 9% LIHTC)",
      "Multifamily land acquisitions near transit and employment centers",
      "Parking structure permits associated with residential developments"
    ],
    whyEarly: "Mid-rise projects move faster than high-rise but still have 12 to 18 month pre-construction cycles. These are volume plays for contractors as developers often build multiple mid-rise projects simultaneously. Identifying a developer's land acquisitions across a market lets you position for a portfolio relationship, not just a single project."
  },
  {
    slug: "low-rise",
    name: "Low-Rise",
    parent: "Multi-Family",
    description: "Low-rise construction includes garden-style apartments, townhome communities, duplexes, triplexes, and small multi-family buildings of 1 to 3 stories. Low-rise residential is the most common multi-family building type and represents a high volume of opportunities across virtually every market.",
    signals: [
      "Multi-family building permits for 1 to 3 story structures",
      "Subdivision plat filings for townhome and duplex communities",
      "Rezoning from single-family to multi-family in suburban markets",
      "Affordable housing development applications",
      "Site grading and utility permits for residential communities",
      "Construction financing closings for garden-style apartment projects"
    ],
    whyEarly: "Low-rise projects have shorter timelines but higher volume. A single developer may have 5 to 10 projects in a pipeline. Tracking land acquisitions and permit filings across a metro area reveals developer activity patterns. Contractors who connect with active developers early can secure ongoing work rather than competing project by project."
  }
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categories.find(c => c.slug === slug);
}

export function getCategoriesByParent(parent: string): CategoryData[] {
  return categories.filter(c => c.parent === parent);
}

export const categoryGroups = [
  { name: "Commercial", categories: categories.filter(c => c.parent === "Commercial") },
  { name: "Industrial", categories: categories.filter(c => c.parent === "Industrial") },
  { name: "Multi-Family", categories: categories.filter(c => c.parent === "Multi-Family") },
];
