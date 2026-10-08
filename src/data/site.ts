export const site = {
  name: 'The Northern Beaches Plumber',
  operator: 'Antons Enterprises Pty Ltd',
  licence: '210933C',
  phoneDisplay: '0493 824 176',
  phoneHref: 'tel:+61493824176',
  url: 'https://thenorthenbeachesplumber.com.au',
  place: 'Northern Beaches, Sydney, NSW',
  reviewSourceUrl: 'https://antonsplumbingandgas.com.au/suburb/plumber-north-kellyville/',
  availability: '24/7 available',
} as const;

export type Faq = { question: string; answer: string };
export type Expertise = { title: string; text: string };

export const services = [
  {
    slug: 'emergency-plumber', name: 'Emergency Plumber', short: 'Urgent Faults', keyword: 'Emergency plumber Northern Beaches',
    image: '/images/service-truck-action.webp', imageSmall: '/images/service-truck-action-720.webp', alt: 'Antons plumber preparing drain equipment on a blue plumbing service vehicle',
    title: 'Emergency Plumber Northern Beaches | Antons', description: 'Call about urgent leaks, overflows and plumbing failures across the Northern Beaches. We review the fault, address, access and current availability.',
    intro: 'A burst pipe, overflowing fixture or unsafe plumbing fault needs calm, practical action. Tell us what is happening, where the water is moving and whether the supply can be isolated.',
    overview: 'Emergency plumbing starts with limiting risk, identifying the affected service and deciding what needs attention first. The plumber checks accessible pipework, fixtures and isolation points before discussing a safe repair path.',
    signs: ['Water spreading from a burst or damaged pipe', 'An overflowing toilet, drain or fixture', 'A failed isolation valve or uncontrolled water flow', 'A leaking hot-water unit or suspected gas concern'],
    details: ['Urgent leak and overflow assessment', 'Burst or damaged pipe repairs', 'Failed fixtures and isolation problems', 'Practical guidance while a visit is discussed'],
    expertise: [
      { title: 'Fault Triage', text: 'The first questions focus on water movement, isolation, electricity, gas and the parts of the property affected.' },
      { title: 'Damage Limitation', text: 'Where it is safe, the affected service is isolated before the repair area is opened or components are removed.' },
      { title: 'Repair Planning', text: 'Access, parts, surrounding damage and whether a temporary or permanent repair is appropriate are explained.' },
    ] satisfies Expertise[],
    expectations: ['Share the complete address, visible symptoms and any immediate safety issue.', 'The plumber assesses the affected service and explains the proposed scope.', 'The repaired area is checked where accessible and any follow-up work is discussed.'],
    related: ['leak-detection', 'plumbing-repairs', 'hot-water-systems'],
  },
  {
    slug: 'blocked-drains', name: 'Blocked Drains', short: 'Drain Clearing', keyword: 'Blocked drains Northern Beaches',
    image: '/images/drain-camera-inspection.webp', imageSmall: '/images/drain-camera-inspection-720.webp', alt: 'Drain camera equipment beside an outdoor inspection opening',
    title: 'Blocked Drains Northern Beaches | Antons', description: 'Get practical help with blocked sinks, toilets and drains across the Northern Beaches, including clearing and camera inspection where suitable.',
    intro: 'Slow fixtures, gurgling sounds and repeat backups can point to a restriction deeper in the line. We start with the symptoms, affected fixtures and accessible drain points.',
    overview: 'Blocked drain work involves locating the affected section, understanding whether the restriction is local or recurring and selecting a clearing method suited to the pipework. A camera inspection may help where the condition of an accessible line needs review.',
    signs: ['Water draining slowly from sinks or showers', 'Gurgling sounds from nearby fixtures', 'Repeated toilet or floor-waste backups', 'Overflowing gullies or unpleasant drain odours'],
    details: ['Blocked sinks, showers and toilets', 'Drain clearing and water jetting where suitable', 'Camera inspection of accessible lines', 'Advice about recurring restrictions and damaged sections'],
    expertise: [
      { title: 'Symptom Mapping', text: 'The pattern across fixtures helps separate a local trap problem from a restriction further along the line.' },
      { title: 'Controlled Clearing', text: 'The method is selected around pipe material, access, the likely obstruction and the surrounding property.' },
      { title: 'Condition Review', text: 'Accessible pipework can be inspected for roots, movement, damage or remaining deposits when useful.' },
    ] satisfies Expertise[],
    expectations: ['Avoid using affected fixtures and note where water backs up first.', 'Access points and the likely blocked section are assessed before clearing begins.', 'Flow is checked and evidence of a recurring cause is explained.'],
    related: ['leak-detection', 'plumbing-repairs', 'emergency-plumber'],
  },
  {
    slug: 'hot-water-systems', name: 'Hot Water Systems', short: 'Hot Water', keyword: 'Hot water repairs Northern Beaches',
    image: '/images/hot-water-repair.webp', imageSmall: '/images/hot-water-repair-720.webp', alt: 'Antons plumber repairing pipework on an outdoor hot-water system',
    title: 'Hot Water Repairs Northern Beaches | Antons', description: 'Arrange hot-water fault diagnosis, repair or replacement planning across the Northern Beaches for electric, gas and heat-pump systems.',
    intro: 'No hot water, temperature changes, leaks or unusual system noise should be assessed before repair or replacement is chosen. The unit, installation and household demand all matter.',
    overview: 'Hot-water plumbing covers the valves, pipework and systems that heat and distribute water. The right response depends on the energy source, unit condition, available space, household demand and whether repair remains practical.',
    signs: ['No hot water or inconsistent temperature', 'Water leaking around the unit or valves', 'Unusual noise, pressure or discoloured water', 'A system that repeatedly trips or shuts down'],
    details: ['Fault assessment and repairs', 'Replacement system planning', 'Electric, gas and heat-pump systems', 'Pipework, valves and removal of replaced units'],
    expertise: [
      { title: 'Installation Assessment', text: 'The unit, valves, pipework, energy connection and installation clearances are reviewed together.' },
      { title: 'Repair or Replace', text: 'Condition, repair scope and household needs are considered before replacement is recommended.' },
      { title: 'Demand Planning', text: 'System size and recovery are discussed in the context of household use and installation space.' },
    ] satisfies Expertise[],
    expectations: ['Note the unit type, visible leaks, error indicators and when the fault began.', 'The system and accessible connections are checked before options are discussed.', 'Operation is checked and controls or follow-up requirements are explained.'],
    related: ['gas-fitting', 'plumbing-repairs', 'emergency-plumber'],
  },
  {
    slug: 'plumbing-repairs', name: 'Plumbing Repairs', short: 'Everyday Repairs', keyword: 'Plumbing repairs Northern Beaches',
    image: '/images/shower-repair.webp', imageSmall: '/images/shower-repair-720.webp', alt: 'Antons plumber completing plumbing work inside a tiled shower',
    title: 'Plumbing Repairs Northern Beaches | Antons', description: 'Book plumbing repairs for leaking taps, toilets, showers, pipework and household fixtures throughout Sydney’s Northern Beaches.',
    intro: 'Everyday plumbing faults are easier to resolve when the cause is assessed before parts are replaced. We explain the fault, practical options and agreed scope of work.',
    overview: 'General plumbing repairs restore the fixtures, valves and pipework used throughout a property. A careful assessment separates a worn component from wider supply, pressure or drainage problems.',
    signs: ['Taps, showers or toilets that continue to leak', 'Low pressure at one or more fixtures', 'Water marks around cabinets, walls or floors', 'Noisy, loose or unreliable plumbing fixtures'],
    details: ['Leaking taps and fixtures', 'Toilet and cistern repairs', 'Shower and vanity plumbing', 'Damaged or ageing accessible pipework'],
    expertise: [
      { title: 'Fixture Diagnosis', text: 'Wear, seals, valves, connections and supply conditions are checked before parts are selected.' },
      { title: 'Cause-Led Repairs', text: 'The work addresses the fault found during assessment rather than only the visible symptom.' },
      { title: 'Property Protection', text: 'Work areas, isolation points and nearby finishes are considered before fixtures are opened.' },
    ] satisfies Expertise[],
    expectations: ['Share photos and note whether one fixture or several are affected.', 'The plumber checks the fixture, isolation and accessible connections.', 'Operation is tested and any maintenance or further work is explained.'],
    related: ['leak-detection', 'blocked-drains', 'hot-water-systems'],
  },
  {
    slug: 'gas-fitting', name: 'Gas Fitting', short: 'Licensed Gas Work', keyword: 'Gas fitting Northern Beaches',
    image: '/images/service-truck-rear.webp', imageSmall: '/images/service-truck-rear-720.webp', alt: 'Rear of an Antons service vehicle displaying gas fitting among its services',
    title: 'Gas Fitting Northern Beaches | Antons', description: 'Arrange licensed gas fitting for appliance connections, gas hot-water systems and suspected gas faults across Sydney’s Northern Beaches.',
    intro: 'Gas work must be handled by an appropriately licensed professional. If you suspect a leak, move away, avoid flames and electrical switches, then call for advice.',
    overview: 'Gas fitting covers regulated work on gas pipework, appliance connections and related systems. The installation and scope are checked before work begins, with applicable testing completed before equipment is returned to service.',
    signs: ['A suspected gas smell near an appliance or line', 'An appliance connection that needs alteration', 'A gas hot-water system with supply concerns', 'Planned kitchen or appliance replacement work'],
    details: ['Gas appliance connections', 'Gas hot-water pipework', 'Fault and leak assessment', 'Alterations to accessible gas lines'],
    expertise: [
      { title: 'Licensed Scope', text: 'Gas pipework and connections are treated as regulated work within the applicable licence.' },
      { title: 'Connection Checks', text: 'Appliance location, supply, isolation and manufacturer requirements are reviewed first.' },
      { title: 'Applicable Testing', text: 'Testing appropriate to the work is performed before the connected system returns to use.' },
    ] satisfies Expertise[],
    expectations: ['Identify the appliance or area and do not operate equipment if a leak is suspected.', 'Supply, pipework and the proposed connection are checked.', 'Applicable testing and safe-use information are explained.'],
    related: ['hot-water-systems', 'emergency-plumber', 'plumbing-repairs'],
  },
  {
    slug: 'leak-detection', name: 'Leak Detection', short: 'Find Hidden Leaks', keyword: 'Leak detection Northern Beaches',
    image: '/images/stormwater-repair.webp', imageSmall: '/images/stormwater-repair-720.webp', alt: 'Antons plumber inspecting pipework through an outdoor drainage opening',
    title: 'Leak Detection Northern Beaches | Antons', description: 'Investigate unexplained water use, damp areas and suspected hidden leaks with a licensed plumbing team serving the Northern Beaches.',
    intro: 'A hidden leak may appear as dampness, movement on the meter, reduced pressure or an unexpected water bill. Useful testing depends on the symptoms and accessible plumbing.',
    overview: 'Leak detection narrows unexplained water loss before unnecessary surfaces are disturbed. Evidence from the meter, isolation, pressure, moisture and accessible pipework identifies the most useful next inspection or repair step.',
    signs: ['Unexpected movement on the water meter', 'Damp patches, mould or unexplained moisture', 'Reduced pressure without an obvious fixture fault', 'An unusually high water bill or running-water sound'],
    details: ['Visible and concealed leak checks', 'Pressure and isolation testing', 'Moisture investigation where suitable', 'Repair planning after the source is narrowed'],
    expertise: [
      { title: 'Evidence First', text: 'Meter behaviour, pressure changes and moisture location are used to narrow the search area.' },
      { title: 'Targeted Testing', text: 'Isolation and suitable checks help avoid opening broad areas without useful evidence.' },
      { title: 'Repair Handover', text: 'Once the source is narrowed, access and repair options can be discussed with clearer scope.' },
    ] satisfies Expertise[],
    expectations: ['Avoid covering damp areas and note when the meter or moisture changes.', 'Accessible services are isolated and tested in a logical sequence.', 'Findings, limitations and the recommended repair step are explained.'],
    related: ['plumbing-repairs', 'blocked-drains', 'emergency-plumber'],
  },
] as const;

const areaFaqs = (name: string): Faq[] => [
  { question: `How Do I Confirm Plumbing Coverage in ${name}?`, answer: `Call with the complete ${name} address, property type and a short description of the fault. The team will confirm whether attendance can be arranged.` },
  { question: `Can I Book Blocked Drain Help in ${name}?`, answer: `You can call about blocked sinks, toilets, floor wastes and outside drains in ${name}. Access and the affected fixtures help determine the next step.` },
  { question: `Do You Repair Hot-Water Systems in ${name}?`, answer: 'Hot-water faults can be assessed for repair or replacement after the unit, installation and household needs are reviewed.' },
  { question: `Can You Work With Strata Access in ${name}?`, answer: 'Where attendance is arranged, please confirm parking, keys, building contacts and approval needed to reach shared plumbing.' },
  { question: 'Is the Plumbing Business Licensed?', answer: `Antons Enterprises Pty Ltd operates this service under NSW contractor licence ${site.licence}.` },
];

const rawAreas = [
  ['manly', 'Manly', '2095', '-33.7972,151.2887', 'team-fleet-landscape', 'Antons plumbing team standing beside blue service vehicles', ['freshwater', 'brookvale', 'dee-why'], 'Manly combines apartments, strata buildings, terraces, commercial tenancies and freestanding homes. Parking windows, basement access and shared services are useful details when arranging plumbing work.', 'For apartments or commercial premises, confirm loading access, building contacts and whether the fault may involve shared plumbing. In older or tightly built properties, describe isolation points and outside access.'],
  ['dee-why', 'Dee Why', '2099', '-33.7517,151.2880', 'drain-camera-inspection', 'Drain camera equipment in use at an outdoor access point', ['brookvale', 'curl-curl', 'collaroy'], 'Dee Why includes high-rise apartments, walk-up blocks, retail properties and detached homes. Shared stacks, basement parking and strata approvals can shape access.', 'Tell us whether the issue affects one lot or several and whether building management needs to provide access. For houses, mention side access, external drains and recent landscaping.'],
  ['brookvale', 'Brookvale', '2100', '-33.7611,151.2748', 'team-preparing-tools', 'Antons plumber selecting organised tools from a service vehicle', ['dee-why', 'freshwater', 'frenchs-forest'], 'Brookvale has industrial units, retail sites, apartments and residential streets. Trading hours, loading access and shared services should be explained when booking.', 'For commercial properties, identify the tenancy, isolation arrangements and any site induction requirements. For residential work, include strata contacts and parking details.'],
  ['freshwater', 'Freshwater', '2096', '-33.7780,151.2850', 'shower-repair', 'Antons plumber working inside a tiled shower', ['manly', 'curl-curl', 'brookvale'], 'Freshwater includes apartments, semis and freestanding homes on compact streets. Limited parking, shared walls and narrow side access can affect equipment movement.', 'Let us know about stairs, visitor parking, strata contacts and whether the affected plumbing is inside, below the building or outdoors. Photos can help explain tight access.'],
  ['curl-curl', 'Curl Curl', '2096', '-33.7683,151.2917', 'stormwater-repair', 'Antons plumber inspecting pipework through an outdoor drain opening', ['freshwater', 'dee-why', 'brookvale'], 'Curl Curl properties include established homes, duplexes and renovated coastal houses. Outdoor drainage, sloping blocks and exposed pipework can affect assessment.', 'Describe whether the issue changes during rain, affects outside drains or appears near retaining walls and landscaped areas. Note the location of inspection openings.'],
  ['narrabeen', 'Narrabeen', '2101', '-33.7136,151.2977', 'drain-cleaning-street-1', 'Plumber operating drain-clearing equipment beside a service vehicle', ['collaroy', 'warriewood', 'mona-vale'], 'Narrabeen includes lakeside and coastal homes, apartment buildings and mixed-use properties. Ground conditions, shared drainage and outdoor access can be relevant.', 'Mention whether symptoms change after rain, whether the property has a shared garage and where outside drainage points are located. Confirm strata common-area access.'],
  ['collaroy', 'Collaroy', '2097', '-33.7323,151.3004', 'service-van-rain', 'Blue Antons plumbing vehicle outside a residential property', ['dee-why', 'narrabeen', 'curl-curl'], 'Collaroy combines apartment buildings, hillside homes and established residential streets. Stairs, sloping access and shared services may need consideration.', 'Tell us about steep driveways, internal stairs, basement entry and any strata contact. For drainage, note whether symptoms are inside, outside or lower down the property.'],
  ['mona-vale', 'Mona Vale', '2103', '-33.6760,151.3034', 'fleet-driveway', 'Blue Antons plumbing van parked on a residential driveway', ['warriewood', 'newport', 'narrabeen'], 'Mona Vale includes family homes, apartments, medical and retail premises, and properties with generous outdoor areas. External service locations can vary widely.', 'For larger sites, explain which building is affected. For homes, note side access, garden areas near pipe routes and whether one fixture or the whole property is affected.'],
  ['warriewood', 'Warriewood', '2102', '-33.6906,151.2955', 'drain-pipe-install-2', 'New PVC drainage pipe installed in an excavated garden trench', ['mona-vale', 'narrabeen', 'newport'], 'Warriewood has newer estates, apartments, commercial sites and established homes. Easements, landscaped yards and basement access are useful context.', 'Mention whether plans, strata information or builder details are available. Driveway clearance and side access help when larger drain equipment may be needed.'],
  ['frenchs-forest', 'Frenchs Forest', '2086', '-33.7505,151.2290', 'excavation-side-access', 'Antons plumber excavating beside a home to reach underground pipework', ['forestville', 'belrose', 'brookvale'], 'Frenchs Forest includes established homes, renovations, medical precinct properties and bushland-edge streets. Trees, slopes and longer pipe runs can influence access.', 'Describe trees, retaining walls, driveways and inspection points near the symptoms. For commercial premises, include building contacts and restricted access times.'],
  ['forestville', 'Forestville', '2087', '-33.7620,151.2150', 'trench-team', 'Antons plumber standing in a trench during pipework repairs', ['frenchs-forest', 'belrose', 'brookvale'], 'Forestville is largely residential, with established homes, townhouses and sloping sites near bushland. Older pipe routes and under-house access may be relevant.', 'Let us know whether the home is on piers, has a lower level or sits on a slope. For outside drainage, describe mature trees, access gates and where symptoms appear.'],
  ['belrose', 'Belrose', '2085', '-33.7390,151.2110', 'trench-pipework', 'Underground drainage repair with new pipework and gravel bedding', ['frenchs-forest', 'forestville', 'warriewood'], 'Belrose includes freestanding homes, retirement living, retail and light-commercial properties. Site size, shared facilities and outdoor pipe routes can affect planning.', 'For managed properties, confirm the site contact and access process. For homes, mention long driveways, gates, pets and whether the fault is outside or inside.'],
  ['newport', 'Newport', '2106', '-33.6567,151.3196', 'drain-camera-backyard', 'Plumber using drain camera equipment in a residential backyard', ['mona-vale', 'avalon-beach', 'warriewood'], 'Newport has coastal homes, apartments and steep residential blocks. Driveway grade, stairs, subfloor access and outdoor pipe routes should be considered.', 'Tell us whether equipment can travel down the driveway or side path and whether the issue is above or below street level. Photos are useful on steep sites.'],
  ['avalon-beach', 'Avalon Beach', '2107', '-33.6357,151.3299', 'team-fleet-wide', 'Antons team standing with three blue plumbing service vehicles', ['newport', 'mona-vale', 'warriewood'], 'Avalon Beach includes coastal homes, apartments, older cottages and properties on sloping, leafy blocks. Distance from parking can matter for equipment access.', 'Describe steps, steep driveways, locked gates, subfloor access and outside inspection openings. For managed properties, confirm who can authorise access and work.'],
] as const;

const areaProcessMedia = {
  manly: ['service-truck-action', 'Antons plumber preparing drain-clearing equipment beside a blue service vehicle'],
  'dee-why': ['drain-cleaning-street-2', 'Drain-clearing equipment being used beside a Northern Beaches street'],
  brookvale: ['service-truck-rear', 'Rear of an Antons service vehicle displaying its plumbing services'],
  freshwater: ['hot-water-repair', 'Antons plumber completing pipework on an outdoor hot-water system'],
  'curl-curl': ['drain-pipe-install-1', 'New drainage pipework installed in an excavated trench'],
  narrabeen: ['drain-camera-backyard', 'Drain camera equipment being used at a backyard inspection point'],
  collaroy: ['team-founder', 'Antons plumber standing in front of a blue plumbing service vehicle'],
  'mona-vale': ['fleet-lineup', 'Three blue Antons plumbing vehicles lined up together'],
  warriewood: ['trench-pipework', 'Underground drainage repair with pipework laid on gravel bedding'],
  'frenchs-forest': ['team-fleet-portrait', 'Antons plumbing team standing with blue service vehicles'],
  forestville: ['fleet-wide', 'Antons plumbing service vehicles ready for local work'],
  belrose: ['drain-cleaning-street-1', 'Plumber operating drain-clearing equipment beside an Antons vehicle'],
  newport: ['excavation-side-access', 'Antons plumber excavating beside a home to reach underground pipework'],
  'avalon-beach': ['shower-repair', 'Antons plumber completing plumbing work inside a tiled shower'],
} as const;

const areaHeroHooks = {
  manly: 'Licensed plumbing help for Manly apartments, strata buildings, terraces and homes. We assess the accessible system, explain practical repair options and agree on the scope before work begins.',
  'dee-why': 'Licensed plumbing help for Dee Why high-rise apartments, walk-up blocks, shops and houses, with careful fault assessment, clear access planning and repair options explained before work begins.',
  brookvale: 'Licensed plumbing support for Brookvale industrial units, retail premises, apartments and homes. We plan around site access and trading needs, assess the fault and explain the practical next step.',
  freshwater: 'Licensed plumbing help for Freshwater apartments, semis and homes on compact streets. We plan for parking and tight access, assess the symptoms carefully and explain repair options before agreed work begins.',
  'curl-curl': 'Licensed plumbing help for Curl Curl homes, duplexes and renovated coastal properties. We consider slopes, outdoor drainage and access, then explain the findings and practical repair options.',
  narrabeen: 'Licensed plumbing help for Narrabeen lakeside homes, apartments and mixed-use properties. We assess indoor and outdoor drainage conditions, plan for shared access and explain the next practical step.',
  collaroy: 'Licensed plumbing help for Collaroy apartments and hillside homes. We plan for stairs, slopes, basement access and shared plumbing, with clear findings and repair options before work starts.',
  'mona-vale': 'Licensed plumbing help for Mona Vale homes, apartments, medical and retail premises. We identify the affected building or service, assess accessible plumbing and agree on a clear repair scope.',
  warriewood: 'Licensed plumbing help for Warriewood estates, apartments, commercial sites and established homes. We consider easements, landscaping and basement access before explaining practical repair options.',
  'frenchs-forest': 'Licensed plumbing help for Frenchs Forest homes, renovations and precinct properties. We account for slopes, trees, longer pipe runs and access, then explain the practical repair path.',
  forestville: 'Licensed plumbing help for Forestville homes, townhouses and sloping sites. We consider older pipe routes and under-house access, assess the fault and explain the agreed repair scope.',
  belrose: 'Licensed plumbing help for Belrose homes, retirement living, retail and light-commercial properties. We plan around gates, shared facilities and outdoor pipe routes, then explain the next practical step.',
  newport: 'Licensed plumbing help for Newport coastal homes, apartments and steep blocks. We plan for driveways, stairs and subfloor access, assess the accessible system and explain repair options clearly.',
  'avalon-beach': 'Licensed plumbing help for Avalon Beach coastal homes, apartments and leafy sloping blocks. We plan for distance from parking, gates and subfloor access, then agree on a practical repair scope.',
} as const;

export const areas = rawAreas.map(([slug, name, postcode, coords, image, alt, neighbours, intro, context]) => {
  const [processImage, processAlt] = areaProcessMedia[slug];
  return {
    slug, name, postcode, coords,
    image: `/images/${image}.webp`, imageSmall: `/images/${image}-720.webp`, alt, neighbours, intro, context,
    processImage: `/images/${processImage}.webp`, processImageSmall: `/images/${processImage}-720.webp`, processAlt,
    hook: areaHeroHooks[slug],
    title: `Plumber ${name} NSW ${postcode} | Northern Beaches`,
    description: `Call about plumbing in ${name} NSW ${postcode}: blocked drains, hot water, leaks, gas fitting and repairs. Confirm coverage for your address.`,
    faqs: areaFaqs(name),
  };
});

export const homeFaqs: Faq[] = [
  { question: 'Which Northern Beaches Suburbs Do You Cover?', answer: 'Suggested coverage includes Manly, Dee Why, Brookvale, Freshwater, Curl Curl, Narrabeen, Collaroy, Mona Vale, Warriewood, Frenchs Forest, Forestville, Belrose, Newport and Avalon Beach. Call with your full address to confirm current coverage.' },
  { question: 'Are You a Licensed Plumbing Business?', answer: `Yes. Antons Enterprises Pty Ltd operates The Northern Beaches Plumber under NSW contractor licence ${site.licence}.` },
  { question: 'Can I Call About an Urgent Plumbing Problem?', answer: 'Yes. Explain the fault, any immediate safety concern, the address and access details. The team will confirm the next available step.' },
  { question: 'Can You Help With Both Drains and Hot Water?', answer: 'Services include blocked drains, hot-water systems, general repairs, gas fitting, leak detection and urgent plumbing faults.' },
  { question: 'What Information Should I Have When I Call?', answer: 'Share the full address, property type, affected fixtures, when the problem began and any parking, strata or access issue. Photos can help.' },
  { question: 'Do You Promise a Set Arrival Time?', answer: 'No arrival time is promised before the problem, address and current schedule are reviewed. The clearest available timing is provided during booking.' },
];

export const reviews = [
  { name: 'Maja', text: 'A friendly, knowledgeable team that took time to assess and explain the work, complete the repair and give practical advice.' },
  { name: 'Pawan S.', text: 'The team organised a gas hot-water replacement, removed the old unit and completed the installation methodically.' },
  { name: 'Kristen P.', text: 'The team worked around the customer’s schedule, assessed the job thoroughly and communicated respectfully.' },
  { name: 'Warren E.', text: 'The plumber explained the drainage work clearly and showed the inspection results on the camera screen.' },
  { name: 'Stefanie C.', text: 'Professional service with a clear explanation of the problem and the steps taken to resolve it.' },
  { name: 'Emily T.', text: 'Honest service and strong communication that left the customer confident about calling the team again.' },
] as const;

export const serviceFaqs = (service: (typeof services)[number]): Faq[] => [
  { question: `Can I Arrange ${service.name} Across the Northern Beaches?`, answer: 'Call with the full address and a clear description of the issue so coverage and availability can be confirmed.' },
  { question: `What Should I Share About a ${service.name} Problem?`, answer: 'Describe the affected fixtures or system, when the problem began, what changed and any access or safety concern.' },
  { question: 'Will the Cause Be Confirmed Before Work Begins?', answer: 'The plumber assesses the accessible system and explains findings, limitations and the proposed scope before agreed work proceeds.' },
  { question: 'Is the Work Licensed?', answer: `Antons Enterprises Pty Ltd operates this service under NSW contractor licence ${site.licence}.` },
  { question: 'Do You Guarantee an Arrival Time?', answer: 'No fixed arrival time is promised before the address, fault and current schedule are reviewed.' },
];
