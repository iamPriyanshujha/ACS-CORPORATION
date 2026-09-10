import { Product } from '../types';

// Central mapping of exact product names or IDs to their official download / documentation URLs
const PRODUCT_URL_MAP: Record<string, string> = {
  // --- OKS PRODUCTS ---
  'oks-476': 'https://www.oks-india.com/product/multipurpose-grease-for-food-processing-technology',
  'oks-476-1kg': 'https://www.oks-india.com/product/multipurpose-grease-for-food-processing-technology',
  'oks-476-250g': 'https://www.oks-india.com/product/multipurpose-grease-for-food-processing-technology',
  'oks-250': 'https://www.oks-india.com/product/white-allround-paste-metal-free',
  'oks-250-1kg': 'https://www.oks-india.com/product/white-allround-paste-metal-free',
  'oks-370': 'https://www.oks-india.com/product/universal-oil-for-food-processing-technology',
  'oks-240': 'https://www.oks-india.com/product/antiseize-paste-copper-paste',
  'oks-240-250g': 'https://www.oks-india.com/product/antiseize-paste-copper-paste',
  'oks-240-1kg': 'https://www.oks-india.com/product/antiseize-paste-copper-paste',
  'oks-265': 'https://www.oks-india.com/product/chuck-jaw-paste',
  'oks-265-1kg': 'https://www.oks-india.com/product/chuck-jaw-paste',
  'oks-265-250g': 'https://www.oks-india.com/product/chuck-jaw-paste',
  'oks-352': 'https://www.oks-india.com/product/high-temperature-oil-light-coloured-synthetic',
  'oks-352-2-1l': 'https://www.oks-india.com/product/high-temperature-gear-oil',
  'oks-352-2-5l': 'https://www.oks-india.com/product/high-temperature-gear-oil',
  'oks-352-2-30l': 'https://www.oks-india.com/product/high-temperature-gear-oil',
  'oks-450': 'https://www.oks-india.com/product/chain-and-adhesive-lubricant-transparent',
  'oks-450-1l': 'https://www.oks-india.com/product/adhesive-lubricating-oil',
  'oks-451-500ml': 'https://www.oks-india.com/product/adhesive-chain-oil-spray',
  'oks-475': 'https://www.oks-india.com/product/high-performance-grease',
  'oks-475-1kg': 'https://www.oks-india.com/product/high-speed-synthetic-grease',
  'oks-475-250g': 'https://www.oks-india.com/product/high-speed-synthetic-grease',
  'oks-475-hs-1kg': 'https://www.oks-india.com/product/high-speed-synthetic-grease-hs',
  'oks-3751': 'https://www.oks-india.com/product/high-performance-adhesive-lubricant-spray',
  'oks-3751-400ml': 'https://www.oks-india.com/product/high-performance-adhesive-lubricant-spray',
  'oks-400': 'https://www.oks-india.com/product/mos2-high-performance-grease',
  'oks-400-1kg': 'https://www.oks-india.com/product/mos2-high-performance-grease',
  'oks-400-250g': 'https://www.oks-india.com/product/mos2-high-performance-grease',
  'oks-410': 'https://www.oks-india.com/product/high-temperature-grease',
  'oks-410-1kg': 'https://www.oks-india.com/product/high-temperature-grease',
  'oks-410-5kg': 'https://www.oks-india.com/product/high-temperature-grease',
  'oks-410-00': 'https://www.oks-india.com/product/fluid-gear-grease',
  'oks-410-00-1kg': 'https://www.oks-india.com/product/fluid-gear-grease',
  'oks-418': 'https://www.oks-india.com/product/high-temperature-bearing-grease',
  'oks-418-1kg': 'https://www.oks-india.com/product/high-temperature-bearing-grease',
  'oks-423': 'https://www.oks-india.com/product/low-temperature-gear-grease',
  'oks-423-1kg': 'https://www.oks-india.com/product/low-temperature-gear-grease',
  'oks-424': 'https://www.oks-india.com/product/synthetic-high-temperature-grease',
  'oks-424-1kg': 'https://www.oks-india.com/product/synthetic-high-temperature-grease',
  'oks-424-250g': 'https://www.oks-india.com/product/synthetic-high-temperature-grease',
  'oks-432': 'https://www.oks-india.com/product/high-temperature-mos2-grease',
  'oks-432-1kg': 'https://www.oks-india.com/product/high-temperature-mos2-grease',
  'oks-432-5kg': 'https://www.oks-india.com/product/high-temperature-mos2-grease',
  'oks-491': 'https://www.oks-india.com/product/open-gear-spray-grease',
  'oks-491-500ml': 'https://www.oks-india.com/product/open-gear-spray-grease',
  'oks-640': 'https://www.oks-india.com/product/biodegradable-lubricating-oil',
  'oks-640-1l': 'https://www.oks-india.com/product/biodegradable-lubricating-oil',
  'oks-641': 'https://www.oks-india.com/product/rust-dissolver-penetrating-oil',
  'oks-91361-mr': 'https://www.oks-india.com/product/moisture-remover-contact-protection-spray',
  'oks-91621-anti-spatter': 'https://www.oks-india.com/product/anti-spatter-spray',
  'oks-9200': 'https://www.oks-india.com/product/molybdenum-disulfide-powder',
  'oks-9241': 'https://www.oks-india.com/product/plastic-sliding-film-spray',
  'oks-2600': 'https://www.oks-india.com/product/industrial-cleaning-concentrate',
  'oks-2600-1l': 'https://www.oks-india.com/product/industrial-cleaning-concentrate',
  'oks-2600-5l': 'https://www.oks-india.com/product/industrial-cleaning-concentrate',
  'oks-2601': 'https://www.oks-india.com/product/biodegradable-cleaner-spray',
  'oks-2601-500ml': 'https://www.oks-india.com/product/biodegradable-cleaner-spray',
  'oks-2611': 'https://www.oks-india.com/product/universal-cleaner',
  'oks-2611-335ml': 'https://www.oks-india.com/product/universal-cleaner',
  'oks-2621': 'https://www.oks-india.com/product/contact-cleaner-spray',
  'oks-2621-non-live-500ml': 'https://www.oks-india.com/product/contact-cleaner-spray',
  'oks-2650': 'https://www.oks-india.com/product/heavy-duty-eco-cleaner',
  'oks-2650-1l': 'https://www.oks-india.com/product/heavy-duty-eco-cleaner',
  'oks-2671': 'https://www.oks-india.com/product/high-performance-chain-spray',
  'oks-2671-400ml': 'https://www.oks-india.com/product/high-performance-chain-spray',
  'oks-2801': 'https://www.oks-india.com/product/leak-detector-spray',
  'oks-2801-400ml': 'https://www.oks-india.com/product/leak-detector-spray',
  'oks-2901': 'https://www.oks-india.com/product/belt-maintenance-spray',
  'oks-2901-500ml': 'https://www.oks-india.com/product/belt-maintenance-spray',
  'oks-2101': 'https://www.oks-india.com/product/mos2-dry-film-lubricant-spray',
  'oks-2101-500ml': 'https://www.oks-india.com/product/mos2-dry-film-lubricant-spray',
  'oks-2101-blue-500ml': 'https://www.oks-india.com/product/mos2-dry-film-lubricant-spray',
  'oks-2101-st-natural-500ml': 'https://www.oks-india.com/product/mos2-dry-film-lubricant-spray',
  'oks-2131': 'https://www.oks-india.com/product/copper-anti-seize-spray',
  'oks-2131-500ml': 'https://www.oks-india.com/product/copper-anti-seize-spray',
  'oks-2160': 'https://www.oks-india.com/product/zinc-protective-coating',
  'oks-2160-1l': 'https://www.oks-india.com/product/zinc-protective-coating',
  'oks-2211': 'https://www.oks-india.com/product/ceramic-anti-seize-spray',
  'oks-2211-500ml': 'https://www.oks-india.com/product/ceramic-anti-seize-spray',
  'oks-2251': 'https://www.oks-india.com/product/ptfe-dry-film-lubricant-spray',
  'oks-2251-500ml': 'https://www.oks-india.com/product/ptfe-dry-film-lubricant-spray',
  'oks-246': 'https://www.oks-india.com/product/white-lubricating-paste',
  'oks-246-1kg': 'https://www.oks-india.com/product/white-lubricating-paste',
  'oks-2551': 'https://www.oks-india.com/product/rust-remover-penetrating-oil-spray',
  'oks-2551-400ml': 'https://www.oks-india.com/product/rust-remover-penetrating-oil-spray',
  'oks-2561': 'https://www.oks-india.com/product/zinc-dust-spray',
  'oks-2561-400ml': 'https://www.oks-india.com/product/zinc-dust-spray',
  'oks-2571': 'https://www.oks-india.com/product/aluminium-spray',
  'oks-2571-400ml': 'https://www.oks-india.com/product/aluminium-spray',
  'oks-511': 'https://www.oks-india.com/product/mos2-sliding-film',
  'oks-601': 'https://www.oks-india.com/product/rust-loosener',
  'oks-1110': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-1kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-5kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-30kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-1-500g': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-1-5kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-6-1kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-6-250g': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-6-5kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-6-pink-1kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-6-pink-500g': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1110-6-pink-30kg': 'https://www.oks-india.com/product/silicone-grease',
  'oks-1111-400ml': 'https://www.oks-india.com/product/silicone-grease', // spray variant of grease
  'oks-1035': 'https://www.oks-india.com/product/high-performance-lubricating-oil',
  'oks-1035-1-1l': 'https://www.oks-india.com/product/high-performance-lubricating-oil',
  'oks-110': 'https://www.oks-india.com/product/assembly-paste-mos2',
  'oks-110-5kg': 'https://www.oks-india.com/product/assembly-paste-mos2',
  'oks-1361': 'https://www.oks-india.com/product/silicone-release-agent',
  'oks-1361-500ml': 'https://www.oks-india.com/product/silicone-release-agent',
  'oks-1521': 'https://www.oks-india.com/product/high-temperature-oil-spray',
  'oks-1521-500ml': 'https://www.oks-india.com/product/high-temperature-oil-spray',
  'oks-200': 'https://www.oks-india.com/product/mos2-assembly-paste',
  'oks-200-1kg': 'https://www.oks-india.com/product/mos2-assembly-paste',
  'oks-200-250g': 'https://www.oks-india.com/product/mos2-assembly-paste',
  'oks-201': 'https://www.oks-india.com/product/mos2-assembly-paste-spray',
  'oks-201-500ml': 'https://www.oks-india.com/product/mos2-assembly-paste-spray',
  'oks-2100': 'https://www.oks-india.com/product/corrosion-protection-film',
  'oks-2100-5l': 'https://www.oks-india.com/product/corrosion-protection-film',
  'oks-92621': 'https://www.oks-india.com/product/safe-lc-contact-cleaner',
  'oks-92801': 'https://www.oks-india.com/product/ptfe-sliding-film-spray',
  'oks-9341': 'https://www.oks-india.com/product/chain-lubricant-spray',
  'oks-9352': 'https://www.oks-india.com/product/high-temperature-chain-oil',
  'oks-93521': 'https://www.oks-india.com/product/high-temperature-chain-oil-spray',
  'oks-9360': 'https://www.oks-india.com/product/adhesive-wire-rope-grease',
  'oks-9361': 'https://www.oks-india.com/product/wire-rope-grease-spray',
  'oks-9361-green': 'https://www.oks-india.com/product/biodegradable-wire-rope-grease-spray',
  'oks-9361-st': 'https://www.oks-india.com/product/structural-grease-spray',
  'oks-9433': 'https://www.oks-india.com/product/longlife-bearing-grease',
  'oks-9680': 'https://www.oks-india.com/product/anti-rust-oil',
  'oks-chisel-paste': 'https://www.oks-india.com/product/chisel-paste',
  'oks-grease-gun': 'https://www.oks-india.com/product/grease-gun',
  'oks-hd-1250-mo': 'https://www.oks-india.com/product/hd-1250-mo-grease',
  'oks-kit': 'https://www.oks-india.com/product/maintenance-kit',
  'oks-silicone-grease': 'https://www.oks-india.com/product/silicone-grease',
  'oks-spray-boy': 'https://www.oks-india.com/product/spray-boy',

  // --- KLÜBER PRODUCTS ---
  'kluber-asonic-ghy-72': 'https://www.klueber.com/in/en/products-and-service/',
  'isoflex-nbu-15': 'https://www.klueber.com/in/en/products-and-service/products/isoflex-nbu-15/',
  'isoflex-nbu-15-1kg': 'https://www.klueber.com/in/en/products-and-service/products/isoflex-nbu-15/',
  'isoflex-nbu-15-50g': 'https://www.klueber.com/in/en/products-and-service/products/isoflex-nbu-15/',
  'isoflex-topas-nb-52': 'https://www.klueber.com/in/en/products-and-service/products/isoflex-topas-nb-52/',
  'isoflex-topas-nb-52-1kg': 'https://www.klueber.com/in/en/products-and-service/products/isoflex-topas-nb-52/',
  'isoflex-topas-lds-18-spc-a-1kg': 'https://www.klueber.com/in/en/products-and-service/products/isoflex-topas-lds-18/',
  'kluber-microlube-gb-00': 'https://www.klueber.com/in/en/products-and-service/products/microlube-gb-00/',
  'kluber-microlube-gl-261': 'https://www.klueber.com/in/en/products-and-service/products/microlube-gl-261/',
  'kluber-petamo-ghy-133-n': 'https://www.klueber.com/in/en/products-and-service/products/petamo-ghy-133-n/',
  'kluber-barrierta-l55-2': 'https://www.klueber.com/in/en/products-and-service/products/barrierta-l-55-2/',
  'kluber-summit-sh-68': 'https://www.klueber.com/in/en/products-and-service/products/summit-sh-68/',
  'kluber-summit-sh-100': 'https://www.klueber.com/in/en/products-and-service/products/summit-sh-100/',
  'kluber-centoplex-glp-500': 'https://www.klueber.com/in/en/products-and-service/products/centoplex-glp-500/',
  'kluber-centoplex-cx-4-375-au': 'https://www.klueber.com/in/en/products-and-service/products/centoplex-cx-4-375-au/',
  'klubersch-gh-6': 'https://www.klueber.com/in/en/products-and-service/products/kluebersynth-gh-6-series/',
  'kluberplex-bem-41-132': 'https://www.klueber.com/in/en/products-and-service/products/klueberplex-bem-41-132/',
  'klubersch-uh1-14-151': 'https://www.klueber.com/in/en/products-and-service/products/kluebersynth-uh1-14-151/',

  // --- FESTO PRODUCTS ---
  'festo-vuvb-valve': 'https://www.festo.com/in/en/p/solenoid-valve-vuvb/',
  'festo-vuvs-l-valve': 'https://www.festo.com/in/en/p/solenoid-valve-vuvs-l/',
  'festo-dfm-guided': 'https://www.festo.com/in/en/p/guided-drive-dfm/',
  'festo-dgsl-slide': 'https://www.festo.com/in/en/p/mini-slide-dgsl/',
  'festo-hgpl-gripper': 'https://www.festo.com/in/en/p/parallel-gripper-hgpl/',
  'festo-hgp-gripper': 'https://www.festo.com/in/en/p/parallel-gripper-hgp/',
  'festo-ehps-cylinder': 'https://www.festo.com/in/en/p/electric-cylinder-ehps/',
  'festo-cpe-valve': 'https://www.festo.com/in/en/p/solenoid-valve-cpe/',
  'festo-cpx-terminal': 'https://www.festo.com/in/en/p/cpx-terminal/',
  'festo-vtug-terminal': 'https://www.festo.com/in/en/p/valve-terminal-vtug/',
  'festo-adn-cylinder': 'https://www.festo.com/in/en/p/compact-cylinder-adn/',
  'festo-dsbc-cylinder': 'https://www.festo.com/in/en/p/standard-cylinder-dsbc/',
  'festo-dsnu-cylinder': 'https://www.festo.com/in/en/p/round-cylinder-dsnu/',
  'festo-dnc-cylinder': 'https://www.festo.com/in/en/p/standard-cylinder-dnc/',
  'festo-vuvg-valve': 'https://www.festo.com/in/en/p/solenoid-valve-vuvg/',
  'festo-vuvs-valve': 'https://www.festo.com/in/en/p/solenoid-valve-vuvs/',
  'festo-ms-prep': 'https://www.festo.com/in/en/p/service-unit-ms/',
  'festo-grla-valve': 'https://www.festo.com/in/en/p/one-way-flow-control-valve-grla/',
  'festo-sme-8m-sensor': 'https://www.festo.com/in/en/p/proximity-sensor-sme-8m/',
  'festo-qs-fittings': 'https://www.festo.com/in/en/p/push-in-fitting-qs/',
  'festo-pneumatics': 'https://www.festo.com/in/en/c/products/',

  // --- 3M PRODUCTS ---
  '3m-cubitron-982cx': 'https://www.3m.com/3M/en_US/p/c/abrasives/',
  '3m-cubitron-984f': 'https://www.3m.com/3M/en_US/p/c/abrasives/',
  '3m-cubitron-flap': 'https://www.3m.com/3M/en_US/p/c/abrasives/flap-discs/',
  '3m-scotch-wheel': 'https://www.3m.com/3M/en_US/p/c/abrasives/',
  '3m-scotch-pad': 'https://www.3m.com/3M/en_US/p/c/scotch-brite/',
  '3m-vhb-tape': 'https://www.3m.com/3M/en_US/p/c/tapes/vhb-tapes/',
  '3m-electrical-tape': 'https://www.3m.com/3M/en_US/p/c/electrical/',
  '3m-safety-goggles': 'https://www.3m.com/3M/en_US/p/c/personal-protective-equipment/',
  '3m-respirator': 'https://www.3m.com/3M/en_US/p/c/personal-protective-equipment/respirators/',
  '3m-ear-plugs': 'https://www.3m.com/3M/en_US/p/c/hearing-protection/',
  '3m-abrasives': 'https://www.3m.com/3M/en_US/abrasives-us/',
};

// Falls back to high-quality domains based on brand or type
export function getProductOfficialUrl(product: Product): string {
  // 1. Check if the product has a direct custom officialUrl assigned already
  if (product.officialUrl) {
    return product.officialUrl;
  }

  // 2. Check if the product ID matches our map
  const cleanId = product.id.toLowerCase().trim();
  if (PRODUCT_URL_MAP[cleanId]) {
    return PRODUCT_URL_MAP[cleanId];
  }

  // 3. Try to do a substring / fuzzy check on the product ID or name
  const nameClean = product.name.toLowerCase();
  
  // OKS Checks
  if (product.brand === 'OKS' || nameClean.includes('oks')) {
    // Try to extract OKS model number e.g. "oks 476"
    const modelMatch = cleanId.match(/oks-\d+/);
    if (modelMatch && PRODUCT_URL_MAP[modelMatch[0]]) {
      return PRODUCT_URL_MAP[modelMatch[0]];
    }
    const modelNameMatch = nameClean.match(/oks\s+(\d+)/);
    if (modelNameMatch) {
      const lookupId = `oks-${modelNameMatch[1]}`;
      if (PRODUCT_URL_MAP[lookupId]) {
        return PRODUCT_URL_MAP[lookupId];
      }
    }
    return 'https://www.oks-india.com/products';
  }

  // Klüber Checks
  if (product.brand === 'Klüber' || nameClean.includes('klüber') || nameClean.includes('kluber')) {
    if (nameClean.includes('isoflex nbu 15') || cleanId.includes('isoflex-nbu-15')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/isoflex-nbu-15/';
    }
    if (nameClean.includes('topas nb 52') || cleanId.includes('topas-nb-52')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/isoflex-topas-nb-52/';
    }
    if (nameClean.includes('microlube gb 00')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/microlube-gb-00/';
    }
    if (nameClean.includes('microlube gl 261')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/microlube-gl-261/';
    }
    if (nameClean.includes('barrierta l55')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/barrierta-l-55-2/';
    }
    if (nameClean.includes('summit sh 68')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/summit-sh-68/';
    }
    if (nameClean.includes('summit sh 100')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/summit-sh-100/';
    }
    if (nameClean.includes('centoplex glp 500')) {
      return 'https://www.klueber.com/in/en/products-and-service/products/centoplex-glp-500/';
    }
    return 'https://www.klueber.com/in/en/products-and-service/';
  }

  // Festo Checks
  if (product.brand === 'Festo' || nameClean.includes('festo')) {
    if (nameClean.includes('vuvb')) return 'https://www.festo.com/in/en/p/solenoid-valve-vuvb/';
    if (nameClean.includes('vuvs-l')) return 'https://www.festo.com/in/en/p/solenoid-valve-vuvs-l/';
    if (nameClean.includes('dfm')) return 'https://www.festo.com/in/en/p/guided-drive-dfm/';
    if (nameClean.includes('dgsl')) return 'https://www.festo.com/in/en/p/mini-slide-dgsl/';
    if (nameClean.includes('hgpl')) return 'https://www.festo.com/in/en/p/parallel-gripper-hgpl/';
    if (nameClean.includes('hgp')) return 'https://www.festo.com/in/en/p/parallel-gripper-hgp/';
    if (nameClean.includes('ehps')) return 'https://www.festo.com/in/en/p/electric-cylinder-ehps/';
    if (nameClean.includes('cpe')) return 'https://www.festo.com/in/en/p/solenoid-valve-cpe/';
    if (nameClean.includes('cpx')) return 'https://www.festo.com/in/en/p/cpx-terminal/';
    if (nameClean.includes('vtug')) return 'https://www.festo.com/in/en/p/valve-terminal-vtug/';
    if (nameClean.includes('adn')) return 'https://www.festo.com/in/en/p/compact-cylinder-adn/';
    if (nameClean.includes('dsbc')) return 'https://www.festo.com/in/en/p/standard-cylinder-dsbc/';
    if (nameClean.includes('dsnu')) return 'https://www.festo.com/in/en/p/round-cylinder-dsnu/';
    if (nameClean.includes('dnc')) return 'https://www.festo.com/in/en/p/standard-cylinder-dnc/';
    if (nameClean.includes('vuvg')) return 'https://www.festo.com/in/en/p/solenoid-valve-vuvg/';
    if (nameClean.includes('vuvs')) return 'https://www.festo.com/in/en/p/solenoid-valve-vuvs/';
    if (nameClean.includes('grla')) return 'https://www.festo.com/in/en/p/one-way-flow-control-valve-grla/';
    if (nameClean.includes('sme-8m')) return 'https://www.festo.com/in/en/p/proximity-sensor-sme-8m/';
    if (nameClean.includes('qs-')) return 'https://www.festo.com/in/en/p/push-in-fitting-qs/';
    return 'https://www.festo.com/in/en/c/products/';
  }

  // 3M Checks
  if (product.brand === '3M' || nameClean.includes('3m')) {
    if (nameClean.includes('flap disc')) return 'https://www.3m.com/3M/en_US/p/c/abrasives/flap-discs/';
    if (nameClean.includes('scotch-brite')) return 'https://www.3m.com/3M/en_US/p/c/scotch-brite/';
    if (nameClean.includes('vhb')) return 'https://www.3m.com/3M/en_US/p/c/tapes/vhb-tapes/';
    if (nameClean.includes('respirator')) return 'https://www.3m.com/3M/en_US/p/c/personal-protective-equipment/respirators/';
    if (nameClean.includes('ear plugs') || nameClean.includes('hearing')) return 'https://www.3m.com/3M/en_US/p/c/hearing-protection/';
    if (nameClean.includes('goggles') || nameClean.includes('safety glasses')) return 'https://www.3m.com/3M/en_US/p/c/personal-protective-equipment/';
    return 'https://www.3m.com/3M/en_US/abrasives-us/';
  }

  // Brand-level defaults
  if (product.brand === 'Cortec') {
    return 'https://www.cortecvci.com/';
  }
  if (product.brand === 'ACE') {
    return 'https://www.acecontrols.com/';
  }

  // Fallback default
  return 'https://www.oks-india.com/products';
}
