import { Product } from './types';

export const REGISTRY_PRODUCTS: Product[] = [
  {
    id: "kl-ber-isoflex-nbu-15",
    name: "ISOFLEX NBU 15",
    brand: "Klüber",
    category: "Greases",
    description: "High-speed grease for rolling and plain bearings. Designed for spindle bearings in machine tools and textile machines, threaded spindles, and ball screws under high loads.",
    image: "bg-gradient-to-tr from-blue-50 to-indigo-100 text-indigo-700",
    features: ["Exceptional high-speed performance (up to 1.6M speed factor)","Excellent wear protection and load capacity","Outstanding resistance to aging and moisture"],
    applications: ["Machine tool spindles","Textile machinery bearings","Precision threaded shafts"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +130 °C"
    }
  },
  {
    id: "kl-ber-isoflex-topas-lds-18-spc-a",
    name: "ISOFLEX TOPAS LDS 18 SPC A",
    brand: "Klüber",
    category: "Greases",
    description: "Synthetic low-temperature and high-speed grease. Perfect for rolling and plain bearings operating in cold storage or extreme speed conditions.",
    image: "bg-gradient-to-tr from-slate-100 to-indigo-100 text-indigo-800",
    features: ["Low starting and running torque at low temperatures","Excellent water resistance","Protects against corrosion and premature aging"],
    applications: ["Automotive small actuators","Freezer room conveyor bearings","Precision electronic gearboxes"],
    hsnCode: "34031980",
    specifications: {
          "HSN Code": "34031980",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-50 °C to +120 °C"
    }
  },
  {
    id: "kl-ber-isoflex-topas-nb-52",
    name: "ISOFLEX TOPAS NB 52",
    brand: "Klüber",
    category: "Greases",
    description: "Synthetic rolling and plain bearing grease with barium complex soap. Specially formulated for high loads, high speeds, and aggressive environments.",
    image: "bg-gradient-to-tr from-slate-100 to-indigo-100 text-indigo-800",
    features: ["Very good load-carrying capacity","High water and medium resistance","Optimal corrosion protection"],
    applications: ["Electric motors","Steering gear systems","Water pumps under vibration"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-50 °C to +150 °C"
    }
  },
  {
    id: "oks-oks-1035-1",
    name: "OKS 1035/1",
    brand: "OKS",
    category: "Oils",
    description: "Fully synthetic lubricant oil with high-pressure additives. Designed for deep penetration and friction control on fine mechanisms, transport lines, and precision guides.",
    image: "bg-gradient-to-tr from-yellow-50 to-amber-100 text-amber-700",
    features: ["High-pressure performance","Superior creeping and capillary effect","Protects against micro-abrasion"],
    applications: ["Precision machine chains","Mechanical sliding guides","Fine hinges and levers"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-110",
    name: "OKS 110",
    brand: "OKS",
    category: "Pastes",
    description: "High-performance assembly and running-in paste containing Molybdenum Disulfide (MoS2). Provides reliable dry lubrication under severe heavy loads.",
    image: "bg-gradient-to-tr from-slate-800 to-zinc-950 text-slate-100",
    features: ["Prevents scoring and galling","Extremely high load-carrying capacity","Provides emergency running properties"],
    applications: ["Press-fit assemblies","Splined shafts","Threaded joints and bolts"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-35 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-1110-1",
    name: "OKS 1110/1",
    brand: "OKS",
    category: "Greases",
    description: "High-vacuum grease variant of OKS 1110, optimized to maintain absolute seals in high-vacuum systems and lab-grade glassware.",
    image: "bg-gradient-to-tr from-sky-50 to-sky-100 text-sky-600",
    features: ["Low vapor pressure formulation","Maintains seal under vacuum conditions","Chemical and steam resistant"],
    applications: ["High-vacuum gaskets","Laboratory glass taps","Scientific research devices"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-1110-6",
    name: "OKS 1110/6",
    brand: "OKS",
    category: "Greases",
    description: "Special low-temperature version of OKS 1110 silicone grease designed specifically for cold storage systems and outdoor fittings.",
    image: "bg-gradient-to-tr from-cyan-50 to-sky-100 text-sky-700",
    features: ["Enhanced low-temperature fluidity","No stiffening in sub-zero climates","Prevents EPDM gaskets from sticking"],
    applications: ["Cold-storage doors","Refrigerated transports","Outdoor process instrumentation"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-50 °C to +180 °C"
    }
  },
  {
    id: "oks-oks-1110-6-pink",
    name: "OKS 1110/6 Pink",
    brand: "OKS",
    category: "Greases",
    description: "Silicone grease colored pink for easy inspection and verification in busy assembly lines, 1kg packing.",
    image: "bg-gradient-to-tr from-rose-50 to-rose-100 text-rose-600",
    features: ["Distinctive pink color tracing","High sealing capability","Prevents friction-sticking on rubber parts"],
    applications: ["Visual verification seals","Production line components","Sanitary fittings"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-50 °C to +180 °C"
    }
  },
  {
    id: "oks-oks-1111",
    name: "OKS 1111",
    brand: "OKS",
    category: "Sprays",
    description: "High-quality silicone grease spray variant for uniform coating, dielectric insulation, and quick plastic/rubber sealing.",
    image: "bg-gradient-to-tr from-sky-50 to-sky-100 text-sky-600",
    features: ["Easy aerosol application","Excellent insulation properties","Waterproof film creation"],
    applications: ["Electrical connectors","EPDM window gaskets","Door rails and hinges"],
    hsnCode: "34039100",
    specifications: {
          "HSN Code": "34039100",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-1361",
    name: "OKS 1361",
    brand: "OKS",
    category: "Sprays",
    description: "Premium silicone release agent spray for plastic molding, rubber extrusion, and dry surface slipping.",
    image: "bg-gradient-to-tr from-amber-50 to-orange-100 text-orange-600",
    features: ["High temperature stability","Thin, even release layer","Prevents sticking in molds"],
    applications: ["Injection molding machines","Blister packing systems","Conveyor chute protection"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-1521",
    name: "OKS 1521",
    brand: "OKS",
    category: "Sprays",
    description: "Synthetic high-temperature oil spray with MoS2 for lubrication under continuous thermal and mechanical stress.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-blue-700",
    features: ["Contains MoS2 dry lub","Excellent creeping and lubrication","Reduces wear at extreme temperatures"],
    applications: ["Oven chains and tracks","Textile tenter frames","Kiln conveyor bearings"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-200",
    name: "OKS 200",
    brand: "OKS",
    category: "Pastes",
    description: "MoS2 assembly paste for extreme pressures and temperatures. Facilitates smooth machinery break-in and prevents seizing.",
    image: "bg-gradient-to-tr from-slate-700 to-slate-900 text-white",
    features: ["High MoS2 concentration","Prevents fretting rust and stick-slip","Very low coefficient of friction"],
    applications: ["Machine assembly and run-in","Press fits and splined shafts","Heavy thread sliding guides"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-35 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-201",
    name: "OKS 201",
    brand: "OKS",
    category: "Sprays",
    description: "Spray version of OKS 200 assembly paste, delivering high-performance MoS2 protection into hard-to-reach sliding gaps.",
    image: "bg-gradient-to-tr from-slate-700 to-slate-900 text-white",
    features: ["High creeping ability before drying","Sprays on even MoS2 layer","Excellent anti-seize performance"],
    applications: ["Narrow slide clearances","High-temperature bolts","Keyway profiles"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-35 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-2100",
    name: "OKS 2100",
    brand: "OKS",
    category: "Specialty",
    description: "Liquid protective plastic film designed for long-term indoor and outdoor anti-corrosion protection of metal parts.",
    image: "bg-gradient-to-tr from-teal-50 to-teal-100 text-teal-800",
    features: ["Forms transparent, peelable dry film","Protects against salt, humidity, and acid","Easily removable with solvents"],
    applications: ["Machinery parts storage","Steel export shipping preservation","Tool preservation"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "Up to +70 °C"
    }
  },
  {
    id: "oks-oks-2101",
    name: "OKS 2101",
    brand: "OKS",
    category: "Sprays",
    description: "MoS2 dry-film lubricant spray, providing a dry friction-reducing layer for vacuum and radiation zones.",
    image: "bg-gradient-to-tr from-slate-600 to-slate-850 text-white",
    features: ["Dust and dirt repellent film","Prevents stick-slip at low speed","Resistant to radiation and vacuum"],
    applications: ["Dusty conveyor systems","Cleanroom sliding mechanisms","Precision locks and hinges"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-180 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-2101-blue",
    name: "OKS 2101 Blue",
    brand: "OKS",
    category: "Sprays",
    description: "Blue color-coded MoS2 dry lubricant spray for clear verification of applied protective surface layers.",
    image: "bg-gradient-to-tr from-blue-100 to-blue-200 text-blue-900",
    features: ["Contrasting blue layer visual check","Dry anti-friction coating","Protects against wear and corrosion"],
    applications: ["Component surface verification","Mechanical linkage tracks","Precision slides"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-180 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-2101-st-natural",
    name: "OKS 2101 ST Natural",
    brand: "OKS",
    category: "Sprays",
    description: "High temperature dry lubricating film spray in a transparent natural finish. Repels abrasive powders and dust.",
    image: "bg-gradient-to-tr from-stone-50 to-stone-100 text-slate-800",
    features: ["Durable dry film without color stains","Extreme load limits","Prevents wear on gear-teeth and sliders"],
    applications: ["Woodworking guides","Plastic slides and guides","Precision dials"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-180 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-2131",
    name: "OKS 2131",
    brand: "OKS",
    category: "Sprays",
    description: "Anti-seize copper spray for high-temperature threaded joints, protecting them against thermal bonding and rust.",
    image: "bg-gradient-to-tr from-amber-50 to-orange-100 text-amber-800",
    features: ["High temperature copper solids","Prevents seizing and rust welding","Maintains consistent bolt tension"],
    applications: ["Exhaust manifold studs","Steam valve threads","Brake system linkages"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +1,100 °C"
    }
  },
  {
    id: "oks-oks-2160",
    name: "OKS 2160",
    brand: "OKS",
    category: "Specialty",
    description: "Liquid zinc protective coating offering active cathodic protection to steel surfaces against salt and water.",
    image: "bg-gradient-to-tr from-zinc-200 to-zinc-400 text-zinc-900",
    features: ["Contains 99% pure zinc dust","Forms resilient surface alloy","Highly resistant to corrosion weathering"],
    applications: ["Welding seam restoration","Galvanized surface repair","Marine environment steel structures"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "Up to +400 °C"
    }
  },
  {
    id: "oks-oks-2211",
    name: "OKS 2211",
    brand: "OKS",
    category: "Sprays",
    description: "High-temperature ceramic anti-seize spray. Metal-free and completely safe for stainless steel and alloy bolts.",
    image: "bg-gradient-to-tr from-zinc-50 to-stone-100 text-stone-700",
    features: ["Metal-free formulation","No corrosion reaction with alloys","Extremely high heat limits"],
    applications: ["Stainless steel screw joints","In-furnace guides","Chemical plant piping"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +1,400 °C"
    }
  },
  {
    id: "oks-oks-2251",
    name: "OKS 2251",
    brand: "OKS",
    category: "Sprays",
    description: "PTFE dry-film lubricant spray, creating a clean grease-free sliding surface. Ideal for high cleanliness demands.",
    image: "bg-gradient-to-tr from-blue-50 to-sky-100 text-blue-600",
    features: ["Grease-free dry sliding layer","Repels dust, lint, and particles","Excellent chemical and water resistance"],
    applications: ["Textile sliders","Paper mill guides","Clean packaging guides"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-180 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-240",
    name: "OKS 240",
    brand: "OKS",
    category: "Pastes",
    description: "High-temperature copper anti-seize paste in a 250g tube to secure high-heat fasteners and boiler flanges.",
    image: "bg-gradient-to-tr from-amber-50 to-amber-100 text-amber-800",
    features: ["Highly adhesive paste","Maintains easy screw dismantling","Protects against pitting and rust"],
    applications: ["Flange assemblies","Boiler bolts","Turbine casings"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +1,100 °C"
    }
  },
  {
    id: "oks-oks-246",
    name: "OKS 246",
    brand: "OKS",
    category: "Pastes",
    description: "White lubricating paste with solid lubricants for sanitary, laboratory, and food industry assembly points.",
    image: "bg-gradient-to-tr from-stone-50 to-stone-100 text-stone-800",
    features: ["Metal-free white finish","Excellent water and washout resistance","Safe for hygienic industries"],
    applications: ["Food plant assembly","Precision guide rollers","Sterilization hinges"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-2551",
    name: "OKS 2551",
    brand: "OKS",
    category: "Sprays",
    description: "High-speed rust remover and penetrant spray. Rapidly penetrates tight thread gaps to dissolve rust crusts.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-700",
    features: ["Extremely low viscosity capillary action","Fast rust decomposition","Leaves thin protective lubricating film"],
    applications: ["Dismantling seized bolts","Releasing frozen hinges","Unlocking heavy couplings"],
    hsnCode: "38140020",
    specifications: {
          "HSN Code": "38140020",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +50 °C"
    }
  },
  {
    id: "oks-oks-2561",
    name: "OKS 2561",
    brand: "OKS",
    category: "Sprays",
    description: "Zinc-dust spray providing long-term active cathodic protection to steel parts exposed to weathering.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["High zinc content layer","Resists heavy atmospheric corrosion","Can be painted over with standard paints"],
    applications: ["Outdoor machinery frames","Structural steel preservation","After-welding protection"],
    hsnCode: "32089090",
    specifications: {
          "HSN Code": "32089090",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "Up to +400 °C"
    }
  },
  {
    id: "oks-oks-2571",
    name: "OKS 2571",
    brand: "OKS",
    category: "Sprays",
    description: "High-temperature aluminum spray designed to seal and coat exhaust manifolds, silencers, and steel structures.",
    image: "bg-gradient-to-tr from-zinc-100 to-zinc-200 text-slate-800",
    features: ["Resists temperatures up to 800°C","Bright metallic finish","Provides excellent corrosion barrier"],
    applications: ["Exhaust pipe coating","Oven exterior panels","Heat exchangers"],
    hsnCode: "32089090",
    specifications: {
          "HSN Code": "32089090",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "Up to +800 °C"
    }
  },
  {
    id: "oks-oks-2600",
    name: "OKS 2600",
    brand: "OKS",
    category: "Specialty",
    description: "Industrial cleaning concentrate. Highly effective at stripping grease crusts, tar, adhesive residues, and dry resins.",
    image: "bg-gradient-to-tr from-emerald-50 to-emerald-100 text-emerald-800",
    features: ["Heavy grime dissolution","Highly concentrated recipe","Prepares metals for bonding/coating"],
    applications: ["Degreasing machine parts","Cleaning grease cups and bearings","Cleaning maintenance benches"],
    hsnCode: "38140010",
    specifications: {
          "HSN Code": "38140010",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Evaporation": "Normal"
    }
  },
  {
    id: "oks-oks-2601",
    name: "OKS 2601",
    brand: "OKS",
    category: "Sprays",
    description: "Water-based biodegradable biological cleaner spray, highly friendly to the ecosystem and personnel.",
    image: "bg-gradient-to-tr from-green-50 to-emerald-100 text-green-700",
    features: ["Biodegradable formulation","Non-flammable, solvent-free","Highly effective on animal/vegetable fats"],
    applications: ["Hygienic machine cleaning","Food line washdowns","Kitchen and packaging surfaces"],
    hsnCode: "38140020",
    specifications: {
          "HSN Code": "38140020",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Evaporation": "Slow"
    }
  },
  {
    id: "oks-oks-2621-non-live",
    name: "OKS 2621 Non Live",
    brand: "OKS",
    category: "Sprays",
    description: "Dielectric cleaning spray for electrical contacts, relays, and circuit boards. Safe for non-live applications.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-blue-600",
    features: ["Dissolves light oxidation and dirt","No conductivity residues","Safe for standard plastic structures"],
    applications: ["Contact switch cleaning","PLC board maintenance","Fuse box cleaning"],
    hsnCode: "38140020",
    specifications: {
          "HSN Code": "38140020",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Evaporation": "Rapid"
    }
  },
  {
    id: "oks-oks-265",
    name: "OKS 265",
    brand: "OKS",
    category: "Pastes",
    description: "Chucking paste with high resistance to machine coolants and emulsifiers. Ensures steady clamping force on lathe chucks.",
    image: "bg-gradient-to-tr from-slate-100 to-zinc-300 text-zinc-800",
    features: ["Highly resistant to coolants","Prevents chuck slippage","Maintains steady tension under high speeds"],
    applications: ["CNC lathe chucks","Clamping jaw guides","Guide rails under wet processing"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-2650",
    name: "OKS 2650",
    brand: "OKS",
    category: "Specialty",
    description: "Heavy duty eco-cleaner concentrate, biodegradable, phosphate-free, highly safe for sensitive machinery alloys.",
    image: "bg-gradient-to-tr from-green-50 to-green-100 text-green-700",
    features: ["Eco-friendly phosphate free","Highly concentrated 1:10 dilutable","Excellent degreaser power"],
    applications: ["Alloy parts washing","Factory maintenance washing","Sensitive machinery shells"],
    hsnCode: "34029099",
    specifications: {
          "HSN Code": "34029099",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Dilution": "1:5 to 1:20"
    }
  },
  {
    id: "oks-oks-2671",
    name: "OKS 2671",
    brand: "OKS",
    category: "Sprays",
    description: "Synthetic high-performance chain spray with MoS2, engineered for high velocities and aggressive soot conditions.",
    image: "bg-gradient-to-tr from-slate-600 to-indigo-850 text-white",
    features: ["Very high speed adhesion","Resists soot and fine coal dust","Provides exceptional wear damping"],
    applications: ["High speed transmission chains","Open gear rims","Conveying chains"],
    hsnCode: "34039100",
    specifications: {
          "HSN Code": "34039100",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-2801",
    name: "OKS 2801",
    brand: "OKS",
    category: "Specialty",
    description: "Bubble-forming leak detector spray for locating gas leaks in air hoses, cylinders, and piping networks.",
    image: "bg-gradient-to-tr from-sky-50 to-emerald-50 text-teal-600",
    features: ["Forms high-contrast foam bubbles","Completely non-flammable","Non-corrosive to copper and brass pipes"],
    applications: ["Gas pipe fittings","Compressor air lines","Pneumatic valves check"],
    hsnCode: "34022020",
    specifications: {
          "HSN Code": "34022020",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Gas Safe": "Yes"
    }
  },
  {
    id: "oks-oks-2901",
    name: "OKS 2901",
    brand: "OKS",
    category: "Specialty",
    description: "Belt tuning and maintenance spray to increase traction, prevent belt slippage, and preserve belt rubbers.",
    image: "bg-gradient-to-tr from-yellow-50 to-amber-100 text-amber-700",
    features: ["Stops squeaking and slippage","Preserves belt rubber flexibility","Increases driving efficiency"],
    applications: ["V-belts and flat belts","Conveyor drive belts","Alternator belts"],
    hsnCode: "35069190",
    specifications: {
          "HSN Code": "35069190",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Rubber Safe": "Yes"
    }
  },
  {
    id: "oks-oks-352-2",
    name: "OKS 352/2",
    brand: "OKS",
    category: "Oils",
    description: "Fully synthetic high-temperature gear oil based on polyglycol. Resists oxidation and shear thinning under severe gear stresses.",
    image: "bg-gradient-to-tr from-amber-50 to-amber-100 text-amber-700",
    features: ["PAG synthetic base oil","High scuffing load protection","Extremely low friction coefficients"],
    applications: ["Highly loaded gear motors","Steel mills bevel gears","Worm gearboxes"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +160 °C"
    }
  },
  {
    id: "oks-oks-3751",
    name: "OKS 3751",
    brand: "OKS",
    category: "Sprays",
    description: "Synthetic high-performance adhesive lubricant spray with PTFE solids. Resists water washout and heavy centrifugal force.",
    image: "bg-gradient-to-tr from-indigo-50 to-sky-100 text-blue-750",
    features: ["Contains active PTFE solids","Extremely high pressure limit","Will not splash off fast chains"],
    applications: ["Forklift masts","Fast motorcycle and machine chains","Toothed rack slides"],
    hsnCode: "34039100",
    specifications: {
          "HSN Code": "34039100",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +180 °C"
    }
  },
  {
    id: "oks-oks-400",
    name: "OKS 400",
    brand: "OKS",
    category: "Greases",
    description: "Heavy duty MoS2 high-performance grease for extreme load pressures and mechanical vibrations.",
    image: "bg-gradient-to-tr from-slate-650 to-slate-850 text-white",
    features: ["Contains fine MoS2 solids","Protects against friction oxidation","Good seal and dust resistance"],
    applications: ["Heavy crane roll bearings","Hydraulic excavator arms","Vibrating screens"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-410",
    name: "OKS 410",
    brand: "OKS",
    category: "Greases",
    description: "High temperature grease for rolling bearings and joints under heavy shock loads and continuous high pressures.",
    image: "bg-gradient-to-tr from-amber-100 to-yellow-200 text-amber-900",
    features: ["High drop point lithium complex soap","Excellent shock load damping","Waterproof sealing shield"],
    applications: ["Steel ladle conveyors","Rolling mills","Foundry fans"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +160 °C"
    }
  },
  {
    id: "oks-oks-410-00",
    name: "OKS 410-00",
    brand: "OKS",
    category: "Greases",
    description: "Fluid gear grease version of OKS 410, designed to lubricate enclosed gearboxes and drive motors.",
    image: "bg-gradient-to-tr from-amber-100 to-yellow-200 text-amber-900",
    features: ["Excellent pumpable fluid grease","Fills small gear enclosures","Withstands shock load stress"],
    applications: ["Drive motor gearboxes","Pneumatic tool gearheads","Central grease lines"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +160 °C"
    }
  },
  {
    id: "oks-oks-418",
    name: "OKS 418",
    brand: "OKS",
    category: "Greases",
    description: "Synthetic high-temperature lubricating grease designed for slow-moving bearings operating up to 250°C.",
    image: "bg-gradient-to-tr from-amber-100 to-red-200 text-amber-950",
    features: ["Bentonite organophilic clay base","Melting-free formulation","Thermal chemical resistance"],
    applications: ["Baking oven conveyors","Kiln car axle bearings","Glass blowing rollers"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-25 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-423",
    name: "OKS 423",
    brand: "OKS",
    category: "Greases",
    description: "Synthetic high-speed gear and bearing grease for low starting temperatures and extreme cold areas.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-cyan-800",
    features: ["Low-temperature synthetic fluid grease","Maintains protective film at -50°C","High shear stability"],
    applications: ["High-altitude ski lifts","Refrigeration unit ventilation","Aerospace components"],
    hsnCode: "27101979",
    specifications: {
          "HSN Code": "27101979",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-50 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-424",
    name: "OKS 424",
    brand: "OKS",
    category: "Greases",
    description: "Synthetic high-temperature grease designed to resist extreme chemical washdowns, hot steam, and acids.",
    image: "bg-gradient-to-tr from-yellow-50 to-orange-100 text-orange-700",
    features: ["Resists chemical water washes","Synthetic base structure","Outstanding wear protection limits"],
    applications: ["Chemical reactor mixers","Acid pickling lines","Dyeing autoclaves"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-432",
    name: "OKS 432",
    brand: "OKS",
    category: "Greases",
    description: "Melting-free high-temperature grease containing MoS2. Engineered for extreme mechanical stress in furnace conveyors.",
    image: "bg-gradient-to-tr from-amber-100 to-amber-200 text-amber-950",
    features: ["No melting point Bentonite soap","Contains solid MoS2 particles","Withstands continuous baking loads"],
    applications: ["Tunnel kiln bearings","Hot-gas fan blades","Glass industry conveyor rollers"],
    hsnCode: "27101979",
    specifications: {
          "HSN Code": "27101979",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +190 °C"
    }
  },
  {
    id: "oks-oks-450",
    name: "OKS 450",
    brand: "OKS",
    category: "Oils",
    description: "Synthetic adhesive lubricant oil containing liquid MoS2. Excellent creeping ability to fill narrow chain linkages.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-indigo-750",
    features: ["High-performance adhesive oil","Creeps deeply into chain bearings","Active MoS2 wear protection shield"],
    applications: ["Heavy conveyor chain pins","Wire rope wire strands","Exposed guide rollers"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-451",
    name: "OKS 451",
    brand: "OKS",
    category: "Sprays",
    description: "Spray variant of OKS 450 adhesive chain oil. Creeps into narrow pivots before forming a highly tacky lubricating film.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-indigo-750",
    features: ["Precision aerosol spraying","No dripping or splashing at high speeds","Exceptional water and acid resistance"],
    applications: ["Open chain drives","Forklift lift chains","Fast-rotating pulleys"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-475",
    name: "OKS 475",
    brand: "OKS",
    category: "Greases",
    description: "Fully synthetic high-speed grease designed for dental equipment, optical controls, and precision instrumentation.",
    image: "bg-gradient-to-tr from-blue-50 to-indigo-100 text-blue-700",
    features: ["Extremely low running torque","No grease bleeding or oil separation","Safe for precision plastic surfaces"],
    applications: ["Dental handpieces","Optical zoom drives","Micro-bearing components"],
    hsnCode: "34049090",
    specifications: {
          "HSN Code": "34049090",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-60 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-475-hs",
    name: "OKS 475 HS",
    brand: "OKS",
    category: "Greases",
    description: "Special high-acceleration variant of OKS 475, designed to secure reliable lubrication in high-speed centrifuges.",
    image: "bg-gradient-to-tr from-blue-50 to-indigo-100 text-blue-750",
    features: ["Formulated for extreme g-forces","Maintains grease track at peak speed","Prevents thermal shear breakdown"],
    applications: ["Industrial centrifuge rotors","Turbochargers pivots","High acceleration slides"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-60 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-491",
    name: "OKS 491",
    brand: "OKS",
    category: "Sprays",
    description: "Gear rim spray grease containing fine graphite solids. Specifically engineered to lubricate heavy-duty open gear teeth.",
    image: "bg-gradient-to-tr from-stone-600 to-stone-850 text-white",
    features: ["Graphite powder solids","Fills microscopic surface pits","Forms robust anti-shock layer"],
    applications: ["Open gears on kiln drives","Crane turntable gear rings","Winch drum gears"],
    hsnCode: "34039100",
    specifications: {
          "HSN Code": "34039100",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +180 °C"
    }
  },
  {
    id: "oks-oks-640",
    name: "OKS 640",
    brand: "OKS",
    category: "Oils",
    description: "Synthetic high-creeping lubricating oil, biodegradable and safe. Excellent for universal maintenance of links and locks.",
    image: "bg-gradient-to-tr from-green-50 to-green-100 text-green-700",
    features: ["Fast biodegradability","Low viscosity high penetration","Excellent anti-corrosion barrier"],
    applications: ["Fine mechanical linkages","Locks and hinges","Chain drives in eco-zones"],
    hsnCode: "27101979",
    specifications: {
          "HSN Code": "27101979",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +80 °C"
    }
  },
  {
    id: "oks-oks-641",
    name: "OKS 641",
    brand: "OKS",
    category: "Oils",
    description: "Rust dissolver and fine penetrant oil designed to dissolve oxidized crusts and free threaded links, 250ml container.",
    image: "bg-gradient-to-tr from-orange-50 to-orange-100 text-orange-700",
    features: ["Low viscosity creeping formula","Quick rust wetting action","Water displacement shield"],
    applications: ["Seized bolts and nuts","Corroded valve linkages","Exposed guide chains"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +60 °C"
    }
  },
  {
    id: "oks-oks-91361-mr-spray",
    name: "OKS 91361 MR Spray",
    brand: "OKS",
    category: "Sprays",
    description: "Moisture remover and contact protective oil spray. Displaces water from electrical systems and preserves contacts.",
    image: "bg-gradient-to-tr from-blue-50 to-indigo-100 text-blue-700",
    features: ["Rapid water displacement","Leaves thin non-conducting shield","Cleans light dust and corrosion"],
    applications: ["Wet electrical switch boxes","Automotive distributor caps","Solenoid protection"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Water Repellent": "Excellent"
    }
  },
  {
    id: "oks-oks-91621-anti-spatter-spray",
    name: "OKS 91621 Anti Spatter Spray",
    brand: "OKS",
    category: "Sprays",
    description: "Silicone-free welding anti-spatter spray. Prevents hot weld spatter from bonding to torch nozzles and workpieces.",
    image: "bg-gradient-to-tr from-zinc-100 to-zinc-200 text-slate-800",
    features: ["Silicone-free formula","Does not affect post-weld painting","Increases welding tip lifespan"],
    applications: ["Welding torch nozzles","Welded steel parts protection","Automatic welding robots"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Silicone-Free": "Yes"
    }
  },
  {
    id: "oks-oks-9200",
    name: "OKS 9200",
    brand: "OKS",
    category: "Greases",
    description: "Pure Molybdenum Disulfide dry lubricant powder. Designed to lubricate critical friction points in heavy sliders.",
    image: "bg-gradient-to-tr from-slate-800 to-zinc-900 text-white",
    features: ["100% active MoS2 powder","Reduces friction to 0.04 coefficient","Withstands radiation and high vacuum"],
    applications: ["Coating of sliding guides","Dry lubrication of hot rollers","Vacuum chamber assemblies"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-180 °C to +450 °C"
    }
  },
  {
    id: "oks-oks-9241",
    name: "OKS 9241",
    brand: "OKS",
    category: "Sprays",
    description: "Synthetic lubricant spray with special additives to form a highly resilient, water-resistant plastic barrier film.",
    image: "bg-gradient-to-tr from-teal-50 to-emerald-100 text-emerald-800",
    features: ["Forms durable plastic sliding film","Excellent resistance to moisture wash","Stops grit and dust adhesion"],
    applications: ["Open gears","Conveyor linkage tracks","Exposed guide screws"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Sealing effect": "High"
    }
  },
  {
    id: "oks-oks-92621-safe-lc-spray",
    name: "OKS 92621 Safe LC Spray",
    brand: "OKS",
    category: "Sprays",
    description: "Non-flammable electronic contact cleaner spray. Ultra-safe formula allows deep grease flushing with no ignition hazard.",
    image: "bg-gradient-to-tr from-blue-50 to-cyan-100 text-blue-800",
    features: ["completely non-flammable","Leaves absolute zero residue","Safe for live-line diagnostics"],
    applications: ["PLC computer racks","Transformer junctions","Power supply switchboards"],
    hsnCode: "29033919",
    specifications: {
          "HSN Code": "29033919",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Flammability": "None"
    }
  },
  {
    id: "oks-oks-92801",
    name: "OKS 92801",
    brand: "OKS",
    category: "Sprays",
    description: "PTFE sliding film spray, providing a dry, colorless, grease-free lubrication layer on tracks and guides.",
    image: "bg-gradient-to-tr from-blue-50 to-sky-100 text-blue-700",
    features: ["Dry colorless PTFE film","No dust or hair absorption","Resists temperatures up to 250°C"],
    applications: ["Packaging machine chutes","Paper-cutting knives","Drawer sliding guides"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-180 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-9341-chain-lub-spray",
    name: "OKS 9341 Chain Lub Spray",
    brand: "OKS",
    category: "Sprays",
    description: "Aerosol chain lubricant spray designed for fast conveyor assemblies and packing line drive links.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-blue-800",
    features: ["High penetration under tension","Stops link wear and stretch","Water and steam washout resistant"],
    applications: ["Packaging convey chains","Overhead conveyor links","Lift chains"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +150 °C"
    }
  },
  {
    id: "oks-oks-9352",
    name: "OKS 9352",
    brand: "OKS",
    category: "Oils",
    description: "Synthetic high-temperature oil containing liquid MoS2, specifically engineered for oven conveyor links.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-indigo-750",
    features: ["High-temp synthetic PAG base","MoS2 active wear prevention","Minimal evaporation loss"],
    applications: ["Baking oven chains","Drying tunnel conveyor tracks","Ceramic kiln chains"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-93521",
    name: "OKS 93521",
    brand: "OKS",
    category: "Sprays",
    description: "High-temperature synthetic conveyor oil spray containing MoS2, designed for precision spot spraying of oven linkages.",
    image: "bg-gradient-to-tr from-indigo-50 to-blue-100 text-indigo-750",
    features: ["Spot precision aerosol jet","Uniform oil-film with MoS2 solids","Leaves no carbon crusts"],
    applications: ["Spot oven conveyor chains","Hinges in high heat areas","Guide tracks"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +250 °C"
    }
  },
  {
    id: "oks-oks-9360",
    name: "OKS 9360",
    brand: "OKS",
    category: "Greases",
    description: "Extremely adhesive lubricating grease for steel wire ropes, open gear teeth, and heavy duty crane guides, 5l container.",
    image: "bg-gradient-to-tr from-stone-600 to-stone-850 text-white",
    features: ["Extreme tackiness will not throw off","Resists heavy marine salt corrosion","High load dampening properties"],
    applications: ["Port crane wire ropes","Rotary kiln open gears","Elevator guide rails"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-9361",
    name: "OKS 9361",
    brand: "OKS",
    category: "Sprays",
    description: "Adhesive gear and rope grease spray. Creeps into wire rope cores before setting into a highly tacky protective film.",
    image: "bg-gradient-to-tr from-stone-600 to-stone-850 text-white",
    features: ["Reaches wire core gaps","Resists heavy wash and weather","Protects against micro wear-fretting"],
    applications: ["Exposed steel wire cables","Open drive pinion gears","Construction winches"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-9361-green",
    name: "OKS 9361 Green",
    brand: "OKS",
    category: "Sprays",
    description: "Eco-friendly biodegradable adhesive grease spray, colored green to prevent mixing and simplify checks in eco-sensitive areas.",
    image: "bg-gradient-to-tr from-green-50 to-green-100 text-green-700",
    features: ["Rapidly biodegradable recipe","Contrast green tracing","Excellent load damping on gears"],
    applications: ["Eco-tourism lift cables","Watergate open gears","Agriculture winches"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +120 °C"
    }
  },
  {
    id: "oks-oks-9361-st",
    name: "OKS 9361 ST",
    brand: "OKS",
    category: "Sprays",
    description: "Synthetic heavy-duty structural grease spray, delivering extreme mechanical load damping on gears and slides.",
    image: "bg-gradient-to-tr from-stone-700 to-zinc-800 text-white",
    features: ["Enhanced structural polymer base","Resists extreme impact pressures","Prevents steel tooth pitting"],
    applications: ["Heavy open pinions","Excavator slides","Rotary gears"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +140 °C"
    }
  },
  {
    id: "oks-oks-9433-longlife",
    name: "OKS 9433 LONGLIFE",
    brand: "OKS",
    category: "Greases",
    description: "Heavy duty long-life rolling and plain bearing grease. Engineered to resist thermal aging and mechanical shear.",
    image: "bg-gradient-to-tr from-blue-50 to-indigo-100 text-indigo-700",
    features: ["Extreme continuous run cycles","Lithium complex soap base","Outstanding anti-corrosion layer"],
    applications: ["Electric motor bearings","Exhaust fan bearings","Pump shafts"],
    hsnCode: "34031900",
    specifications: {
          "HSN Code": "34031900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +150 °C"
    }
  },
  {
    id: "oks-oks-9680-anti-rust-oil",
    name: "OKS 9680 Anti Rust Oil",
    brand: "OKS",
    category: "Oils",
    description: "Long-term anti-corrosion preservation oil, formulated to resist salt spray and marine humidity weathering.",
    image: "bg-gradient-to-tr from-teal-50 to-teal-100 text-teal-800",
    features: ["Salt-water spray certified","Forms thin protective greasy film","Highly effective for export metals"],
    applications: ["Exposed machine steel preservation","Engine block marine transport","Metal pipes storage"],
    hsnCode: "27101979",
    specifications: {
          "HSN Code": "27101979",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Protection Type": "Greasy layer"
    }
  },
  {
    id: "oks-oks-chisel-paste",
    name: "OKS Chisel Paste",
    brand: "OKS",
    category: "Pastes",
    description: "Special copper-graphite assembly paste designed for heavy hydraulic breakers, hammers, and jackhammers.",
    image: "bg-gradient-to-tr from-amber-100 to-amber-200 text-amber-900",
    features: ["Extremely high copper-graphite load solids","Resists structural hammer vibrations","Maintains joint slide separation"],
    applications: ["Hydraulic jackhammers","Pneumatic concrete chisels","Demolition tool linkages"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +1,100 °C"
    }
  },
  {
    id: "oks-oks-grease-gun",
    name: "OKS GREASE GUN",
    brand: "OKS",
    category: "Specialty",
    description: "Professional-grade heavy duty manual lever grease gun, designed for reliable grease injection in factory environments.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["High-pressure steel pump body","Fits standard 400g cartridges or bulk grease","Ergonomic non-slip lever handle"],
    applications: ["Manual grease injection","Bearing lubrication blocks","Universal maintenance"],
    hsnCode: "82055990",
    specifications: {
          "HSN Code": "82055990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Capacity": "500g / 400g Cartridges"
    }
  },
  {
    id: "oks-oks-hd-1250-mo",
    name: "OKS HD 1250 Mo",
    brand: "OKS",
    category: "Greases",
    description: "Extremely high pressure grease containing MoS2 solids, designed to shield heavy industrial gears and drives.",
    image: "bg-gradient-to-tr from-slate-700 to-slate-900 text-white",
    features: ["High concentration of MoS2 solids","Absorbs shock loads and prevents pitting","Superior water displacement"],
    applications: ["Heavy crane drive gears","Kiln tooth assemblies","Smelting plants drive rails"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-20 °C to +140 °C"
    }
  },
  {
    id: "oks-oks-kit",
    name: "OKS Kit",
    brand: "OKS",
    category: "Specialty",
    description: "Comprehensive lubrication maintenance diagnostic kit containing essential cleaning, releasing, and lubricating sprays.",
    image: "bg-gradient-to-tr from-slate-100 to-zinc-200 text-slate-800",
    features: ["All-in-one maintenance carrying case","Selected industry sprays","Includes nozzles and wipes"],
    applications: ["Field diagnostics work","Emergency repair crews","Maintenance workshops"],
    hsnCode: "27101979",
    specifications: {
          "HSN Code": "27101979",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Includes": "OKS Sprays & Accessories"
    }
  },
  {
    id: "oks-oks-silicone-grease",
    name: "OKS Silicone Grease",
    brand: "OKS",
    category: "Greases",
    description: "Universal food-grade high-viscosity silicone sealing grease, providing robust sealing and dielectric insulation.",
    image: "bg-gradient-to-tr from-sky-50 to-sky-100 text-sky-600",
    features: ["NSF H1 food safety","High viscosity silicone base","Outstanding chemical wash resistance"],
    applications: ["Valves and pipe glands","O-ring sealing","Electronic connector insulation"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +200 °C"
    }
  },
  {
    id: "oks-oks-spray-boy",
    name: "OKS SPRAY BOY",
    brand: "OKS",
    category: "Specialty",
    description: "Ergonomic aerosol can comfort handle attachment, transforming standard spray cans into easy-trigger guns.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["Comfort grip trigger gun handle","Fits all standard OKS aerosol cans","Reduces worker finger fatigue"],
    applications: ["Continuous spray work","Convenient aerosol application","Factory maintenance painting/cleaning"],
    hsnCode: "34039900",
    specifications: {
          "HSN Code": "34039900",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Material": "Heavy duty ABS plastic"
    }
  },
  {
    id: "kl-ber-microlube-gb-00",
    name: "MICROLUBE GB 00",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber high-performance special fluid grease containing solid lubricants, designed for heavy-duty worm gears.",
    image: "bg-gradient-to-tr from-amber-50 to-orange-100 text-amber-700",
    features: ["High scuffing protection solids","Fluid pumpable consistency","Excellent steel/steel sliding wear reduction"],
    applications: ["Worm gear tooth assemblies","Steel spur gears","Mechanical slide tracks"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "0 °C to +100 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-500",
    name: "CENTOPLEX GLP 500",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber fluid multi-purpose grease, specifically formulated for highly loaded lubrication points and central grease lines.",
    image: "bg-gradient-to-tr from-amber-100 to-yellow-200 text-amber-800",
    features: ["Excellent fluid pumping profile","Protects gears and bearings from oxidation","Highly adhesive protective film"],
    applications: ["Central lubrication networks","Highly loaded roller bearings","Enclosed spur gears"],
    hsnCode: "27101999",
    specifications: {
          "HSN Code": "27101999",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +100 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-100-bh",
    name: "CENTOPLEX GLP 100 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber premium lithium-based grease, engineered to protect rolling and sliding bearings under extreme structural vibration.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["High mechanical-shear stability","Protects ball tracks against fretting","Outstanding load capacity limits"],
    applications: ["Vibrating rollers","Screening machine bearings","Heavy conveyor shafts"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +120 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-100-00-bh",
    name: "CENTOPLEX GLP 100-00 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber fluid gear grease version, designed to damp vibrations and lubricate small drives and couplings.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["Fluid gear grease formula","Outstanding shock dampening","Prevents oil separation under vibrations"],
    applications: ["Small gear assemblies","Flexible coupling joints","Sliding tracks"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-35 °C to +100 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-100-000-bh",
    name: "CENTOPLEX GLP 100-000 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber ultra-fluid gear grease with extreme creeping ability, designed to reach narrow teeth mesh points.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["Exceptional capillary creeping grease","Protects against micro wear-fretting","Maintains fluid seal"],
    applications: ["Aseptic packing gear motors","Small bevel gear housings","Fine instrumentation gears"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +100 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-101-bh",
    name: "CENTOPLEX GLP 101 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber specialized wear-resistant grease, formulated to protect highly loaded plain bearings.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["High-performance wear shield","Outstanding shear-stability","Protects against micro-abrasion"],
    applications: ["Plain bearing housings","Mechanical sliders and rails","Rotary links"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +120 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-102-bh",
    name: "CENTOPLEX GLP 102 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber multi-range grease with exceptional mechanical shear stability, suitable for multi-point lubrication.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["Exceptional multi-point stability","Water and steam washout resistant","Corrosion protection shield"],
    applications: ["Universal bearings","Water pumps","Conveyor roller guides"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +120 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-200-000-bh",
    name: "CENTOPLEX GLP 200-000 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber ultra-low viscosity fluid grease designed specifically for central grease dispensing units.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["Formulated for automated central lines","Will not clog micro spray nozzles","Superior water washing defense"],
    applications: ["Automated central grease units","Fine sliding guides","Pneumatic valve linkages"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-40 °C to +100 °C"
    }
  },
  {
    id: "kl-ber-centoplex-glp-202-bh",
    name: "CENTOPLEX GLP 202 BH",
    brand: "Klüber",
    category: "Greases",
    description: "Klüber highly adhesive heavy grease, specifically engineered to stick to high-pressure slide guides and vertical tracks.",
    image: "bg-gradient-to-tr from-amber-50 to-yellow-100 text-yellow-800",
    features: ["Extreme surface adhesion will not drip","Resists heavy impact shock pressures","Protects against micro wear-fretting"],
    applications: ["Vertical guide pillars","Press slide plates","Heavy lathe rails"],
    hsnCode: "27101990",
    specifications: {
          "HSN Code": "27101990",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)",
          "Service Temp": "-30 °C to +130 °C"
    }
  },
  {
    id: "festo-festo-vuvb-solenoid-valve",
    name: "Festo VUVB Solenoid Valve",
    brand: "Festo",
    category: "Specialty",
    description: "High-performance compact solenoid valve designed for reliable pneumatic control in restricted installation spaces.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Compact design for tight spaces","Extremely fast response times","Low power consumption coil"],
    applications: ["Pneumatic pilot control","Packaging machine gates","Direct assembly systems"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Valve Function": "5/2-way, single solenoid",
          "Operating Pressure": "1.5 - 8 bar",
          "Flow Rate": "650 l/min",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-vuvs-l-valve",
    name: "Festo VUVS-L Valve",
    brand: "Festo",
    category: "Specialty",
    description: "Robust, heavy-duty directional control solenoid valve, engineered for tough industrial conditions and high flow rates.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["High flow capacity design","Heavy-duty metal housing","Easy mounting on manifold blocks"],
    applications: ["Main valve actuation","Heavy conveyor sorting","Pneumatic clamp control"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Valve Function": "5/2-way or 3/2-way",
          "Connection Type": "Threaded G1/4",
          "Flow Rate": "1000 l/min",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-dfm-guided-drive",
    name: "Festo DFM Guided Drive",
    brand: "Festo",
    category: "Specialty",
    description: "Pneumatic guided actuator combining a standard cylinder with high-precision guiding rods for superior torsional resistance.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-800",
    features: ["Integrated guiding rods for high load capacity","Minimal deflection under torque","Magnetic sensing ready"],
    applications: ["Pick-and-place gantry lines","Clamping jigs","Lifting assemblies"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Piston Diameter": "20 mm",
          "Stroke": "50 mm",
          "Cushioning": "Elastic cushioning rings",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-dgsl-mini-slide",
    name: "Festo DGSL Mini Slide",
    brand: "Festo",
    category: "Specialty",
    description: "Ultra-precise slide actuator featuring a ball bearing cage guide, providing unmatched positioning accuracy in micro-automation.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-800",
    features: ["Precision ball bearing guide system","Extremely high repeat accuracy","Highly compact slide design"],
    applications: ["Electronic component assembly","Optical inspection guides","Micro-positioning systems"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Piston Diameter": "12 mm",
          "Stroke": "30 mm",
          "Guiding": "Ball bearing cage guide",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-hgpl-gripper",
    name: "Festo HGPL Gripper",
    brand: "Festo",
    category: "Specialty",
    description: "Heavy-duty parallel gripper with long stroke jaw travel, engineered to securely grasp large and heavy workpieces.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-850",
    features: ["Long stroke jaws for versatile grabbing","Sturdy guide rail construction","High gripping forces"],
    applications: ["Automated palletizing systems","Bulk material handling","Large component loading"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Gripper Type": "Parallel gripper",
          "Stroke per jaw": "20 mm",
          "Max gripping force": "120 N",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-hgp-gripper",
    name: "Festo HGP Gripper",
    brand: "Festo",
    category: "Specialty",
    description: "High-speed compact parallel gripper, optimized for high cycle-count pick-and-place automation setups.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-850",
    features: ["Lightweight compact body","Fast cycle times","Interchangeable jaws"],
    applications: ["High speed sorting","Small parts assembly lines","Electronic packing systems"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Gripper Type": "Parallel gripper",
          "Stroke per jaw": "6 mm",
          "Gripping Force": "45 N",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-ehps-electric-cylinder",
    name: "Festo EHPS Electric Cylinder",
    brand: "Festo",
    category: "Specialty",
    description: "Smart electric parallel gripper requiring no pneumatic air, perfect for laboratory, cleanroom, and hybrid automation.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["Pneumatic-free electric actuation","Adjustable gripping forces","Brushless DC motor for infinite longevity"],
    applications: ["Cleanroom automation","Medical diagnostic machines","Electronic assembly test benches"],
    hsnCode: "85011019",
    specifications: {
          "HSN Code": "85011019",
          "Actuator Type": "Electric parallel gripper",
          "Motor Type": "Brushless DC",
          "Max force": "80 N",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-cpe-valve",
    name: "Festo CPE Valve",
    brand: "Festo",
    category: "Specialty",
    description: "High-density solenoid valve featuring a slim 10mm width, designed for compact manifold mounting in dense pilot systems.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Slimline 10mm structural width","High flow rate relative to size","Sub-base or inline mounting"],
    applications: ["Dense cabinet solenoid banks","Aseptic packaging pilot systems","Pneumatic gate trigger banks"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Valve Function": "5/2-way single",
          "Width": "10 mm",
          "Operating Pressure": "3 - 8 bar",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-cpx-terminal",
    name: "Festo CPX Terminal",
    brand: "Festo",
    category: "Specialty",
    description: "Modular, versatile electrical terminal designed to control complex valve terminals and integrated fieldbus communications.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["Multi-protocol Industrial Ethernet","Integrated diagnostics and maintenance","IP65/IP67 waterproof structure"],
    applications: ["Main plant Automation control","Remote PLC I/O stations","Decentralized machinery setups"],
    hsnCode: "85371000",
    specifications: {
          "HSN Code": "85371000",
          "Bus Protocols": "PROFINET, EtherNet/IP, EtherCAT",
          "Max I/O": "Up to 512 inputs/outputs",
          "IP Rating": "IP65/IP67",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-vtug-valve-terminal",
    name: "Festo VTUG Valve Terminal",
    brand: "Festo",
    category: "Specialty",
    description: "High-density valve manifold terminal featuring compact valves, multi-pin connections, and industrial network compatibility.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Space-saving manifold system","Multi-pin or fieldbus connection styles","Corrosion-resistant metal body"],
    applications: ["Central pneumatic panels","Complex automation machinery","Food packaging lines control"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Max Valve Positions": "24",
          "Connection": "Multi-pin, Fieldbus",
          "Width": "10 mm / 14 mm",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-adn-cylinder",
    name: "Festo ADN Cylinder",
    brand: "Festo",
    category: "Specialty",
    description: "Highly compact, double-acting pneumatic cylinder conforming to ISO 21287, saving up to 50% installation space.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-800",
    features: ["Conforms to ISO 21287 space saving standard","Magnetic position sensing ready","Elastic cushioning pads at end positions"],
    applications: ["Compact space operations","Pneumatic locking systems","Short stroke indexing"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Piston Diameter": "32 mm",
          "Stroke": "25 mm",
          "Type": "Compact cylinder",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-dsbc-cylinder",
    name: "Festo DSBC Cylinder",
    brand: "Festo",
    category: "Specialty",
    description: "Standard double-acting profile pneumatic cylinder conforming to ISO 15552, featuring self-adjusting pneumatic cushioning.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-800",
    features: ["Conforms to ISO 15552 standards","PPS self-adjusting cushioning","Profile slot for proximity sensors"],
    applications: ["General manufacturing automation","Lifting and moving assemblies","Heavy material pushers"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Piston Diameter": "40 mm",
          "Stroke": "100 mm",
          "Type": "Standard profile cylinder",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-dsnu-cylinder",
    name: "Festo DSNU Cylinder",
    brand: "Festo",
    category: "Specialty",
    description: "Robust, double-acting stainless-steel round pneumatic cylinder conforming to ISO 6432, designed for extreme durability.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-800",
    features: ["Stainless steel cylinder barrel","Corrosion resistant structure","PPS self-adjusting cushioning ready"],
    applications: ["Hygienic food processing lines","Corrosive environments","High speed machinery components"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Piston Diameter": "16 mm",
          "Stroke": "50 mm",
          "Type": "Round cylinder",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-dnc-cylinder",
    name: "Festo DNC Cylinder",
    brand: "Festo",
    category: "Specialty",
    description: "Heavy duty, classical tie-rod design pneumatic cylinder conforming to ISO 15552, engineered to handle heavy payloads.",
    image: "bg-gradient-to-tr from-cyan-50 to-blue-100 text-blue-800",
    features: ["Tie-rod cylinder construction","PPS cushioning system","Long stroke capacity options"],
    applications: ["Heavy gate lifters","Steel works pushers","Industrial press lines"],
    hsnCode: "84123100",
    specifications: {
          "HSN Code": "84123100",
          "Piston Diameter": "50 mm",
          "Stroke": "125 mm",
          "Type": "Standard cylinder to ISO 15552",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-vuvg-solenoid-valve",
    name: "Festo VUVG Solenoid Valve",
    brand: "Festo",
    category: "Specialty",
    description: "Ultra-modern, high-performance compact solenoid valve, offering unmatched flow rate efficiency in a tiny footprint.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Extremely high flow-to-size ratio","360-degree LED status display","Patented secure cartridge seal design"],
    applications: ["High speed handling machinery","Control cabinet valve groups","Pilot control boards"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Valve Function": "3/2, 5/2, 5/3-way",
          "Size": "10 mm / 14 mm",
          "Flow Rate": "220 - 1380 l/min",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-vuvs-solenoid-valve",
    name: "Festo VUVS Solenoid Valve",
    brand: "Festo",
    category: "Specialty",
    description: "Versatile directional control solenoid valve, designed for reliable operation in both single and manifold assembly forms.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Interchangeable electric solenoid coils","Wide operating temperature range","Sturdy robust aluminum housing"],
    applications: ["Pneumatic conveyor control","Heavy press cylinders trigger","Universal automation systems"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Valve Function": "5/2-way",
          "Connection Type": "G1/8 or G1/4",
          "Flow Rate": "700 - 2000 l/min",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-ms-service-unit",
    name: "Festo MS Service Unit",
    brand: "Festo",
    category: "Specialty",
    description: "Complete modular air preparation service unit, incorporating air filtration, pressure regulation, and lubrication.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["Modular plug-and-play assembly blocks","High flow rate performance","Excellent sub-micron air filtration"],
    applications: ["Pneumatic main supply prep","Clean air instrumentation lines","Automated machine air regulation"],
    hsnCode: "84213990",
    specifications: {
          "HSN Code": "84213990",
          "Filter Regulator Size": "MS4 / MS6",
          "Condensate Drain": "Manual / Automatic",
          "Grade of Filtration": "40 µm",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-grla-flow-control-valve",
    name: "Festo GRLA Flow Control Valve",
    brand: "Festo",
    category: "Specialty",
    description: "Precision one-way flow control throttle valve, designed to adjust the piston speed of pneumatic cylinders in operation.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Fine adjustment thumb knurled screw","Integrated push-in fitting connection","Direct mounting on cylinder port"],
    applications: ["Cylinder piston speed control","Exhaust flow regulation","Pneumatic damping tune-ups"],
    hsnCode: "84812000",
    specifications: {
          "HSN Code": "84812000",
          "Pneumatic Connection": "QS-6 to G1/8",
          "Adjustment Element": "Knurled screw",
          "Mounting Type": "Screw-in",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-sme-8m-proximity-sensor",
    name: "Festo SME-8M Proximity Sensor",
    brand: "Festo",
    category: "Specialty",
    description: "Magnetic reed proximity switch for slot-mounted cylinders, providing reliable feedback on pneumatic piston location.",
    image: "bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800",
    features: ["Fits directly into standard cylinder T-slot","Robust vibration-proof mounting","Bright LED switching status indicator"],
    applications: ["Cylinder stroke end position check","Automated process logic control","Piston tracking systems"],
    hsnCode: "85365090",
    specifications: {
          "HSN Code": "85365090",
          "Switching Output": "Reed magnetic contact",
          "Electrical Connection": "M8 plug / cable",
          "IP Rating": "IP67/IP68",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "festo-festo-qs-push-in-fitting",
    name: "Festo QS Push-in Fitting",
    brand: "Festo",
    category: "Specialty",
    description: "Premium quality quick push-in pneumatic fitting, ensuring leak-free performance and quick air hose swapping.",
    image: "bg-gradient-to-tr from-blue-50 to-blue-100 text-blue-750",
    features: ["Claw lock system holds tubes securely","Quick push-in release mechanism","Pre-coated thread sealant"],
    applications: ["Pneumatic tubing networks","Valve and cylinder fittings","Automation board plumbing"],
    hsnCode: "39174000",
    specifications: {
          "HSN Code": "39174000",
          "Connection Type": "QS-6 to G1/8",
          "Operating Medium": "Compressed air",
          "Pack size": "10 units",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-cubitron-ii-982cx",
    name: "3M Cubitron II 982CX",
    brand: "3M",
    category: "Specialty",
    description: "Ultra-heavy-duty ceramic grinding disc featuring 3M Precision Shaped Grain technology for rapid steel stock removal.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Patented 3M Precision Shaped ceramic Grain","Cuts up to 2x faster than standard wheels","Extremely cool running avoids discoloration"],
    applications: ["Weld seam grinding","Beveling heavy plate steel","Heavy casting flash removal"],
    hsnCode: "68052000",
    specifications: {
          "HSN Code": "68052000",
          "Abrasive Material": "Precision Shaped Ceramic Grain",
          "Diameter": "4.5 inches",
          "Max RPM": "13300",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-cubitron-ii-984f",
    name: "3M Cubitron II 984F",
    brand: "3M",
    category: "Specialty",
    description: "Premium heavy-duty abrasive cloth belt, engineered to run cool and provide massive wear life on metalworking belts.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Self-sharpening triangular micro-grains","Heavy YF-weight backing polyester cloth","Ideal for automated robotic grinding"],
    applications: ["Robotic weld removal","Gate grinding on castings","Heavy metal file belt polishing"],
    hsnCode: "68052000",
    specifications: {
          "HSN Code": "68052000",
          "Abrasive Material": "Precision Shaped Grain",
          "Belt Type": "File belt / Sanding belt",
          "Backing Material": "YF-weight Polyester",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-cubitron-ii-flap-disc",
    name: "3M Cubitron II Flap Disc",
    brand: "3M",
    category: "Specialty",
    description: "High-performance flap disc offering a perfect combination of rapid stock removal and excellent surface finish.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Overlapping abrasive flaps design","Self-exposing ceramic grains","Maintains consistent cutting rate"],
    applications: ["Polishing and blending metal","Light weld seam cleanups","Deburring sharp metal plates"],
    hsnCode: "68052000",
    specifications: {
          "HSN Code": "68052000",
          "Grade": "36+ / 60+ / 80+",
          "Diameter": "5 inches",
          "Mounting Type": "T29 conical",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-scotch-brite-flap-brush-wheel",
    name: "3M Scotch-Brite Flap Brush/Wheel",
    brand: "3M",
    category: "Specialty",
    description: "Three-dimensional web fiber flap brush, designed to deliver high-quality uniform finishes with no undercutting.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["3D non-woven nylon mesh","Conforms to irregular surface shapes","Prevents metal gouging and undercuts"],
    applications: ["Satin finish on stainless steel","Surface oxidation cleaning","Aesthetic metal buffing"],
    hsnCode: "68053000",
    specifications: {
          "HSN Code": "68053000",
          "Type": "Flap Brush / Finishing Wheel",
          "Dimensions": "6\" x 1\"",
          "Abrasive Mineral": "Silicon Carbide",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-scotch-brite-hand-pad",
    name: "3M Scotch-Brite Hand Pad",
    brand: "3M",
    category: "Specialty",
    description: "Universal non-woven abrasive hand pad, replacing steel wool to provide quick surface conditioning and cleaning.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Washable and reusable pad","Will not rust or splinter fingers","Uniform abrasive mineral dispersion"],
    applications: ["Manual surface rust removal","Pre-painting metal scuffing","Industrial workshop cleaning"],
    hsnCode: "68053000",
    specifications: {
          "HSN Code": "68053000",
          "Dimensions": "6\" x 9\"",
          "Color": "Maroon (7447) / Grey (7448)",
          "Grade": "Very Fine",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-vhb-tape",
    name: "3M VHB Tape",
    brand: "3M",
    category: "Specialty",
    description: "Double-sided acrylic foam tape with exceptional bonding strength, replacing rivets, screws, and welds.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["High-strength acrylic foam core","Distributes mechanical stress evenly","Forms complete water/air tight seal"],
    applications: ["Structural panel bonding","Signage and display mounting","Trim and bezel attachment"],
    hsnCode: "35069190",
    specifications: {
          "HSN Code": "35069190",
          "Tape Thickness": "1.1 mm (RP45)",
          "Width": "24 mm",
          "Roll Length": "33 meters",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-electrical-tape-super-33",
    name: "3M Electrical Tape (Super 33+)",
    brand: "3M",
    category: "Specialty",
    description: "Premium grade PVC vinyl electrical insulation tape, designed to resist abrasion, moisture, acids, and alkalis.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["High dielectric strength layer","Highly elastic and conformable","Excellent all-weather performance"],
    applications: ["Electrical wire splice insulation","Cable harnessing protection","Cable bundling"],
    hsnCode: "39191000",
    specifications: {
          "HSN Code": "39191000",
          "Thickness": "7 mil",
          "Color": "Black",
          "Dielectric Strength": "600V",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-safety-goggles",
    name: "3M Safety Goggles",
    brand: "3M",
    category: "Specialty",
    description: "Anti-fog protective eyewear with wide panoramic vision, safeguarding eyes against chemical splash, dust, and impacts.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Anti-scratch polycarbonate lens","Soft comfortable seal face-skirt","Adjustable headband"],
    applications: ["Chemical plant lab work","Grinding and cutting shielding","Heavy dust environments"],
    hsnCode: "90049090",
    specifications: {
          "HSN Code": "90049090",
          "Lens Coating": "Anti-scratch / Anti-fog",
          "Protection": "UVA/UVB 99.9%",
          "Standard": "ANSI Z87.1",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-half-facepiece-respirator",
    name: "3M Half Facepiece Respirator",
    brand: "3M",
    category: "Specialty",
    description: "Reusable low-profile half-mask respirator, designed to offer high comfort and reliable respiratory protection.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Soft thermoplastic elastomer material","Dual-filter design balances weight","Adjustable head cradle straps"],
    applications: ["Sanding and painting booths","Chemical blending protection","Welding fume filtration"],
    hsnCode: "90200000",
    specifications: {
          "HSN Code": "90200000",
          "Series": "3M 6200",
          "Material": "Thermoplastic elastomer",
          "Filters": "Compatible with 2000/6000 series",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
  {
    id: "3m-3m-classic-ear-plugs",
    name: "3M Classic Ear Plugs",
    brand: "3M",
    category: "Specialty",
    description: "High-attenuation vinyl foam earplugs, designed to expand slowly to conform perfectly to the ear canal.",
    image: "bg-gradient-to-tr from-red-50 to-red-100 text-red-600",
    features: ["Slow-recovery foam material","Moisture resistant flame retardant","Cylindrical design fits most ears"],
    applications: ["High noise shop floors","Metal stamping mills","Heavy machinery operation"],
    hsnCode: "39269099",
    specifications: {
          "HSN Code": "39269099",
          "Noise Reduction Rating": "29 dB",
          "Material": "Slow-recovery foam",
          "Color": "Yellow",
          "Packaging": "All Standard Industrial Sizes Available (from small packs & tins to 5kg/25kg buckets & 180kg/208L drums)"
    }
  },
];
