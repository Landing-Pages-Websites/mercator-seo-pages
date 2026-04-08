export interface CategoryData {
  slug: string;
  name: string;
  parent: string;
  description: string;
  descriptionExtended: string;
  signals: string[];
  whyEarly: string;
  traditionalProblem: string;
  pipelineSteps: string[];
}

export const categories: CategoryData[] = [
  // Commercial
  {
    slug: "commercial",
    name: "Commercial",
    parent: "Commercial",
    description: "Commercial construction encompasses office buildings, retail centers, restaurants, hotels, and mixed-use developments designed for business operations. These projects range from single-tenant buildouts to multi-story complexes and typically involve significant planning, permitting, and stakeholder coordination before ground breaks.",
    descriptionExtended: "Unlike public infrastructure projects, commercial construction is privately funded and privately awarded. There is no central database of upcoming commercial work. Projects move through a fragmented pipeline of land deals, entitlements, design, and permitting, and the contractors who learn about them earliest have the best chance of winning the work. Mercator.ai consolidates these fragmented signals into a single, searchable platform that tracks commercial construction activity from concept through construction start.",
    signals: [
      "Commercial land acquisitions and title transfers",
      "Rezoning applications from residential to commercial use",
      "Site plan submissions and architectural filings",
      "Building permit applications for new commercial structures",
      "Tenant improvement permits indicating space reconfiguration",
      "Environmental impact assessments and traffic studies"
    ],
    whyEarly: "Commercial projects involve long planning cycles with multiple decision-makers. The window between land acquisition and contractor selection can span 12 to 24 months. Contractors and subcontractors who identify these projects at the land sale or rezoning stage can build relationships with developers and architects before the project ever hits a bid board. By the time a commercial project is publicly visible, the general contractor and key subcontractors are often already selected. Mercator.ai ensures you are part of the conversation from the start.",
    traditionalProblem: "Most commercial contractors rely on bid boards, word of mouth, and plan rooms to find work. These sources only reveal projects after the owner has already selected an architect, developed construction documents, and begun soliciting bids. At that point, the project has been in planning for 12 to 24 months, and the relationships that determine who wins the work have already been formed. Mercator.ai gives contractors visibility into the earliest stages of commercial development, when a land sale or rezoning signals that a project is coming, months or even years before it appears on traditional sources.",
    pipelineSteps: [
      "Land acquisition or option agreement signals a developer's intent to build a commercial project",
      "Rezoning and entitlement applications confirm the project type, density, and timeline",
      "Architectural and engineering submissions reveal project scope, design team, and budget range",
      "Building permit filings provide detailed project specifications and the final green light for construction",
      "Mercator.ai delivers real-time alerts at each stage so you can engage stakeholders at the optimal moment"
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    parent: "Commercial",
    description: "Healthcare construction includes hospitals, medical office buildings, outpatient clinics, ambulatory surgery centers, urgent care facilities, rehabilitation centers, and specialized treatment facilities. These projects demand strict regulatory compliance, infection control considerations, and specialized MEP systems that set them apart from general commercial work.",
    descriptionExtended: "The healthcare construction market is driven by aging populations, outpatient care trends, and regulatory mandates for facility modernization. Projects must comply with ASIS, FGI Guidelines, and state health department requirements that add layers of complexity to design and construction. Healthcare owners prioritize contractors with proven healthcare experience, making early relationship-building critical. Mercator.ai helps contractors identify healthcare projects at the Certificate of Need stage, giving them the lead time to demonstrate their qualifications and build trust with hospital networks and health system decision-makers.",
    signals: [
      "Certificate of Need (CON) applications filed with state health departments",
      "Medical facility rezoning and land use applications",
      "Healthcare system capital expenditure announcements",
      "Architectural submissions for medical-grade facilities",
      "Permit applications referencing healthcare or medical use",
      "Property acquisitions by hospital networks and health systems"
    ],
    whyEarly: "Healthcare projects have the longest pre-construction cycles in commercial work, often 18 to 36 months from planning to groundbreaking. Regulatory approvals, specialized design requirements, and multi-phase funding create extended timelines. Getting in early means positioning your firm as the go-to contractor before the owner even starts formal procurement. Healthcare owners value long-term relationships and repeat contractors, so establishing trust during the planning phase often leads to ongoing work across multiple facilities and campuses.",
    traditionalProblem: "Healthcare construction leads are especially hard to find through traditional channels. Hospital systems and health networks plan projects internally for years before issuing public RFPs. By the time a healthcare project appears on a bid board, the owner has often already vetted and shortlisted contractors through a design-assist or construction manager at-risk process. Contractors who only monitor public bid boards miss the critical window when healthcare owners are forming their project teams. Mercator.ai surfaces CON filings, healthcare land acquisitions, and capital expenditure signals that reveal projects at their earliest stage.",
    pipelineSteps: [
      "Certificate of Need or capital budget approval signals that a healthcare system has committed funding to a new facility",
      "Land acquisition or site option confirms the project location and triggers early design and environmental work",
      "Regulatory submissions and architectural filings reveal facility type, bed count, and specialized systems requirements",
      "Building permit applications provide construction scope, timeline, and the names of design professionals on the project",
      "Mercator.ai alerts you at each milestone so you can engage the health system and design team before formal procurement begins"
    ]
  },
  {
    slug: "retail",
    name: "Retail",
    parent: "Commercial",
    description: "Retail construction covers shopping centers, standalone stores, restaurant buildouts, grocery stores, convenience stores, automotive dealerships, and entertainment venues. These projects are driven by consumer demand patterns, population growth, and retailer expansion strategies.",
    descriptionExtended: "Retail construction is highly responsive to market conditions, with projects accelerating or pausing based on consumer spending trends, demographic shifts, and real estate availability. National and regional retailers use sophisticated site selection processes that generate early signals, including land options, traffic studies, and zoning applications, well before construction begins. For local and regional contractors, identifying these projects early is critical because retail developers often select their general contractor during the design phase, not during a formal bid process.",
    signals: [
      "Retail site plan submissions and conditional use permits",
      "Land acquisitions by national and regional retail developers",
      "Demolition permits for existing retail structures (indicating redevelopment)",
      "Tenant improvement permits in retail corridors",
      "Parking and traffic studies for new retail developments",
      "Fast-track permitting applications for restaurant and food service buildouts"
    ],
    whyEarly: "Retail construction moves fast once approved. National chains often work with preferred contractor lists, but regional and local retail developers are open to competitive bids. Identifying a retail project at the land acquisition stage gives you a 6 to 12 month head start on relationship-building with the developer and their design team. Retail developers value contractors who understand their timelines, brand standards, and fast-track delivery expectations. Early engagement lets you demonstrate that understanding before the competition even knows the project exists.",
    traditionalProblem: "Retail construction leads are fragmented across local planning departments, commercial real estate listings, and industry publications. By the time a retail project is publicly announced, the developer has already engaged their architect, negotiated tenant leases, and often pre-selected a contractor. For multi-tenant retail centers, the general contractor is typically chosen before individual tenant buildout contractors are even considered. Mercator.ai aggregates land deals, site plans, and permit filings to reveal retail projects at the earliest development stage.",
    pipelineSteps: [
      "Land acquisition or option agreement by a retail developer or national tenant signals a new store, restaurant, or shopping center",
      "Traffic and parking studies confirm the viability and scope of the retail development",
      "Site plan and conditional use applications reveal building size, tenant mix, and design parameters",
      "Building permit filings provide construction specifications and the name of the design team",
      "Mercator.ai sends alerts at each stage so contractors can connect with the developer during design, not after bid documents are issued"
    ]
  },
  {
    slug: "institutional",
    name: "Institutional",
    parent: "Commercial",
    description: "Institutional construction includes schools, universities, government buildings, courthouses, libraries, community centers, fire stations, police facilities, and religious buildings. These projects serve the public interest and typically involve public funding, bond measures, or institutional endowments.",
    descriptionExtended: "Institutional projects are unique because they are often planned and funded through public processes, including bond elections, capital improvement programs, and legislative appropriations. While some institutional work is publicly bid, many larger projects use alternative delivery methods like construction manager at-risk, design-build, or guaranteed maximum price contracts that select the contractor during the design phase. Understanding which institutions have approved funding and which projects are moving through design gives contractors a critical head start on positioning for these opportunities.",
    signals: [
      "Bond measure approvals and capital improvement plans",
      "School district facility master plan updates",
      "Government RFQ and RFP postings for design services",
      "Land acquisitions by school districts, cities, and counties",
      "Architectural competition announcements",
      "Environmental and historical preservation reviews"
    ],
    whyEarly: "Institutional projects are publicly funded with transparent planning cycles but long timelines. A school bond measure approved in November may fund projects that do not break ground for 3 to 5 years. Tracking capital improvement programs, facility master plans, and bond measures gives contractors advance visibility into hundreds of millions of dollars in upcoming work. Contractors who engage with school districts, municipalities, and universities during the planning phase are better positioned when formal procurement begins.",
    traditionalProblem: "Institutional construction opportunities are scattered across hundreds of local government websites, school district portals, and public notice boards. Tracking bond measures, capital improvement programs, and design RFQs across multiple jurisdictions is a full-time job. Many contractors only learn about institutional projects when the formal RFP is issued, at which point the project has been in planning for years and incumbent firms have already built relationships with the institution. Mercator.ai consolidates these signals into one platform so you can track institutional pipeline activity across every jurisdiction in your market.",
    pipelineSteps: [
      "Bond measure approval or capital budget allocation commits public funding to a specific facility or campus improvement",
      "Facility master plan or needs assessment identifies the scope, location, and timeline for the project",
      "Design team selection through RFQ/RFP reveals the project is moving into active design and the key stakeholders involved",
      "Permit filings confirm the project scope, construction timeline, and regulatory approvals",
      "Mercator.ai tracks each signal and delivers alerts so contractors can position before formal contractor procurement"
    ]
  },
  {
    slug: "office-buildings",
    name: "Office Buildings",
    parent: "Commercial",
    description: "Office building construction includes corporate headquarters, multi-tenant office towers, professional office parks, co-working spaces, and government office facilities. This sector is influenced by corporate expansion plans, remote work trends, adaptive reuse of existing space, and suburban office development.",
    descriptionExtended: "The office market is evolving rapidly as companies recalibrate their space needs. While some markets see net absorption declines, others are experiencing new construction driven by corporate relocations, build-to-suit developments, and life science conversions. Office projects vary from ground-up Class A towers to full-building renovations and tenant-driven improvements. Understanding the difference between speculative and build-to-suit development is key to evaluating office construction leads, as each follows a different procurement path. Mercator.ai tracks both types and identifies the decision-makers involved at each stage.",
    signals: [
      "Corporate campus land acquisitions and build-to-suit announcements",
      "Office park site plan submissions and zoning applications",
      "Speculative office building permits in growth markets",
      "Major office renovation and repositioning permits",
      "Parking structure permits that accompany new office developments",
      "Telecommunications and data infrastructure permits for smart building systems"
    ],
    whyEarly: "Office development decisions are made 18 to 24 months before construction starts. Developers and corporate occupiers begin site selection, design, and permitting long before they need a contractor. Early identification lets you engage during the design phase when project scope and contractor relationships are still being defined. For speculative office projects, the developer often selects a general contractor before securing tenants. For build-to-suit projects, the corporate end user and their broker drive contractor selection. Mercator.ai identifies both pathways early.",
    traditionalProblem: "Office construction leads are difficult to track because they originate from diverse sources: corporate real estate decisions, developer speculation, institutional investor strategies, and adaptive reuse opportunities. Traditional bid boards focus on public work and rarely capture private office development. Commercial real estate publications report on projects after they are well into design. Mercator.ai detects office projects at the land deal stage, when a developer or corporation first signals their intent to build, giving contractors months of lead time over traditional information sources.",
    pipelineSteps: [
      "Land acquisition or build-to-suit agreement signals that a developer or corporate occupier has committed to a new office project",
      "Zoning and site plan applications reveal the building size, height, parking, and use parameters",
      "Architectural submissions identify the design team, building systems, and quality level of the project",
      "Building permit filings provide detailed construction documents and a clear timeline to groundbreaking",
      "Mercator.ai alerts at each milestone so you can build relationships with the developer and design team before contractor selection"
    ]
  },
  {
    slug: "tenant-improvements",
    name: "Tenant Improvements",
    parent: "Commercial",
    description: "Tenant improvement (TI) construction involves the interior buildout and renovation of leased commercial spaces. This includes office fit-outs, retail store buildouts, restaurant kitchen installations, medical suite configurations, and adaptive reuse projects. TI work is the bread and butter of many commercial contractors.",
    descriptionExtended: "Tenant improvement projects represent the highest volume of commercial construction work in most markets. Every new lease, lease renewal with renovation, and change of tenant generates TI construction activity. Unlike ground-up construction, TI work operates on compressed timelines and smaller budgets, but the aggregate value across a market is substantial. Contractors who can track lease activity and building permit filings for interior work have a steady pipeline of opportunities. Mercator.ai detects tenant improvement signals across entire metro areas, giving contractors a comprehensive view of active and upcoming TI work.",
    signals: [
      "Commercial lease transactions in target buildings",
      "Building permit applications for interior alterations",
      "Change of use permits indicating new tenant types",
      "Architectural submissions for interior reconfigurations",
      "Fire alarm and sprinkler modification permits",
      "ADA compliance upgrade permits"
    ],
    whyEarly: "Tenant improvements operate on compressed timelines once a lease is signed. The typical window from lease execution to construction start is 8 to 16 weeks. Contractors who know about a lease transaction before the tenant engages a buildout contractor have a significant competitive advantage in winning the work. Many tenants rely on their commercial real estate broker or property manager to recommend a contractor, so early engagement with these referral sources is equally valuable. Mercator.ai helps you identify TI opportunities at the lease stage, giving you weeks of lead time in a fast-moving market.",
    traditionalProblem: "Tenant improvement leads are the most fragmented in commercial construction. They originate from lease transactions tracked by commercial brokers but not publicly reported until permit filing. By the time a TI permit appears in the public record, the tenant has usually already engaged a contractor through their broker or property manager. Mercator.ai detects lease activity, interior permit filings, and change-of-use signals across entire markets, revealing TI opportunities that are invisible to traditional networks.",
    pipelineSteps: [
      "Lease transaction or lease renewal with a TI allowance signals that a tenant will be building out or renovating their space",
      "Architectural or space planning submissions confirm the scope and layout of the interior work",
      "Building permit filing for interior alterations provides construction details, timeline, and involved design professionals",
      "Fire, mechanical, and electrical sub-permits indicate the complexity and trade requirements of the buildout",
      "Mercator.ai surfaces these signals so contractors can engage the tenant, broker, or property manager before the work is awarded"
    ]
  },
  // Industrial
  {
    slug: "industrial",
    name: "Industrial",
    parent: "Industrial",
    description: "Industrial construction covers manufacturing plants, distribution centers, logistics hubs, processing facilities, and heavy industrial infrastructure. These projects are capital-intensive, driven by supply chain optimization, reshoring trends, and infrastructure investment.",
    descriptionExtended: "The industrial construction sector is experiencing a sustained boom driven by e-commerce growth, supply chain reshoring, and federal infrastructure investment. Projects range from speculative warehouse developments to purpose-built manufacturing facilities with specialized process systems. Industrial projects often involve complex site work including grading, utilities, rail access, and environmental remediation. The contractors and subcontractors who win this work are those who build relationships with industrial developers and end users during the site selection and entitlement phase, well before construction documents are complete.",
    signals: [
      "Industrial land acquisitions and option agreements",
      "Rezoning applications from agricultural or residential to industrial",
      "Environmental impact assessments for industrial use",
      "Rail spur and heavy infrastructure permit applications",
      "Utility capacity expansion requests from industrial developers",
      "State and local economic development incentive agreements"
    ],
    whyEarly: "Industrial projects have long entitlement and permitting cycles, often 12 to 18 months. The stakes are high as these are large-dollar projects with significant site work, structural steel, and MEP components. Early intelligence on land acquisitions and incentive deals gives contractors time to build relationships with developers and end users before the project goes to formal bid. Industrial developers value contractors who understand logistics, process flows, and heavy infrastructure requirements. Demonstrating that expertise early, before the bid phase, differentiates your firm from the competition.",
    traditionalProblem: "Industrial construction leads are hard to find through traditional channels because many industrial projects are developed by private equity-backed developers, corporate end users, or foreign manufacturers who do not publicize their plans until construction is imminent. Economic development incentive agreements, land options, and environmental assessments happen quietly, months before any public announcement. Contractors who rely on bid boards and industry publications only see industrial projects after the developer has already selected a delivery method and often a contractor. Mercator.ai tracks the earliest industrial development signals, including land deals and utility requests, to surface projects at the point of maximum opportunity.",
    pipelineSteps: [
      "Land acquisition or option agreement signals a developer's or end user's intent to build an industrial facility in a specific market",
      "Economic development incentive applications confirm the project's scale, job creation, and capital investment parameters",
      "Environmental and infrastructure assessments reveal site conditions, utility requirements, and construction complexity",
      "Building permit filings provide construction scope, structural specifications, and timeline to groundbreaking",
      "Mercator.ai delivers real-time alerts at each development milestone so you can engage the right stakeholders at the right time"
    ]
  },
  {
    slug: "data-centers",
    name: "Data Center",
    parent: "Industrial",
    description: "Data center construction includes hyperscale facilities, colocation centers, edge computing installations, and enterprise server farms. This is one of the fastest-growing construction sectors, driven by cloud computing, AI workloads, and digital infrastructure demand. Data centers require specialized electrical, cooling, and structural systems.",
    descriptionExtended: "Data center construction is unlike any other building type. These facilities are defined by their power and cooling requirements, not their square footage. A single hyperscale data center campus can consume 100+ megawatts of power. The construction involves massive electrical infrastructure, precision cooling systems, redundant mechanical plants, and specialized structural designs. The market is dominated by hyperscale operators and a growing number of colocation providers, each with multi-billion-dollar construction pipelines. Contractors who specialize in data center work need early visibility into where operators are acquiring land and securing power.",
    signals: [
      "Large-scale land acquisitions near power substations and fiber corridors",
      "Utility interconnection applications for high-capacity power",
      "Rezoning applications with data center or technology campus designations",
      "Building permits referencing mission-critical or technology infrastructure",
      "Water rights applications for cooling systems",
      "Fiber optic conduit and telecommunications infrastructure permits"
    ],
    whyEarly: "Data center projects are massive, often $500M to $2B+, with 24 to 36 month construction timelines. The earliest signals are land acquisitions near power infrastructure and utility interconnection requests. Contractors who spot these signals first can position for the mechanical, electrical, and structural packages that define data center construction. Establishing a relationship during pre-development is the most effective way to break into this high-value market.",
    traditionalProblem: "Data center projects are among the most secretive in commercial construction. Operators use LLCs, NDAs, and code names to mask their identity during land acquisition and permitting. Public filings may reference a 'technology campus' without naming the operator. By the time the project is publicly known, the general contractor and major subcontractors are already selected. Mercator.ai uses AI to detect patterns in land deals, utility filings, and permit applications that indicate data center development, often identifying projects months before any public announcement.",
    pipelineSteps: [
      "Land acquisition near power substations or fiber corridors signals an operator's intent to develop a data center campus",
      "Utility interconnection and power capacity applications confirm the project's scale and energy requirements",
      "Rezoning and environmental review submissions reveal the campus layout, building phases, and cooling infrastructure plans",
      "Building permit filings for individual data halls provide detailed construction specifications and timelines",
      "Mercator.ai alerts contractors at each stage so they can position for the electrical, mechanical, and structural packages that define data center work"
    ]
  },
  {
    slug: "light-industrial",
    name: "Light Industrial",
    parent: "Industrial",
    description: "Light industrial construction includes flex spaces, small warehouses, workshop facilities, maker spaces, self-storage, and light manufacturing buildings. These projects serve small to mid-size businesses and are often developed speculatively in industrial parks and suburban corridors.",
    descriptionExtended: "Light industrial is one of the most active construction sectors in suburban and exurban markets. Developers build multi-building industrial parks to serve a mix of tenants including e-commerce fulfillment, last-mile delivery, contractor yards, and small manufacturers. Individual buildings range from 10,000 to 100,000 square feet, and developers often build multiple phases over several years. For contractors, light industrial work offers steady volume and repeat business with developers who are continuously building new projects. Mercator.ai helps contractors track developer activity across entire metro areas, revealing pipeline patterns that single-project monitoring misses.",
    signals: [
      "Land acquisitions in industrial parks and business corridors",
      "Site plan submissions for multi-unit flex and industrial buildings",
      "Building permits for warehouse and flex space construction",
      "Conditional use permits for light manufacturing and storage",
      "Utility extension permits in industrial development zones",
      "Grading and site work permits for new industrial parks"
    ],
    whyEarly: "Light industrial developers are among the most active repeat builders in commercial construction. A single developer may have 5 to 15 projects across a metro area. Identifying a developer's land acquisitions and site plans early gives contractors the opportunity to build a relationship that spans multiple projects, not just one. Early engagement with light industrial developers positions your firm for ongoing work and preferred contractor status, which is significantly more valuable than winning a single competitive bid.",
    traditionalProblem: "Light industrial projects are often developed by regional firms that do not list work on public bid boards. These developers select contractors based on relationships, pricing history, and proven performance on similar projects. Contractors who are not already in the developer's network rarely hear about these opportunities until the project is well underway. Mercator.ai surfaces land acquisitions, site plans, and building permits for light industrial developments across entire markets, giving contractors the lead generation data they need to proactively engage with developers they do not yet know.",
    pipelineSteps: [
      "Land acquisition in an industrial corridor or business park signals a developer's plan for new flex or warehouse construction",
      "Site plan and subdivision applications reveal the number of buildings, square footage, and phasing schedule",
      "Utility extension and grading permits confirm that site development is underway",
      "Building permits for individual structures provide construction details and timeline",
      "Mercator.ai tracks the entire development cycle so contractors can engage at the land stage and secure relationships for multiple building phases"
    ]
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    parent: "Industrial",
    description: "Warehousing construction includes distribution centers, fulfillment facilities, cold storage, and logistics terminals. The warehousing sector has experienced sustained growth driven by e-commerce, last-mile delivery demand, and supply chain modernization.",
    descriptionExtended: "Warehousing has been the dominant industrial construction type for the past decade, driven by Amazon, Walmart, and other major retailers expanding their distribution networks. Projects range from 100,000 square foot last-mile facilities in suburban markets to 1M+ square foot regional distribution centers along interstate corridors. Specialized subcategories include cold storage (for grocery and pharmaceutical distribution), cross-dock facilities (for high-velocity logistics), and automated fulfillment centers (with extensive conveyor and robotics infrastructure). Each type requires different construction expertise, and contractors who understand these distinctions can position themselves for the right opportunities.",
    signals: [
      "Land acquisitions along major highway corridors and intermodal terminals",
      "Site plan submissions for large-footprint single-story structures",
      "Building permits referencing distribution, logistics, or fulfillment use",
      "Refrigeration and cold storage mechanical permits",
      "Truck court and loading dock configuration permits",
      "Rail siding and intermodal connection permits"
    ],
    whyEarly: "Warehousing projects move quickly from land acquisition to construction start, often 6 to 12 months for speculative projects. Developers are under pressure to deliver built inventory to meet tenant demand. Contractors who are tracking land acquisitions and site plan submissions in logistics corridors can position for work before the developer even issues an invitation to bid. For build-to-suit warehouse projects, the end user (retailer or logistics provider) and their broker select the contractor during design, making early relationship building essential.",
    traditionalProblem: "Warehousing construction leads are concentrated among a small number of industrial developers and logistics end users. These projects are often awarded through negotiated contracts or preferred contractor relationships, not public bid processes. By the time a warehouse project appears on a bid board or industry publication, the developer has already engaged their general contractor for the shell and is only bidding out specific trade packages. Mercator.ai gives contractors visibility into the full pipeline of warehouse development activity in their market, from land options to building permits, so they can build the developer relationships that lead to awarded work.",
    pipelineSteps: [
      "Land acquisition along a highway corridor or near an intermodal facility signals new warehouse development",
      "Site plan and zoning submissions confirm the building footprint, dock configuration, and development timeline",
      "Grading and utility permits indicate active site development and an approaching construction start",
      "Building permit filings provide structural and MEP specifications for the warehouse facility",
      "Mercator.ai monitors every stage and sends real-time alerts so contractors can engage developers at the earliest opportunity"
    ]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    parent: "Industrial",
    description: "Manufacturing construction includes automotive plants, semiconductor fabrication facilities, food processing plants, pharmaceutical production facilities, and advanced manufacturing centers. This sector is being reshaped by reshoring trends, CHIPS Act funding, and supply chain localization strategies.",
    descriptionExtended: "Manufacturing construction is experiencing a renaissance driven by federal incentives, supply chain security concerns, and the growth of advanced manufacturing sectors including electric vehicles, batteries, semiconductors, and biologics. These projects are among the most complex in commercial construction, requiring specialized process piping, clean room environments, heavy power infrastructure, and precision environmental controls. Manufacturing facility construction often involves design-build delivery with the contractor engaged early in the design process. For contractors seeking to enter this market, identifying projects at the incentive or site selection stage is critical to securing a role on the project team.",
    signals: [
      "Economic development incentive announcements for manufacturing facilities",
      "Large industrial land acquisitions with utility capacity requirements",
      "Environmental permits for manufacturing processes and emissions",
      "State regulatory approvals for pharmaceutical or food production facilities",
      "Heavy utility infrastructure permits including high-voltage electrical and process water",
      "Workforce training program announcements tied to specific facility construction"
    ],
    whyEarly: "Manufacturing facility construction decisions are made 2 to 5 years before a building is complete. Site selection, incentive negotiation, environmental permitting, and specialized design consume the majority of this timeline. Contractors who identify manufacturing projects at the incentive or site selection stage can position for the design-build team that will deliver the project. Once a manufacturer selects a site and secures incentives, the construction team is assembled quickly, and contractors who have already built relationships are in the strongest position.",
    traditionalProblem: "Manufacturing construction leads are among the most difficult to track because they originate from corporate site selection processes that are highly confidential. Manufacturers use site selection consultants, code names, and multiple LLC structures to evaluate locations without revealing their identity. Public incentive announcements may reference a 'Project Eagle' or 'Company A' without naming the manufacturer. By the time the manufacturer is publicly identified, the construction team is already being assembled. Mercator.ai detects the early signals, including land options, utility requests, and incentive applications, that indicate manufacturing construction is coming to a market.",
    pipelineSteps: [
      "Economic development incentive application or site selection announcement signals a manufacturer's intent to build in a specific market",
      "Land acquisition and environmental assessment confirm the project site, scale, and manufacturing process requirements",
      "Specialized regulatory approvals reveal the facility type, process systems, and environmental controls required",
      "Design-build team selection and building permit filings mark the transition from planning to active construction procurement",
      "Mercator.ai tracks each milestone and delivers alerts so contractors can engage the manufacturer and design team during the critical early phases"
    ]
  },
  {
    slug: "treatment-plants",
    name: "Treatment Plants",
    parent: "Industrial",
    description: "Treatment plant construction encompasses water treatment facilities, wastewater treatment plants, reclaimed water systems, desalination plants, and industrial process water treatment. These are critical infrastructure projects typically funded by municipalities, utilities, and water districts.",
    descriptionExtended: "Treatment plant construction sits at the intersection of industrial and public infrastructure. While many treatment plants are publicly funded and subject to public procurement, the projects themselves require specialized industrial construction expertise including process piping, chemical storage, electrical controls, and environmental compliance systems. The market is driven by aging infrastructure that must be replaced, population growth that demands expanded capacity, and tightening EPA and state environmental regulations that require treatment upgrades. Federal infrastructure funding has accelerated the pipeline, creating a multi-year wave of treatment plant construction that contractors can plan for if they have early intelligence.",
    signals: [
      "Municipal capital improvement plans including water infrastructure",
      "EPA and state environmental compliance orders",
      "Consent decree deadlines requiring facility upgrades",
      "Design-build RFQ postings from water utilities",
      "Land acquisitions by water districts and utilities",
      "Environmental impact reports for water treatment expansions"
    ],
    whyEarly: "Treatment plant projects are planned years in advance through municipal capital improvement programs and federal infrastructure funding. Early tracking of CIP budgets, consent decrees, and design RFQs gives contractors the lead time to form joint ventures, secure bonding, and position for these specialized, high-value projects. Treatment plant construction often requires specialized pre-qualifications and bonding capacity that take months to assemble. Contractors who learn about projects early have the time to prepare qualifying submissions that meet the stringent requirements of water utility procurement.",
    traditionalProblem: "Treatment plant construction opportunities are buried in municipal capital improvement programs, state revolving fund loan applications, and federal grant databases. Tracking these sources across multiple jurisdictions is enormously time-consuming. Many contractors only discover treatment plant projects when a formal RFP is published, at which point they may not have enough time to assemble a competitive team, secure bonding, or prepare a qualifying submission. Mercator.ai consolidates these fragmented signals and alerts contractors to treatment plant projects at the planning and funding stage, giving them the lead time to compete effectively.",
    pipelineSteps: [
      "Capital improvement plan adoption or federal/state funding award commits resources to a specific treatment plant project",
      "Consent decree deadline or regulatory order establishes the timeline and scope of required facility upgrades",
      "Design-build or CMAR team selection through RFQ identifies the project delivery method and key stakeholders",
      "Permit filings and environmental review confirm construction scope, timeline, and regulatory compliance requirements",
      "Mercator.ai monitors each development stage and sends alerts so contractors can prepare qualifications and engage early"
    ]
  },
  // Multi-family
  {
    slug: "multi-family",
    name: "Multi-Family",
    parent: "Multi-Family",
    description: "Multi-family construction includes apartment complexes, condominiums, townhome communities, senior living facilities, student housing, and affordable housing developments. This sector is driven by housing demand, demographic shifts, and urban densification trends.",
    descriptionExtended: "Multi-family construction is one of the largest and most active sectors in commercial construction. Rising home prices, demographic shifts toward renting, and institutional investor interest in residential assets have fueled a sustained building boom. Project types range from garden-style suburban apartments to high-rise urban towers, each with different construction methods, budgets, and contractor requirements. Affordable housing and workforce housing projects add a layer of complexity with tax credit requirements, prevailing wage rules, and government compliance. Mercator.ai helps contractors navigate this diverse market by tracking multi-family development signals from land acquisition through building permit, across every project type and scale.",
    signals: [
      "Multi-family land acquisitions in growth corridors",
      "Rezoning applications from single-family or commercial to multi-family",
      "Density bonus and affordable housing entitlement applications",
      "Site plan submissions for residential developments over 10 units",
      "Building permits for multi-family residential structures",
      "Tax credit allocations (LIHTC) and HUD financing approvals"
    ],
    whyEarly: "Multi-family development has a 12 to 24 month pre-construction pipeline. Land acquisition, entitlement, and financing all happen before construction starts. Contractors who identify projects at the rezoning or land sale stage can build relationships with developers during design and financing, well before the project goes to bid. Multi-family developers are often repeat builders with multiple projects in their pipeline. Winning one project through early engagement frequently leads to ongoing work across the developer's portfolio, making early intelligence disproportionately valuable in this sector.",
    traditionalProblem: "Multi-family construction leads are scattered across zoning boards, planning departments, affordable housing agencies, and commercial real estate publications. Developers often use LLCs to acquire land, making it difficult to identify who is behind a project from public records alone. By the time a multi-family project is publicly announced, the developer has typically already selected a general contractor or narrowed the field to their preferred firms. Mercator.ai connects the dots between land acquisitions, entitlement applications, and building permits to reveal multi-family projects at their earliest stage, along with the stakeholder information needed to make contact.",
    pipelineSteps: [
      "Land acquisition in a growth corridor or infill site signals a developer's intent to build multi-family housing",
      "Rezoning and density entitlement applications confirm the project type, unit count, and development timeline",
      "Financing milestones including tax credit awards, construction loan closings, or equity commitments indicate the project is funded and moving forward",
      "Building permit filings provide detailed construction documents, unit mix, and construction start timeline",
      "Mercator.ai tracks each milestone and delivers alerts so contractors can engage developers at the optimal moment in the pre-construction cycle"
    ]
  },
  {
    slug: "mixed-use",
    name: "Mixed Use",
    parent: "Multi-Family",
    description: "Mixed-use construction combines residential, commercial, retail, and sometimes hospitality components in a single development. These projects are increasingly common in urban and suburban settings as cities encourage walkable, transit-oriented development with diverse uses.",
    descriptionExtended: "Mixed-use development represents a growing share of commercial construction as municipalities incentivize projects that combine housing, retail, office, and public space in walkable urban environments. These projects are structurally and logistically complex, often requiring multiple construction phases, different building systems for different uses, and coordination among multiple tenants and ownership entities. For contractors, mixed-use projects offer diverse trade opportunities across residential, commercial, and retail scopes within a single development. Mercator.ai tracks the unique entitlement and financing signals that distinguish mixed-use projects from single-use developments.",
    signals: [
      "Planned unit development (PUD) applications",
      "Mixed-use rezoning and overlay district applications",
      "Transit-oriented development incentive applications",
      "Large-scale site plan submissions with multiple building types",
      "Tax increment financing (TIF) district designations",
      "Public-private partnership announcements for mixed-use developments"
    ],
    whyEarly: "Mixed-use projects are among the most complex to plan, finance, and build. The entitlement process alone can take 12 to 24 months. Multiple stakeholders, phased construction, and diverse building systems create opportunities for contractors across specialties. Early tracking gives you time to position for the phase and scope that matches your capabilities. Because mixed-use projects are phased over multiple years, establishing a contractor relationship during Phase 1 often leads to continued work across subsequent phases. Mercator.ai helps contractors identify these long-term opportunities at the earliest development stage.",
    traditionalProblem: "Mixed-use construction leads are particularly hard to find because these projects often involve complex public-private partnerships, TIF districts, and multi-agency entitlement processes that unfold over years. A mixed-use project may appear as separate land deals, zoning applications, and permit filings that look unrelated unless you understand the full development plan. By the time a mixed-use project is publicly announced, the master developer has already engaged their preferred contractors for the first phase. Mercator.ai connects fragmented signals to reveal the full scope and timeline of mixed-use developments, giving contractors the intelligence they need to position early.",
    pipelineSteps: [
      "Land assembly and PUD application signals a developer's intent to create a mixed-use district or campus",
      "TIF, transit-oriented development, or public-private partnership approvals confirm public investment and project viability",
      "Phase-level site plans and architectural submissions reveal building types, construction methods, and scope for each phase",
      "Building permits for individual phases provide construction specifications, timeline, and involved design professionals",
      "Mercator.ai tracks the full development lifecycle across all phases so contractors can position for initial and ongoing work"
    ]
  },
  {
    slug: "high-rise",
    name: "High-Rise",
    parent: "Multi-Family",
    description: "High-rise construction includes residential towers, luxury condominiums, and tall mixed-use buildings typically exceeding 7 stories. These projects demand specialized structural engineering, curtain wall systems, vertical transportation, and complex logistics for urban construction sites.",
    descriptionExtended: "High-rise residential construction represents the most technically demanding segment of multi-family building. These projects require deep foundations, structural concrete or steel frame systems, curtain wall or facade engineering, high-speed elevator systems, and complex MEP installations that must be coordinated within a tight urban footprint. Construction timelines are long, typically 24 to 48 months, and budgets are substantial. High-rise developers work with a select group of experienced contractors, but the growing demand for urban housing in major metros means new contractors are being onboarded to high-rise project teams regularly. Mercator.ai helps contractors identify high-rise projects at the development application stage, providing the maximum lead time to engage with developers and demonstrate high-rise capabilities.",
    signals: [
      "High-rise development applications and height variance requests",
      "Deep foundation and pile driving permits",
      "Tower crane permits and vertical construction notifications",
      "FAA height obstruction evaluations",
      "Wind study and structural peer review submissions",
      "Luxury condominium pre-sale announcements and marketing launches"
    ],
    whyEarly: "High-rise projects have the longest lead times in residential construction, often 2 to 4 years from concept to completion. The structural and MEP packages are committed early in the process. Contractors who identify high-rise projects at the development application stage can engage with the development team during schematic design when key contractor relationships are formed. High-rise developers typically select their general contractor and key subcontractors during the design development phase, 12 to 18 months before construction starts. Mercator.ai gives contractors the early intelligence they need to be part of that selection process.",
    traditionalProblem: "High-rise construction leads are concentrated in major urban markets and controlled by a small number of developers who work with established contractor networks. Breaking into a developer's preferred list requires demonstrated high-rise experience and early relationship building. Traditional lead sources rarely surface high-rise projects until construction is well underway and visible from the street. Mercator.ai detects the earliest signals of high-rise development, including height variance requests, deep foundation permits, and tower crane applications, and connects them to the development team so contractors can make their pitch when it matters most.",
    pipelineSteps: [
      "Development application and height variance request signals a developer's intent to build a high-rise residential tower",
      "Structural and geotechnical studies confirm the building's foundation requirements and construction method",
      "Design development submissions reveal the facade system, MEP specifications, and unit count",
      "Building permit filings and tower crane permits mark the transition to active construction procurement",
      "Mercator.ai alerts at each milestone so contractors can engage during the design phase when the project team is being assembled"
    ]
  },
  {
    slug: "mid-rise",
    name: "Mid-Rise",
    parent: "Multi-Family",
    description: "Mid-rise construction includes residential buildings of 4 to 7 stories, often using wood-frame-over-podium or steel construction. Mid-rise is the dominant apartment construction type in growing suburban and urban markets, offering density without the cost and complexity of high-rise development.",
    descriptionExtended: "Mid-rise residential construction has become the standard building type for market-rate apartment development across the United States. The 5-over-1 construction method offers a cost-effective way to achieve urban density within a mid-rise envelope. These projects typically range from 150 to 400 units and are developed by regional and national apartment developers who build multiple projects per year. For contractors, mid-rise represents the highest-volume opportunity in multi-family construction. Developers value consistency, pricing, and schedule reliability. Mercator.ai helps contractors identify the active mid-rise developers in their market and track their pipeline of upcoming projects.",
    signals: [
      "Multi-family land acquisitions in transit-adjacent and infill locations",
      "Rezoning applications for medium-density residential development",
      "Wood-frame-over-podium structural permit applications",
      "Site plan submissions for 150 to 400 unit residential developments",
      "Affordable housing tax credit applications for mid-rise projects",
      "Parking structure permits that accompany mid-rise residential developments"
    ],
    whyEarly: "Mid-rise developers are among the most active repeat builders in commercial construction. A single developer may have 3 to 10 mid-rise projects in their pipeline at any given time. Identifying a developer's land acquisitions and entitlement activity across a metro area reveals their full pipeline, not just the one project they may currently be bidding. Contractors who build relationships with mid-rise developers at the land stage can position for ongoing work that spans years. Mercator.ai tracks mid-rise development activity across entire markets, helping contractors see the full picture of opportunity.",
    traditionalProblem: "Mid-rise apartment leads are controlled by developers who select their general contractor through negotiated relationships, not public bid processes. Many regional apartment developers work with the same 2 to 3 general contractors across all their projects. Breaking into that preferred list requires proactive outreach and demonstrated mid-rise experience. Traditional bid boards and plan rooms rarely list mid-rise apartment work because it is privately developed and privately awarded. Mercator.ai surfaces mid-rise development signals, from land acquisition to building permit, so contractors can identify active developers and initiate conversations before the next project's contractor is selected.",
    pipelineSteps: [
      "Land acquisition in a transit-adjacent or infill location signals a developer's plan for a mid-rise apartment community",
      "Rezoning and density entitlement applications confirm the unit count, building type, and development timeline",
      "Affordable housing tax credit awards or construction financing closings confirm the project is funded and moving to construction",
      "Building permit filings provide detailed construction documents and a timeline to groundbreaking",
      "Mercator.ai tracks the entire development cycle so contractors can engage with the developer at the optimal stage in their pipeline"
    ]
  },
  {
    slug: "low-rise",
    name: "Low-Rise",
    parent: "Multi-Family",
    description: "Low-rise construction includes garden-style apartments, townhome communities, duplexes, triplexes, and small multi-family buildings of 1 to 3 stories. Low-rise residential is the most common multi-family building type and represents a high volume of opportunities across virtually every market.",
    descriptionExtended: "Low-rise multi-family construction is the backbone of the apartment building industry, representing the majority of new multi-family units built in suburban and exurban markets. These projects use conventional wood-frame construction, which keeps costs low and timelines short compared to mid-rise and high-rise alternatives. Developers range from local builders constructing a single 20-unit property to national firms building 300+ unit garden-style communities. The high volume and geographic diversity of low-rise construction means there are far more opportunities than any single contractor can track manually. Mercator.ai provides comprehensive coverage of low-rise development signals, from subdivision plats to building permits, across entire metro areas so contractors never miss an opportunity in their market.",
    signals: [
      "Multi-family building permits for 1 to 3 story structures",
      "Subdivision plat filings for townhome and duplex communities",
      "Rezoning from single-family to multi-family in suburban markets",
      "Affordable housing development applications",
      "Site grading and utility permits for residential communities",
      "Construction financing closings for garden-style apartment projects"
    ],
    whyEarly: "Low-rise projects have shorter timelines but higher volume. A single developer may have 5 to 10 projects in a pipeline. Tracking land acquisitions and permit filings across a metro area reveals developer activity patterns. Contractors who connect with active developers early can secure ongoing work rather than competing project by project. The low-rise segment rewards contractors who can offer competitive pricing, reliable schedules, and the capacity to handle multiple projects simultaneously. Mercator.ai helps contractors identify these volume opportunities by surfacing developer-level pipeline data, not just individual project listings.",
    traditionalProblem: "Low-rise multi-family leads are the most fragmented in the construction industry. Projects are developed by hundreds of local, regional, and national developers across thousands of jurisdictions. No single bid board, publication, or database captures the full scope of low-rise development activity in any market. Contractors who rely on word of mouth and existing relationships are only seeing a fraction of the available opportunities. Mercator.ai aggregates land transactions, plat filings, and building permits across all jurisdictions in a metro area, providing a comprehensive view of low-rise development activity that no manual process can match.",
    pipelineSteps: [
      "Land acquisition or subdivision plat filing signals a developer's plan for a new garden-style apartment, townhome, or duplex community",
      "Rezoning and entitlement applications confirm the density, unit count, and development plan",
      "Site grading and utility permits indicate that site development is underway and construction is approaching",
      "Building permit filings provide construction specifications and timeline for individual buildings within the development",
      "Mercator.ai tracks high-volume low-rise activity across entire markets so contractors can identify developer pipeline patterns and build lasting relationships"
    ]
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
