import { Product, Brand, CarouselSlide } from './types';

export const BRANDS: Brand[] = [
  {
    name: 'KLÜBER LUBRICATION',
    logoText: 'KLÜBER LUBRICATION',
    logoColor: 'text-[#E0A800]',
    borderColor: 'border-[#E0A800] hover:bg-[#E0A800]/5',
    description: 'Global market leader in specialty lubricants. Klüber Lubrication offers competent tactical and technical lubrication solutions for all industries.',
    established: '1929',
    origin: 'Munich, Germany',
    specialty: 'High-Temperature & Heavy-Duty Specialty Lubricants'
  },
  {
    name: 'OKS',
    logoText: 'OKS LUBRICANTS',
    logoColor: 'text-[#D81E05]',
    borderColor: 'border-[#D81E05] hover:bg-[#D81E05]/5',
    description: 'High-performance specialty lubricants and chemical-technical maintenance products. Certified ISO 9001, ISO 14001 & OHSAS 18001. OKS supports smooth industrial processes and extended asset lifespans across all 7 tribological domains.',
    established: '1978',
    origin: 'Maisach, Germany / Bangalore & Mysore, India',
    specialty: 'Maintenance Aerosols, Specialty Pastes, Greases, High-Performance Oils, Dry Lubricants, Cleaners & Corrosion Protection'
  },
  {
    name: 'FESTO',
    logoText: 'FESTO',
    logoColor: 'text-[#009EE3]',
    borderColor: 'border-[#009EE3] hover:bg-[#009EE3]/5',
    description: 'Leading global supplier of automation technology, industrial control, and pneumatic solutions for manufacturing excellence.',
    established: '1925',
    origin: 'Esslingen, Germany',
    specialty: 'Industrial Automation & Pneumatics'
  },
  {
    name: '3M',
    logoText: '3M',
    logoColor: 'text-[#FF0000]',
    borderColor: 'border-[#FF0000] hover:bg-[#FF0000]/5',
    description: 'Incredible range of industrial abrasives, adhesives, tape solutions, and personal safety equipment for modern factory floors.',
    established: '1902',
    origin: 'Minnesota, USA',
    specialty: 'Industrial Abrasives, Tapes & Adhesives'
  },
  {
    name: 'CORTEC',
    logoText: 'CORTEC',
    logoColor: 'text-[#2E7D32]',
    borderColor: 'border-[#2E7D32] hover:bg-[#2E7D32]/5',
    description: 'Global leader in innovative, environmentally friendly VpCI® and MCI® corrosion control technologies for packaging and metalworking.',
    established: '1977',
    origin: 'Minnesota, USA',
    specialty: 'VCI Corrosion Inhibition & Packaging'
  },
  {
    name: 'ACE',
    logoText: 'ACE',
    logoColor: 'text-[#0D47A1]',
    borderColor: 'border-[#0D47A1] hover:bg-[#0D47A1]/5',
    description: 'Quality developer and manufacturer of industrial deceleration technology, shock absorbers, gas springs, and vibration dampers.',
    established: '1963',
    origin: 'Michigan, USA',
    specialty: 'Shock Absorbers & Deceleration Technology'
  }
];

export const PRODUCTS: Product[] = [
  // --- OKS PRODUCTS ---
  {
    id: 'oks-476',
    name: 'OKS 476',
    brand: 'OKS',
    category: 'Greases',
    description: 'Multipurpose grease for food processing technology. NSF H1 registered grease designed specifically for reliable lubrication of rolling and friction bearings, joints, and linear drives in food, beverage, and pharmaceutical machinery.',
    image: 'bg-gradient-to-tr from-rose-50 to-rose-100 text-rose-600',
    features: [
      'NSF H1 registered for use in food processing areas',
      'Good resistance to hot and cold water as well as disinfectants',
      'Excellent wear protection and high load-carrying capacity',
      'Optimized formulation with highly stable synthetic base elements'
    ],
    applications: [
      'Food packaging machinery bearings',
      'Beverage bottling plant conveyor systems',
      'Rolling and friction bearings under light/medium loads',
      'Pharmaceutical manufacturing equipment'
    ],
    specifications: {
      'Base Oil': 'Polyalphaolefin (PAO)',
      'Thickener': 'Aluminum complex soap',
      'NLGI Grade': '2',
      'Service Temp': '-30 °C to +110 °C',
      'Color': 'Light yellowish / transparent beige'
    }
  },
  {
    id: 'kluberplex-bem-41-132',
    name: 'Klüberplex BEM 41-132',
    brand: 'Klüber',
    category: 'Greases',
    description: 'Heavy-duty specialty grease for rolling bearings. Designed for bearings subjected to high loads, vibrations, oscillating motion, or shock impacts. Protects outstandingly against friction oxidation and micro-wear.',
    image: 'bg-gradient-to-tr from-amber-100 to-yellow-200 text-amber-700',
    features: [
      'Excellent mechanical-shear stability under fluctuating loads',
      'High thermal stability for elevated continuous operation',
      'Prevents wear and micro-fretting corrosion on ball tracks',
      'Superb water resistance and sealing capability'
    ],
    applications: [
      'Wind turbine rotor and yaw bearings',
      'Electric motor bearings operating under extreme structural vibration',
      'Paper mill and textile manufacturing dry-cylinders',
      'Heavy automotive wheel bearings and chassis grease'
    ],
    specifications: {
      'Base Oil': 'Synthetic hydrocarbon / Mineral oil',
      'Thickener': 'Special lithium soap',
      'Service Temp': '-40 °C to +150 °C',
      'NLGI Grade': '2'
    }
  },
  {
    id: 'festo-pneumatics',
    name: 'Festo Pneumatic Cylinders & Valves',
    brand: 'Festo',
    category: 'Specialty',
    description: 'High-precision double-acting cylinders, proportional valves, air preparation units, and sensors. Designed for seamless execution in automotive, electronics, and food-packaging factory automation.',
    image: 'bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-700',
    features: [
      'Extremely high cycle speeds with minimal friction heat',
      'Premium seals resist chemical washes and extreme dust',
      'Fully modular blocks for custom automation panels',
      'Standardized IO-Link connectivity for real-time sensor feedback'
    ],
    applications: [
      'Automated product pick-and-place lines',
      'Precision sorting gates in high-speed packaging plants',
      'Automotive assembly welding jigs',
      'Pneumatic actuation of chemical mixing valves'
    ]
  },
  {
    id: 'oks-250',
    name: 'OKS 250',
    brand: 'OKS',
    category: 'Pastes',
    description: 'White allround paste, metal-free. High-performance assembly paste for screws, bolts, and sliding joints subjected to extremely high loads or corrosion-prone environments. Prevents seizing, cold-welding, and stick-slip.',
    image: 'bg-gradient-to-tr from-slate-100 to-zinc-200 text-zinc-700',
    features: [
      'Metal-free formulation, safe for stainless steel and alloys',
      'Excellent corrosion protection, resistant to hot and cold water',
      'Optimal friction coefficient to secure correct tension in bolts',
      'Environmentally conscious, free of heavy metals'
    ],
    applications: [
      'Screw connections subjected to high temperatures or corrosive elements',
      'Sliding guides, tracks, and joints in offshore/chemical plants',
      'Chuck lubrication on metalworking lathes',
      'Preventing fretting rust on shafts and hub connections'
    ],
    specifications: {
      'Base Oil': 'Synthetic oil mixture',
      'Solid Lubricants': 'White solid lubricants',
      'Friction Coeff': '0.12 (screw test)',
      'Service Temp': '-40 °C to +1,400 °C',
      'Density': '1.3 g/cm³'
    }
  },
  {
    id: 'klubersynth-gh-6',
    name: 'Klübersynth GH 6 Series',
    brand: 'Klüber',
    category: 'Oils',
    description: 'Synthetic high-temperature gear and circulation oils. Formulated based on premium polyglycol, offering high resistance to ageing, exceptional wear protection, and elevated load-carrying capability under harsh gear stresses.',
    image: 'bg-gradient-to-tr from-yellow-50 to-yellow-100 text-yellow-600',
    features: [
      'Outstanding scuffing load capacity and micropitting resistance',
      'Low friction coefficients optimize efficiency and lower operational temperatures',
      'Significantly longer oil change intervals than mineral-based oils',
      'Superb viscosity-temperature performance across extreme gradients'
    ],
    applications: [
      'Highly loaded spur, bevel, and planetary gearboxes',
      'Worm gears with steel/bronze pairings operating at high slide rates',
      'High-temperature kiln drive systems and crane hoists',
      'Conveyor chain lubrication in steel works and textile ovens'
    ],
    specifications: {
      'Base Oil': 'Polyglycol (PAG)',
      'Viscosity Grades': 'ISO VG 150 to 1000',
      'Service Temp': '-30 °C to +160 °C',
      'Scuffing Load': 'API GL-5 equivalent / FZG > 14'
    }
  },
  {
    id: 'oks-370',
    name: 'OKS 370',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Universal food-grade lubricating oil spray (NSF H1). Viscosity-optimized, fully synthetic oil spray designed for general mechanical elements, chains, and guides in the food, beverage, and packaging industries.',
    image: 'bg-gradient-to-tr from-yellow-50 to-amber-100 text-amber-700',
    features: [
      'NSF H1 registered for direct food environment safety',
      'Neutral smell and taste, highly resistant to water washout',
      'Reduces friction, wear, and protects against corrosion',
      'Extremely high creeping properties for narrow gaps'
    ],
    applications: [
      'Conveyor rollers and transport chains in beverage bottling',
      'Sliding tracks, joints, and guides on packing machines',
      'Fine mechanical hinges and levers in cleanrooms',
      'Sanitary valves, levers, and packaging machinery parts'
    ],
    specifications: {
      'Base Oil': 'Synthetic oil',
      'NSF Registration No': '124384',
      'Service Temp': '-30 °C to +180 °C',
      'Color': 'Colorless / Transparent'
    }
  },
  {
    id: 'kluberpaste-uh1-96-402',
    name: 'Klüberpaste UH1 96-402',
    brand: 'Klüber',
    category: 'Pastes',
    description: 'High-temperature assembly and sealing paste for food and pharmaceutical plants. Free from metal particles, ensuring total safety and cleanliness. Prevents stick-slip at low sliding speeds.',
    image: 'bg-gradient-to-tr from-stone-100 to-amber-100 text-amber-800',
    features: [
      'Exceptional load-carrying and separation capacity under static pressure',
      'Protects screw threads from corrosion, galling, and cold welding',
      'Highly compatible with chemical wash agents and organic cleaning fluids',
      'NSF H1 registered with zero trace heavy-metals'
    ],
    applications: [
      'Threaded joints and bolts in baking and steaming ovens',
      'Connection guides in aseptic packing systems',
      'Press-fit assemblies in beverage processing systems',
      'Anti-seize compound for stainless steel components'
    ],
    specifications: {
      'Base Oil': 'Synthetic ester and hydrocarbon oil',
      'Solid Lubricants': 'White ceramic and non-toxic minerals',
      'Service Temp': '-40 °C to +1,200 °C',
      'NLGI Grade': '2/3'
    }
  },
  {
    id: 'festo-festo-vuvb-solenoid-valve',
    name: 'Festo VUVB Solenoid Valve',
    brand: 'Festo',
    category: 'Specialty',
    description: 'High-performance compact solenoid valve designed for reliable pneumatic control and fast pilot actuation in restricted installation spaces.',
    image: 'bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750',
    features: [
      'Compact design for tight manifold spaces',
      'Extremely fast actuation response times',
      'Low power consumption solenoid coil',
      'Long mechanical service life'
    ],
    applications: [
      'Pneumatic pilot control in automation',
      'Packaging machine gates and sorting lines',
      'Direct pick-and-place assembly systems',
      'Process automation manifolds'
    ],
    specifications: {
      'Valve Function': '5/2-way or 3/2-way single solenoid',
      'Flow Rate': 'Up to 1,000 l/min',
      'Operating Pressure': '1.5 bar to 8 bar',
      'Operating Voltage': '24V DC'
    },
    hsnCode: '84812000'
  },
  {
    id: 'oks-601',
    name: 'OKS 601',
    brand: 'OKS',
    category: 'Sprays',
    description: 'High-capillary action rust penetrant and lubricant spray. Extremely low viscosity allows deep penetration into the tightest tolerances to dissolve rust, free seized components, and prevent further corrosion.',
    image: 'bg-gradient-to-tr from-blue-50 to-indigo-100 text-indigo-700',
    features: [
      'Exceptional capillary action for ultra-fast penetration',
      'Releases seized screws, bolts, hinges, and sliders',
      'Displaces moisture and provides lasting anti-rust barrier',
      'Free of silicones and heavy metal compounds'
    ],
    applications: [
      'Dismantling rusty or seized machine components, joints, and studs',
      'Lubrication of fine-mechanical guides and precision instruments',
      'Moisture displacement on electrical contacts and ignitions',
      'Temporary rust-proofing for machined steel parts'
    ],
    specifications: {
      'Base Oil': 'Mineral oil mix',
      'Viscosity at 40°C': 'approx. 3 mm²/s',
      'Service Temp': '-30 °C to +50 °C',
      'Color': 'Light brown'
    }
  },
  {
    id: 'klubersynth-uh1-14-151',
    name: 'Klübersynth UH1 14-151',
    brand: 'Klüber',
    category: 'Greases',
    description: 'Synthetic lubricating grease for the food processing and pharmaceutical industries. Designed to comply with FDA regulations and certified ISO 21469, supporting maximum safety in cleanroom applications.',
    image: 'bg-gradient-to-tr from-slate-50 to-amber-50 text-yellow-700',
    features: [
      'Fully synthetic base oil ensuring excellent low-temperature torque',
      'Highly resistant to wash-down water, cleaning solvents, and steam',
      'Excellent wear protection and anti-corrosion barrier',
      'Neutral scent and taste, completely toxicologically inert'
    ],
    applications: [
      'Rolling and sliding bearings in meat slicers, pasteurizers, and ovens',
      'Seals and valves in bottling plants and canning installations',
      'Cleanroom gear assemblies in pharmaceutical production lines',
      'General food processing transport chains'
    ],
    specifications: {
      'Base Oil': 'Synthetic hydrocarbon',
      'Thickener': 'Aluminum complex soap',
      'Certification': 'NSF H1 / Kosher / Halal / ISO 21469',
      'Service Temp': '-45 °C to +120 °C'
    }
  },
  {
    id: 'oks-511',
    name: 'OKS 511',
    brand: 'OKS',
    category: 'Sprays',
    description: 'High-temperature MoS₂ dry-film lubricant spray. Forms a dry, thin slide film that resists extreme pressures, radiation, vacuum, and temperatures where liquid lubricants would burn or fail.',
    image: 'bg-gradient-to-tr from-slate-100 to-slate-200 text-slate-800',
    features: [
      'Extremely low friction coefficient with pure MoS₂',
      'Resists dust, dirt, and heavy abrasive sand build-ups',
      'Prevents stick-slip, wear-in damage, and scoring',
      'Maintains dry lubricity under vacuum and extreme thermal stress'
    ],
    applications: [
      'Dry lubrication of high-temperature kiln chains and oven slides',
      'Pre-treatment of heavily loaded sliding guides and tracks',
      'Lubrication in wood-processing and sand-blasting lines',
      'Coating of tools for metalforming and deep-drawing'
    ],
    specifications: {
      'Active Ingredient': 'Molybdenum disulfide (MoS₂)',
      'Binder': 'Inorganic binder',
      'Service Temp': '-180 °C to +450 °C',
      'Drying Time': 'approx. 10 minutes at 20°C'
    }
  },
  {
    id: 'oks-2611',
    name: 'OKS 2611',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Industrial strength universal cleaner and degreaser spray. Rapidly dissolves oily, greasy, and resinous soils, leaving completely clean, dry, residue-free surfaces ready for subsequent adhesive bonding or lubrication.',
    image: 'bg-gradient-to-tr from-emerald-50 to-emerald-100 text-emerald-700',
    features: [
      'Ultra-fast evaporation with zero residues or deposits',
      'Excellent degreasing power on synthetic resins and tar',
      'Safe on most structural metals and solvent-resistant plastics',
      'Convenient aerosol spray pattern flushes away heavy grime'
    ],
    applications: [
      'Degreasing friction clutches, brake systems, and gear teeth',
      'Surface preparation before applying assembly pastes or dry films',
      'Cleaning heavy machinery components from dried-out grease crusts',
      'Degreasing electrical connections and electronic contacts'
    ],
    specifications: {
      'Active Ingredients': 'Solvent mixture',
      'Evaporation Rate': 'extremely rapid',
      'Density at 20°C': '0.74 g/cm³',
      'Color': 'Colorless / Transparent'
    }
  },
  {
    id: 'oks-91361',
    name: 'OKS 91361 Mould Release Spray (Silicone-Based)',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Silicone-based mould release spray and high-efficiency parting agent for injection moulds and plastic extrusion. Creates an anti-static protective film preventing sticking of plastic sheets, and lubricates cutting edges of tools for paper, cardboard, and vanes.',
    image: 'bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-700',
    features: [
      'Colourless, chemically neutral, and non-staining',
      'Non-toxic, anti-static protective spray-on film',
      'Versatile parting and lubricating aid for rubber/plastic on metal friction',
      'Prevents sticking of plastic sheets during high-speed process lines'
    ],
    applications: [
      'Parting agent for injection moulds and extrusion of plastics',
      'Protective film preventing sticking of plastic sheets in process',
      'Lubricant for cutting edges of tools for cutting paper, cardboards and vanes',
      'Lubrication of rubber and plastic components'
    ],
    specifications: {
      'Base Oil': 'Silicone-based formulation',
      'Film Type': 'Thin, dry, colourless & anti-static',
      'Chemical Nature': 'Chemically neutral & non-toxic',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-451',
    name: 'OKS 451 Adhesive Chain Lubricant Spray (Mox-Active)',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Adhesive chain lubricant spray with Mox-Active complex for simultaneous internal and external lubrication. Designed for roller chains, small gear drives, wire ropes, and machine parts operating under water, salt water, steam, or dirty/dusty atmospheres.',
    image: 'bg-gradient-to-tr from-amber-50 to-orange-100 text-orange-700',
    features: [
      'Formulated with Mox-Active complex compounds for superior wear protection',
      'Extremely adhesive and resistant to water, salt water, and steam',
      'High penetrating properties to reach internal pin-bush joints',
      'Long-term corrosion protection and noise dampening'
    ],
    applications: [
      'Roller chains as in forklifts, motorcycles, and overhead conveyors',
      'Chains operating under water, salt water, or steam',
      'Chains operating in dirty / dusty atmospheres',
      'Long-term lubrication of small gear drives, bearings, locking mechanisms, hinges',
      'Lubrication and corrosion protection of wire ropes of all kinds',
      'Lubrication of sliding tracks, column guides, bowden cables, clutch/brake levers'
    ],
    specifications: {
      'Active Ingredients': 'Mox-Active complex compounds',
      'Water Resistance': 'Resistant to water, salt water & steam',
      'Penetration': 'High creeping capillary action for internal pins',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-641',
    name: 'OKS 641 Multi-Functional Fluid Spray',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Multi-functional maintenance fluid spray for loosening rust, corrosion protection, dismantling seized screws and bolts, eliminating squeaking noises, and displacing moisture in wet electrical devices and precision components.',
    image: 'bg-gradient-to-tr from-sky-50 to-blue-100 text-blue-700',
    features: [
      'Single handy product for multi-purpose maintenance tasks',
      'Displaces moisture and restores wet electrical contacts',
      'Loosens rust rapidly and inhibits corrosion effectively',
      'Amazing penetrating property reaches otherwise inaccessible areas'
    ],
    applications: [
      'Loosening of rust, corrosion protection and care of metal parts',
      'Easy and quick dismantling of seized or corroded screws, bolts, and joints',
      'Eliminating squeaking noises from industrial appliances and linkages',
      'Displacing moisture in electrical devices, terminals, and switches'
    ],
    specifications: {
      'Functions': 'Rust release, moisture displacement, contact care & corrosion protection',
      'Penetration': 'High capillary action',
      'Corrosion Barrier': 'Yes, long-lasting protective film',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-2101',
    name: 'OKS 2101 Anti-Corrosion Wax Coating Spray',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Anti-corrosion wax coating spray that forms a very thin, dry, and colourless protective film over finely machined metal surfaces, tools, dies, moulds, and spares during storage and transport under industrial, tropical, and marine climates.',
    image: 'bg-gradient-to-tr from-emerald-50 to-teal-100 text-teal-700',
    features: [
      'Very thin, dry, and colourless protective wax film',
      'Resistant to industrial atmosphere, tropical climate, and marine conditions',
      'Coated parts can be welded or assembled directly without prior cleaning',
      'Safe for use on painted surfaces and does not harm rubber or plastics'
    ],
    applications: [
      'Protection of finely machined metal surfaces such as tools, dies, moulds, spares, machines',
      'Protection of goods during overseas storage and marine transport',
      'Preservation of finished components in tropical and high-humidity climates'
    ],
    specifications: {
      'Film Type': 'Thin, dry, colourless protective wax coating',
      'Direct Assembly': 'Weldable and assembleable without pre-degreasing',
      'Compatibility': 'Safe on rubber, plastics, and painted surfaces',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-1521',
    name: 'OKS 1521 Silicone-Free Mould Release Agent',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Silicone-free and chlorinated solvent-free mould release agent and welding anti-spatter spray. Ensures clean separation in plastic processing for printed or painted parts, and increases welding nozzle durability.',
    image: 'bg-gradient-to-tr from-violet-50 to-purple-100 text-purple-700',
    features: [
      '100% silicone-free and chlorinated solvent-free',
      'Environmentally friendly - fully compliant with European export bans on chlorinated solvents',
      'Allows easy post-mould painting, metallizing, and printing on plastic parts',
      'Dual use as welding anti-spatter with optimum coverage of 50 sq. ft. per can'
    ],
    applications: [
      'Clean separation of plastic material from moulds in processing printed/painted plastics',
      'Welding industry (electric and shielded arc welding) as anti-spatter spray',
      'Welding nozzle spray to avoid obstruction of pistol orifices in automatic welding lines'
    ],
    specifications: {
      'Formulation': 'Silicone-free, chlorinated solvent-free',
      'Coverage': 'Optimum surface coverage: 50 sq. ft. per can',
      'Export Compliance': 'Complies with European chemical directives',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-2621',
    name: 'OKS 2621 Contact Cleaner Spray (Non-Live)',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Precision contact cleaner spray for non-live electrical equipment. Rapidly removes dust, flux, and light contamination with zero residues, ensuring optimal conductivity on circuit breakers, PCBs, and distribution boxes.',
    image: 'bg-gradient-to-tr from-blue-50 to-indigo-100 text-indigo-700',
    features: [
      'Instant cleaning with completely residue-free evaporation',
      'Harmless to insulating materials and electronic plastics',
      'Odourless and evaporates quickly without over-freezing',
      'Ideal support for after-sales electronics maintenance'
    ],
    applications: [
      'Distribution boxes and switchgear panels (de-energized)',
      'Circuit breakers in industrial and automobile sectors',
      'Electronic components such as PCBs, regulators, meters, and switching networks'
    ],
    specifications: {
      'Usage Condition': 'For de-energized / non-live circuits only',
      'Evaporation': 'Fast, zero residue, no over-freezing',
      'Dielectric Safety': 'Harmless to insulation & plastics',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-92621',
    name: 'OKS 92621 Safe LC Spray (Live Circuits up to 440V)',
    brand: 'OKS',
    category: 'Sprays',
    description: 'CFC-free contact cleaner spray engineered specifically for live electrical circuits up to 440 V. Cleans distribution boxes, circuit breakers, and PCBs without requiring machine downtime.',
    image: 'bg-gradient-to-tr from-amber-50 to-yellow-100 text-amber-700',
    features: [
      'Can be safely sprayed directly on live circuits up to 440 V',
      'Zero ozone depleting potential (CFC-free eco formula)',
      'Instant cleaning and free of residues with quick evaporation without over-freezing',
      'Completely harmless to insulating materials, varnishes, and electronic plastics'
    ],
    applications: [
      'Cleaning live electrical equipment such as distribution boxes and switchboards up to 440V',
      'Industrial circuit breakers and motor control centres without plant shutdown',
      'PCBs, regulators, meters, and telecom switching networks under continuous operation'
    ],
    specifications: {
      'Live Voltage Rating': 'Approved for live circuits up to 440 V',
      'Ozone Depletion': 'Zero ozone depleting potential (ODP = 0)',
      'Evaporation': 'Rapid, non-conductive, residue-free',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-2601',
    name: 'OKS 2601 Cleaner & Degreaser Spray',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Powerful cleaner and degreaser spray combining pure solvent liquid with high-pressure aerosol jet action to remove brake fluid, oily residues, resin crusts, and adhesives from metal surfaces and bearings before treatment.',
    image: 'bg-gradient-to-tr from-emerald-50 to-teal-100 text-teal-700',
    features: [
      'Extremely pure cleaning liquid with no corroding effect on metals or glasses',
      'Aerosol jet action mechanically assists rapid soil flushing',
      'Economical and saves extensive maintenance time',
      'Easily dissolves brake fluid, dried oil residues, resin crusts, and adhesives'
    ],
    applications: [
      'Cleaning and degreasing metal surfaces prior to surface coating or bonding',
      'Degreasing oily, greasy components: ball bearings, guideways, bolts, chains, hinges',
      'Brake system overhaul and clutch plate cleaning'
    ],
    specifications: {
      'Action': 'Pure chemical solvency + high-pressure aerosol jet',
      'Corrosiveness': 'Non-corrosive to all metals and glasses',
      'Soil Removal': 'Brake fluids, resins, hardened greases & adhesives',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-2901',
    name: 'OKS 2901 Belt Dressing Spray',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Specialized belt dressing spray for all types of round and V-belts. Prevents belt squeaking, slippage, drying out, embrittlement, and cracking, considerably prolonging belt service life while adhering firmly even at high rotation speeds.',
    image: 'bg-gradient-to-tr from-rose-50 to-orange-100 text-orange-700',
    features: [
      'Enhances belt traction grip without making the belt tacky or sticky',
      'Prevents squeaking, slip, drying out, embrittlement, and cracking',
      'Extremely well adhering even under high centrifugal speeds',
      'Can be applied on both new and existing in-service belts to prolong life'
    ],
    applications: [
      'Round and V-belts on industrial blowers, compressors, pumps, and rolling mills',
      'Agricultural and textile drive belts',
      'Conveyor belt pulley drive interfaces'
    ],
    specifications: {
      'Belt Types': 'Round belts, V-belts, flat transmission belts',
      'Adhesion': 'Centrifugal-resistant, non-sticky grip enhancer',
      'Protection': 'Anti-slip, anti-cracking, anti-drying',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-91621',
    name: 'OKS 91621 Anti-Spatter Welding Spray',
    brand: 'OKS',
    category: 'Sprays',
    description: 'High-efficiency anti-spatter spray for manual, automatic, and semi-automatic welding. Extends welding nozzle life, ensures free wire feed, and allows easy removal of weld spatter by simple brushing without chiseling or grinding.',
    image: 'bg-gradient-to-tr from-orange-50 to-red-100 text-red-700',
    features: [
      'Extends welding nozzle lifespan and supports unobstructed wire flow',
      'Allows quick removal of weld spatter by light brushing',
      'Eliminates the need for tedious chiseling, grinding, or wire brushing after welding',
      'Prevents obstruction of automated robotic welding pistol orifices'
    ],
    applications: [
      'MIG/MAG and shielded arc welding torches and nozzles',
      'Workpieces and jigs in automotive and structural fabrication',
      'Automatic and semi-automatic robotic welding installations'
    ],
    specifications: {
      'Application': 'Manual & automated arc welding anti-spatter',
      'Post-Weld Cleaning': 'Effortless removal with simple brush',
      'Nozzle Protection': 'Prevents spatter bridging & wire jamming',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-9361',
    name: 'OKS 9361 Heavy-Duty Corrosion Inhibitor',
    brand: 'OKS',
    category: 'Sprays',
    description: 'Oil-based, heavy-duty corrosion inhibitor spray providing long-term barrier protection for semi-finished and finished machines, spares, bearings, shafts, and precision electronic injection moulds under harsh tropical, coastal, and marine environments.',
    image: 'bg-gradient-to-tr from-slate-100 to-zinc-200 text-zinc-800',
    features: [
      'Heavy-duty protection in extreme coastal and marine atmospheres',
      'Resistant to UV rays and environmental degradation',
      'Free from nitrites, phosphorus, chromates, and heavy metals',
      'High economic efficiency with low consumption (1 kg covers 10 to 20 m²)'
    ],
    applications: [
      'Long-term preservation of semi-finished and finished machines, components, tools, spares, bearings, shafts during ocean freight and tropical storage',
      'Protection of plastic injection moulds used for precision electronic components'
    ],
    specifications: {
      'Base': 'Oil-based heavy-duty inhibitor',
      'UV Resistance': 'UV-stable protective film',
      'Eco Profile': 'Free from nitrites, phosphorus, chromates & heavy metals',
      'Coverage': '1 kg covers 10 - 20 m²',
      'Packaging': 'Aerosol Spray Can'
    }
  },
  {
    id: 'oks-1110',
    name: 'OKS 1110',
    brand: 'OKS',
    category: 'Greases',
    description: 'Multi-silicone grease, highly versatile and extremely safe. NSF H1 registered and approved for drinking water systems. Excellent sealing properties, highly resistant to temperature fluctuations and chemicals.',
    image: 'bg-gradient-to-tr from-sky-50 to-sky-100 text-sky-600',
    features: [
      'No drying out, bleeding, or odor transfer',
      'Superior resistance to hot/cold water, steam, and ozone',
      'Neutral toward plastics, elastomers, and EPDM seals',
      'Meets drinking water standards (DVGW, WRAS, ACS)'
    ],
    applications: [
      'Lubrication and sealing of sanitary taps, valves, and seals',
      'Seals in espresso machines and commercial food preparation devices',
      'Glass joints in chemical laboratories',
      'O-rings and rubber sleeves in pneumatic systems'
    ],
    specifications: {
      'Base Oil': 'Polydimethylsiloxane (Silicone oil)',
      'NLGI Grade': '3',
      'Service Temp': '-40 °C to +200 °C',
      'Viscosity': '9,500 mm²/s'
    }
  },

  // --- OTHER INDUSTRIAL BRANDS ---
  {
    id: '3m-abrasives',
    name: '3M Cubitron™ II Abrasive Discs & Tapes',
    brand: '3M',
    category: 'Specialty',
    description: 'Precision-shaped ceramic grain abrasive wheels and heavy-duty VHB industrial tapes. Deliver rapid cut-rates, extremely long product life, and unmatched bonding strength on critical metal surfaces.',
    image: 'bg-gradient-to-tr from-red-50 to-red-100 text-red-600',
    features: [
      'Patented self-sharpening triangular ceramic micro-grains',
      'Significantly lower grinding temperatures avoid metal deformation',
      'VHB tape bonds metals, composites, and glass with permanent strength',
      'Reduces labor time by replacing mechanical rivets and welds'
    ],
    applications: [
      'Weld grinding, stock removal, and beveling on heavy steel beams',
      'Finishing turbine blades and aero-engine compressor sections',
      'Structural bonding of panels in vehicles, trailers, and elevators',
      'Industrial protective equipment and safety masking'
    ]
  }
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    title: 'ACS CORPORATION',
    highlightText: 'Powering Industry. Enabling Growth.',
    subtitle: 'POWERING INDUSTRY • ENABLING GROWTH',
    description: 'Offering global market leading OKS Specialty Lubricants and Klüber Lubrication products. Supplying premium synthetic greases, gear oils, anti-seize pastes, and maintenance sprays for maximum uptime and efficiency.',
    bgGradient: 'from-slate-900 via-blue-950 to-slate-900',
    imageAccent: 'border-[#009EE3]'
  },
  {
    title: 'OKS LUBRICANTS',
    highlightText: 'Specialty Chemical Solutions for Hard Conditions',
    subtitle: 'REDUCING FRICTION & WEAR',
    description: 'Explore high-performance greases and pastes certified for extreme speeds, pressures, and food processing environments (NSF H1). Maximize lifetime for rolling and sliding bearings under extreme stresses.',
    bgGradient: 'from-slate-900 via-rose-950 to-slate-900',
    imageAccent: 'border-[#D81E05]'
  },
  {
    title: 'KLÜBER LUBRICATION',
    highlightText: 'Tailor-Made Lubricant Engineering',
    subtitle: 'MAXIMIZING MECHANICAL EFFICIENCY',
    description: 'Global industry standard gear oils, high-temp chain lubes, and rolling bearing greases. Lower energy consumption, increase maintenance cycles, and safeguard your production lines against catastrophic wear.',
    bgGradient: 'from-slate-900 via-amber-950 to-slate-900',
    imageAccent: 'border-[#E0A800]'
  }
];

export const CORE_VALUES = [
  {
    title: 'Authentic & Quality Sourced',
    description: 'We are committed to supplying quality lubricants sourced from verified production lines with valid manufacturer documentation and COA.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Expert Technical Advisory',
    description: 'Our certified tribology engineers help analyze your machinery operating speed, temperature, and environmental factors to suggest the optimal lubricant grade.',
    icon: 'UserCheck'
  },
  {
    title: 'Prompt Delivery & Inventory',
    description: 'We maintain extensive stocks of high-demand OKS and Klüber products in our temperature-controlled warehouses to ensure immediate dispatches.',
    icon: 'Truck'
  },
  {
    title: 'Compliance & Safety Certifications',
    description: 'All our food-grade lubricants carry authentic NSF H1, Kosher, Halal, and ISO 21469 certificates for full auditing peace of mind.',
    icon: 'Award'
  }
];

export const REVIEWS = [
  {
    quote: 'Switching to Klübersynth GH 6-220 on our primary mill gearboxes reduced operating temperatures by 12°C and cut power draw by 4.2%. ACS Corporation provided outstanding technical support throughout the transition.',
    author: 'Rajesh Sharma',
    role: 'Plant Maintenance Director',
    company: 'Supreme Cement Works'
  },
  {
    quote: 'Our food packaging line requires strict NSF H1 compliance and frequent warm-water washes. OKS 476 and OKS 1110 from ACS have drastically reduced bearing failures without failing any sanitation audits.',
    author: 'Meenakshi Iyer',
    role: 'Quality Assurance Head',
    company: 'Apex Foods & Beverages'
  },
  {
    quote: 'The promptness of ACS Corporation in emergency supply is unmatched. When we had a breakdown in our main steam turbine, they arranged Klüberplex grease within 4 hours, saving us massive potential losses.',
    author: 'Vikramjit Singh',
    role: 'Chief Engineer',
    company: 'Northern Powerhouse Ltd.'
  }
];
