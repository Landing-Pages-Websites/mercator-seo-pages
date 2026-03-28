// Image paths for each page type, sourced from Pexels
// These are in public/images/ and served statically

export function getCityImage(citySlug: string): string {
  const map: Record<string, string> = {
    "houston": "/images/cities/houston/hero-1.jpg",
    "dallas-fort-worth": "/images/cities/dallas-fort-worth/hero-1.jpg",
    "san-antonio": "/images/cities/san-antonio/hero-1.jpg",
    "austin": "/images/cities/austin/hero-1.jpg",
    "miami": "/images/cities/miami/hero-1.jpg",
    "port-st-lucie": "/images/cities/port-st-lucie/hero-1.jpg",
    "orlando": "/images/cities/orlando/hero-1.jpg",
    "tampa": "/images/cities/tampa/hero-1.jpg",
    "st-petersburg": "/images/cities/st-petersburg/hero-1.jpg",
    "cape-coral": "/images/cities/cape-coral/hero-1.jpg",
    "jacksonville": "/images/cities/jacksonville/hero-1.jpg",
  };
  return map[citySlug] || "/images/general/hero-1.jpg";
}

export function getCityBodyImage(citySlug: string): string {
  const map: Record<string, string> = {
    "houston": "/images/cities/houston/hero-2.jpg",
    "dallas-fort-worth": "/images/cities/dallas-fort-worth/hero-2.jpg",
    "san-antonio": "/images/cities/san-antonio/hero-2.jpg",
    "austin": "/images/cities/austin/hero-2.jpg",
    "miami": "/images/cities/miami/hero-2.jpg",
    "port-st-lucie": "/images/cities/port-st-lucie/hero-2.jpg",
    "orlando": "/images/cities/orlando/hero-2.jpg",
    "tampa": "/images/cities/tampa/hero-2.jpg",
    "st-petersburg": "/images/cities/st-petersburg/hero-2.jpg",
    "cape-coral": "/images/cities/cape-coral/hero-2.jpg",
    "jacksonville": "/images/cities/jacksonville/hero-2.jpg",
  };
  return map[citySlug] || "/images/general/hero-2.jpg";
}

export function getCityImageAlt(cityName: string): string {
  return `Construction and development activity in the ${cityName} metro area`;
}

export function getCategoryImage(categorySlug: string): string {
  const map: Record<string, string> = {
    "commercial": "/images/categories/commercial/hero-1.jpg",
    "healthcare": "/images/categories/healthcare/hero-1.jpg",
    "retail": "/images/categories/retail/hero-1.jpg",
    "institutional": "/images/categories/institutional/hero-1.jpg",
    "office-buildings": "/images/categories/office-buildings/hero-1.jpg",
    "tenant-improvements": "/images/categories/tenant-improvements/hero-1.jpg",
    "industrial": "/images/categories/industrial/hero-1.jpg",
    "data-centers": "/images/categories/data-centers/hero-1.jpg",
    "light-industrial": "/images/categories/light-industrial/hero-1.jpg",
    "warehousing": "/images/categories/warehousing/hero-1.jpg",
    "manufacturing": "/images/categories/manufacturing/hero-1.jpg",
    "treatment-plants": "/images/categories/treatment-plants/hero-1.jpg",
    "multi-family": "/images/categories/multi-family/hero-1.jpg",
    "mixed-use": "/images/categories/mixed-use/hero-1.jpg",
    "high-rise": "/images/categories/high-rise/hero-1.jpg",
    "mid-rise": "/images/categories/mid-rise/hero-1.jpg",
    "low-rise": "/images/categories/low-rise/hero-1.jpg",
  };
  return map[categorySlug] || "/images/general/hero-1.jpg";
}

export function getCategoryBodyImage(categorySlug: string): string {
  const map: Record<string, string> = {
    "commercial": "/images/categories/commercial/hero-2.jpg",
    "healthcare": "/images/categories/healthcare/hero-2.jpg",
    "retail": "/images/categories/retail/hero-2.jpg",
    "institutional": "/images/categories/institutional/hero-2.jpg",
    "office-buildings": "/images/categories/office-buildings/hero-2.jpg",
    "tenant-improvements": "/images/categories/tenant-improvements/hero-2.jpg",
    "industrial": "/images/categories/industrial/hero-2.jpg",
    "data-centers": "/images/categories/data-centers/hero-2.jpg",
    "light-industrial": "/images/categories/light-industrial/hero-2.jpg",
    "warehousing": "/images/categories/warehousing/hero-2.jpg",
    "manufacturing": "/images/categories/manufacturing/hero-2.jpg",
    "treatment-plants": "/images/categories/treatment-plants/hero-2.jpg",
    "multi-family": "/images/categories/multi-family/hero-2.jpg",
    "mixed-use": "/images/categories/mixed-use/hero-2.jpg",
    "high-rise": "/images/categories/high-rise/hero-2.jpg",
    "mid-rise": "/images/categories/mid-rise/hero-2.jpg",
    "low-rise": "/images/categories/low-rise/hero-2.jpg",
  };
  return map[categorySlug] || "/images/general/hero-2.jpg";
}

export function getCategoryImageAlt(categoryName: string): string {
  return `${categoryName} construction project site`;
}

export function getStateImage(): string {
  return "/images/general/general-state-1.jpg";
}

export function getHeroImage(): string {
  return "/images/general/hero-1.jpg";
}

// General body images for use throughout pages
export const bodyImages = {
  meeting: "/images/general/meeting.jpg",
  siteAerial: "/images/general/site-aerial.jpg",
  blueprints: "/images/general/blueprints.jpg",
  craneSkyline: "/images/general/crane-skyline.jpg",
  hardHat: "/images/general/hard-hat.jpg",
  permits: "/images/general/permits.jpg",
  stateBody: "/images/general/general-state-2.jpg",
};
