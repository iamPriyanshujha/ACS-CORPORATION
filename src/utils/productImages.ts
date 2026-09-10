import { Product } from '../types';
import oksLineupImage from '../assets/images/oks_official_lineup_1789016425378.jpg';
import oksSprayCanImage from '../assets/images/oks_spray_can_1789015059004.jpg';
import oksPasteTubeImage from '../assets/images/oks_paste_tube_1789015072644.jpg';
import oksPailBucketImage from '../assets/images/oks_pail_bucket_1789015086823.jpg';
import kluberProductFamilyImage from '../assets/images/kluber_product_family_1789016066636.jpg';
import kluberGreaseCartridgeImage from '../assets/images/kluber_grease_cartridge_1789016085344.jpg';
import kluberOilDrumImage from '../assets/images/kluber_oil_drum_1789016101163.jpg';
import festoLogoImage from '../assets/images/festo_logo.svg';

export { 
  oksLineupImage, 
  oksSprayCanImage, 
  oksPasteTubeImage, 
  oksPailBucketImage,
  kluberProductFamilyImage,
  kluberGreaseCartridgeImage,
  kluberOilDrumImage,
  festoLogoImage
};

/**
 * ==============================================================================
 * PRODUCT IMAGES CONFIGURATION & CUSTOM IMPORT MAP
 * ==============================================================================
 * Maps specific product IDs to their genuine manufacturer product photos.
 * ==============================================================================
 */
export const CUSTOM_PRODUCT_IMAGE_MAP: Record<string, string> = {
  // All OKS products strictly use the official genuine OKS lineup thumbnail image
  'oks-2621': oksLineupImage,
  'oks-oks-2621-non-live': oksLineupImage,
  'oks-2601': oksLineupImage,
  'oks-oks-2601': oksLineupImage,
  'oks-2600': oksLineupImage,
  'oks-oks-2600': oksLineupImage,
  'oks-9361': oksLineupImage,
  'oks-oks-9361': oksLineupImage,
  'oks-oks-9361-green': oksLineupImage,
  'oks-oks-9361-st': oksLineupImage,
  'oks-2101': oksLineupImage,
  'oks-oks-2101': oksLineupImage,
  'oks-oks-2101-blue': oksLineupImage,
  'oks-oks-2101-st-natural': oksLineupImage,
  'oks-2100': oksLineupImage,
  'oks-oks-2100': oksLineupImage,
  'oks-641': oksLineupImage,
  'oks-oks-641': oksLineupImage,
  'oks-640': oksLineupImage,
  'oks-oks-640': oksLineupImage,
  'oks-1521': oksLineupImage,
  'oks-oks-1521': oksLineupImage,
  'oks-91361': oksLineupImage,
  'oks-oks-91361-mr-spray': oksLineupImage,
  'oks-201': oksLineupImage,
  'oks-oks-201': oksLineupImage,
  'oks-451': oksLineupImage,
  'oks-oks-451': oksLineupImage,
  'oks-2801': oksLineupImage,
  'oks-oks-2801': oksLineupImage,
  'oks-2901': oksLineupImage,
  'oks-oks-2901': oksLineupImage,
  'oks-91621': oksLineupImage,
  'oks-oks-91621-anti-spatter-spray': oksLineupImage,
  'oks-92621': oksLineupImage,
  'oks-oks-92621-safe-lc-spray': oksLineupImage,
  'oks-2611': oksLineupImage,

  // OKS Pastes & MoS2 Assembly Tubes
  'oks-200': oksLineupImage,
  'oks-oks-200': oksLineupImage,
  'oks-250': oksLineupImage,
  'oks-265': oksLineupImage,
  'oks-oks-265': oksLineupImage,
  'oks-oks-chisel-paste': oksLineupImage,

  // OKS Pails, Buckets & Specialty Greases
  'oks-240': oksLineupImage,
  'oks-oks-240': oksLineupImage,
  'oks-246': oksLineupImage,
  'oks-oks-246': oksLineupImage,
  'oks-476': oksLineupImage,
  'oks-400': oksLineupImage,
  'oks-oks-400': oksLineupImage,
  'oks-410': oksLineupImage,
  'oks-oks-410': oksLineupImage,
  'oks-424': oksLineupImage,
  'oks-oks-424': oksLineupImage,
  'oks-475': oksLineupImage,
  'oks-oks-475': oksLineupImage,
  'oks-1110': oksLineupImage,
  'oks-oks-1110-1': oksLineupImage,
  'oks-oks-silicone-grease': oksLineupImage,

  // OKS Complete Kit & Lineup
  'oks-kit': oksLineupImage,
  'oks-oks-kit': oksLineupImage,

  // Klüber Synthetic Gear & Industrial Oils (Black & Yellow Drums / Jerrycans)
  'klubersynth-gh-6': kluberOilDrumImage,

  // Klüber Specialty Greases, Pastes & Spindle Bearings (Cartridges & Tins)
  'kluberplex-bem-41-132': kluberGreaseCartridgeImage,
  'klubersynth-uh1-14-151': kluberGreaseCartridgeImage,
  'kluberpaste-uh1-96-402': kluberGreaseCartridgeImage,
  'kl-ber-isoflex-nbu-15': kluberGreaseCartridgeImage,
  'kl-ber-isoflex-topas-lds-18-spc-a': kluberGreaseCartridgeImage,
  'kl-ber-isoflex-topas-nb-52': kluberGreaseCartridgeImage,
  'kl-ber-microlube-gb-00': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-500': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-100-bh': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-100-00-bh': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-100-000-bh': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-101-bh': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-102-bh': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-200-000-bh': kluberGreaseCartridgeImage,
  'kl-ber-centoplex-glp-202-bh': kluberGreaseCartridgeImage,
};

// Curated high-resolution, clean & pristine industrial photography for all categories
export const CATEGORY_IMAGES: Record<string, string> = {
  // Greases (Pristine precision gears, high-performance clean bearing mechanics)
  'greases': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Oils (High-purity synthetic lubricants, hydraulic, chain and gear fluid systems)
  'oils': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Pastes (Precision high-tech mechanical assembly, anti-seize joint lubrication)
  'pastes': oksPasteTubeImage,
  
  // Sprays (Clean maintenance aerosols, precision technical cleaners & protective dry films)
  'sprays': oksSprayCanImage,
  
  // Valves (Pneumatic solenoid valves, control terminals & automation process valves)
  'valves': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Cylinders / Drives (Festo automated robotic drives, pneumatic cylinders & guided motion)
  'cylinders': 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Abrasives (3M high-precision Cubitron flap discs, grinding wheels, abrasive finishing)
  'abrasives': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Tapes (3M VHB high-strength structural bonding tapes, electrical insulation films)
  'tapes': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Safety (Certified 3M industrial respirators, safety glasses & hearing protection)
  'safety': 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Corrosion Control (Cortec VCI corrosion inhibitor packaging, vapor phase emitters)
  'corrosion': 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&h=420&q=80',
  
  // Deceleration / Shock Absorbers (ACE industrial shock absorbers, damping gas springs)
  'deceleration': 'https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=600&h=420&q=80',
};

export const CLEAN_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=420&q=80';

/**
 * Returns the effective image URL for any product:
 * 1. Checks if the product has a custom image path or user-imported src
 * 2. Checks CUSTOM_PRODUCT_IMAGE_MAP for a direct ID override
 * 3. Handles OKS Brand specific image routing (sprays, pastes, pails, lineup)
 * 4. Falls back to curated high-resolution industrial category/brand visuals
 */
export function getProductImageUrl(product: Product): string {
  if (!product) {
    return CATEGORY_IMAGES['greases'];
  }

  const cleanId = (product.id || '').toLowerCase().trim();
  const cleanName = (product.name || '').toLowerCase().trim();
  const cleanCategory = product.category ? product.category.toLowerCase().trim() : '';
  const brandStr = (product.brand as string) || '';

  // 1. OKS BRAND STRICT ROUTING
  // USER MANDATE: Only use this thumbnail image for all OKS products, no other image.
  if (
    brandStr === 'OKS' ||
    brandStr.toLowerCase().includes('oks') ||
    cleanName.includes('oks') ||
    cleanId.includes('oks') ||
    cleanCategory.includes('oks')
  ) {
    return oksLineupImage;
  }

  // 2. FESTO BRAND STRICT ROUTING
  // USER MANDATE: Use this image for Festo products
  if (
    brandStr === 'Festo' ||
    brandStr.toLowerCase().includes('festo') ||
    cleanName.includes('festo') ||
    cleanId.includes('festo')
  ) {
    return festoLogoImage;
  }

  // 2. Direct custom image property on product if it's a URL or imported asset
  if (
    product.image && 
    (product.image.startsWith('http') || 
     product.image.startsWith('/') || 
     product.image.startsWith('data:') || 
     product.image.startsWith('blob:') ||
     product.image.includes('.png') ||
     product.image.includes('.jpg') ||
     product.image.includes('.jpeg') ||
     product.image.includes('.webp'))
  ) {
    return product.image;
  }

  // 3. Custom override map by product ID
  if (CUSTOM_PRODUCT_IMAGE_MAP[product.id]) {
    return CUSTOM_PRODUCT_IMAGE_MAP[product.id];
  }

  // 4. KLÜBER LUBRICATION BRAND SPECIFIC ROUTING
  // Maps Klüber specialty lubricants to authentic black/yellow drums, canisters, and yellow grease cartridges
  const brandName = (product.brand as string) || '';
  if (
    brandName === 'Klüber' ||
    brandName === 'KLÜBER LUBRICATION' ||
    cleanName.includes('klüber') ||
    cleanName.includes('kluber') ||
    cleanName.startsWith('isoflex') ||
    cleanName.startsWith('centoplex') ||
    cleanName.startsWith('microlube') ||
    cleanName.startsWith('barrierta') ||
    cleanName.startsWith('asonic') ||
    cleanId.startsWith('kl-ber') ||
    cleanId.startsWith('kluber')
  ) {
    // 4a. Synthetic Gear Oils, Lubricating Fluids, Hydraulic Oils (Black/Yellow Drums & Jerrycans)
    if (
      cleanCategory.includes('oil') ||
      cleanName.includes('oil') ||
      cleanName.includes('gh 6') ||
      cleanName.includes('gh-6') ||
      cleanName.includes('gem') ||
      cleanName.includes('fluid') ||
      cleanName.includes('synthetic gear') ||
      cleanName.includes('drum') ||
      cleanName.includes('canister')
    ) {
      return kluberOilDrumImage;
    }

    // 4b. Specialty Greases, Spindle Pastes, High Speed Cartridges & Tins (Isoflex, Centoplex, Microlube, Klüberplex)
    if (
      cleanCategory.includes('grease') ||
      cleanCategory.includes('paste') ||
      cleanName.includes('grease') ||
      cleanName.includes('paste') ||
      cleanName.includes('isoflex') ||
      cleanName.includes('centoplex') ||
      cleanName.includes('microlube') ||
      cleanName.includes('barrierta') ||
      cleanName.includes('asonic') ||
      cleanName.includes('klüberplex') ||
      cleanName.includes('kluberplex') ||
      cleanName.includes('uh1') ||
      cleanName.includes('nbu') ||
      cleanName.includes('topas')
    ) {
      return kluberGreaseCartridgeImage;
    }

    // 4c. General Klüber product lineup & family
    return kluberProductFamilyImage;
  }

  // 5. Keyword-specific matching for other brands
  if (cleanName.includes('respirator') || cleanName.includes('mask') || cleanName.includes('ear') || cleanName.includes('plug') || cleanName.includes('safety') || cleanName.includes('ppe')) {
    return CATEGORY_IMAGES['safety'];
  }
  if (cleanName.includes('goggles') || cleanName.includes('eye') || cleanName.includes('glasses')) {
    return 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&w=600&h=420&q=80';
  }
  if (cleanName.includes('tape') || cleanId.includes('tape') || cleanName.includes('vhb') || cleanName.includes('adhesive')) {
    return CATEGORY_IMAGES['tapes'];
  }
  if (cleanName.includes('abrasive') || cleanName.includes('cubitron') || cleanName.includes('flap') || cleanName.includes('wheel') || cleanName.includes('scotch-brite')) {
    return CATEGORY_IMAGES['abrasives'];
  }
  if (cleanName.includes('valve') || cleanName.includes('terminal') || cleanName.includes('cpe')) {
    return CATEGORY_IMAGES['valves'];
  }
  if (cleanName.includes('cylinder') || cleanName.includes('guided') || cleanName.includes('slide') || cleanName.includes('gripper') || cleanName.includes('actuator') || cleanName.includes('drive')) {
    return CATEGORY_IMAGES['cylinders'];
  }
  if (cleanName.includes('shock') || cleanName.includes('absorber') || cleanName.includes('deceleration') || cleanName.includes('damper') || product.brand === 'ACE') {
    return CATEGORY_IMAGES['deceleration'];
  }
  if (product.brand === 'Cortec' || cleanName.includes('vci') || cleanName.includes('corrosion') || cleanName.includes('biocorr') || cleanName.includes('rust')) {
    return CATEGORY_IMAGES['corrosion'];
  }

  // 5. Category-based matching for remaining products
  if (cleanCategory.includes('grease')) {
    return CATEGORY_IMAGES['greases'];
  }
  if (cleanCategory.includes('oil')) {
    return CATEGORY_IMAGES['oils'];
  }
  if (cleanCategory.includes('paste')) {
    return CATEGORY_IMAGES['pastes'];
  }
  if (cleanCategory.includes('spray') || cleanCategory.includes('cleaner') || cleanCategory.includes('aerosol')) {
    return CATEGORY_IMAGES['sprays'];
  }
  if (cleanCategory.includes('valve') || cleanCategory.includes('pneumatic')) {
    return CATEGORY_IMAGES['valves'];
  }
  if (cleanCategory.includes('cylinder') || cleanCategory.includes('drive')) {
    return CATEGORY_IMAGES['cylinders'];
  }
  if (cleanCategory.includes('abrasive')) {
    return CATEGORY_IMAGES['abrasives'];
  }
  if (cleanCategory.includes('tape') || cleanCategory.includes('adhesive')) {
    return CATEGORY_IMAGES['tapes'];
  }
  if (cleanCategory.includes('safety') || cleanCategory.includes('personal')) {
    return CATEGORY_IMAGES['safety'];
  }

  // 6. Brand-based fallbacks
  if (product.brand === 'Festo') {
    return festoLogoImage;
  }
  if (product.brand === '3M') {
    return CATEGORY_IMAGES['abrasives'];
  }
  if (product.brand === 'Klüber') {
    return kluberProductFamilyImage;
  }

  return CATEGORY_IMAGES['greases'];
}
